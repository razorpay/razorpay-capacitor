import * as tslib_1 from "tslib";
import { bindLifecycleEvents } from '../../providers/angular-delegate';
import { computeStackId, destroyView, getUrl, insertView, isTabSwitch, toSegments } from './stack-utils';
export class StackController {
    constructor(tabsPrefix, containerEl, router, navCtrl, zone, location) {
        this.containerEl = containerEl;
        this.router = router;
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.location = location;
        this.views = [];
        this.skipTransition = false;
        this.nextId = 0;
        this.tabsPrefix = tabsPrefix !== undefined ? toSegments(tabsPrefix) : undefined;
    }
    createView(ref, activatedRoute) {
        const url = getUrl(this.router, activatedRoute);
        const element = (ref && ref.location && ref.location.nativeElement);
        const unlistenEvents = bindLifecycleEvents(this.zone, ref.instance, element);
        return {
            id: this.nextId++,
            stackId: computeStackId(this.tabsPrefix, url),
            unlistenEvents,
            element,
            ref,
            url,
        };
    }
    getExistingView(activatedRoute) {
        const activatedUrlKey = getUrl(this.router, activatedRoute);
        const view = this.views.find(vw => vw.url === activatedUrlKey);
        if (view) {
            view.ref.changeDetectorRef.reattach();
        }
        return view;
    }
    setActive(enteringView) {
        const consumeResult = this.navCtrl.consumeTransition();
        let { direction, animation, animationBuilder } = consumeResult;
        const leavingView = this.activeView;
        const tabSwitch = isTabSwitch(enteringView, leavingView);
        if (tabSwitch) {
            direction = 'back';
            animation = undefined;
        }
        const viewsSnapshot = this.views.slice();
        let currentNavigation;
        const router = this.router;
        // Angular >= 7.2.0
        if (router.getCurrentNavigation) {
            currentNavigation = router.getCurrentNavigation();
            // Angular < 7.2.0
        }
        else if (router.navigations &&
            router.navigations.value) {
            currentNavigation = router.navigations.value;
        }
        /**
         * If the navigation action
         * sets `replaceUrl: true`
         * then we need to make sure
         * we remove the last item
         * from our views stack
         */
        if (currentNavigation &&
            currentNavigation.extras &&
            currentNavigation.extras.replaceUrl) {
            if (this.views.length > 0) {
                this.views.splice(-1, 1);
            }
        }
        const reused = this.views.includes(enteringView);
        const views = this.insertView(enteringView, direction);
        // Trigger change detection before transition starts
        // This will call ngOnInit() the first time too, just after the view
        // was attached to the dom, but BEFORE the transition starts
        if (!reused) {
            enteringView.ref.changeDetectorRef.detectChanges();
        }
        /**
         * If we are going back from a page that
         * was presented using a custom animation
         * we should default to using that
         * unless the developer explicitly
         * provided another animation.
         */
        const customAnimation = enteringView.animationBuilder;
        if (animationBuilder === undefined &&
            direction === 'back' &&
            !tabSwitch &&
            customAnimation !== undefined) {
            animationBuilder = customAnimation;
        }
        /**
         * Save any custom animation so that navigating
         * back will use this custom animation by default.
         */
        if (leavingView) {
            leavingView.animationBuilder = animationBuilder;
        }
        // Wait until previous transitions finish
        return this.zone.runOutsideAngular(() => {
            return this.wait(() => {
                // disconnect leaving page from change detection to
                // reduce jank during the page transition
                if (leavingView) {
                    leavingView.ref.changeDetectorRef.detach();
                }
                // In case the enteringView is the same as the leavingPage we need to reattach()
                enteringView.ref.changeDetectorRef.reattach();
                return this.transition(enteringView, leavingView, animation, this.canGoBack(1), false, animationBuilder)
                    .then(() => cleanupAsync(enteringView, views, viewsSnapshot, this.location))
                    .then(() => ({
                    enteringView,
                    direction,
                    animation,
                    tabSwitch
                }));
            });
        });
    }
    canGoBack(deep, stackId = this.getActiveStackId()) {
        return this.getStack(stackId).length > deep;
    }
    pop(deep, stackId = this.getActiveStackId()) {
        return this.zone.run(() => {
            const views = this.getStack(stackId);
            if (views.length <= deep) {
                return Promise.resolve(false);
            }
            const view = views[views.length - deep - 1];
            let url = view.url;
            const viewSavedData = view.savedData;
            if (viewSavedData) {
                const primaryOutlet = viewSavedData.get('primary');
                if (primaryOutlet &&
                    primaryOutlet.route &&
                    primaryOutlet.route._routerState &&
                    primaryOutlet.route._routerState.snapshot &&
                    primaryOutlet.route._routerState.snapshot.url) {
                    url = primaryOutlet.route._routerState.snapshot.url;
                }
            }
            const { animationBuilder } = this.navCtrl.consumeTransition();
            return this.navCtrl.navigateBack(url, Object.assign({}, view.savedExtras, { animation: animationBuilder })).then(() => true);
        });
    }
    startBackTransition() {
        const leavingView = this.activeView;
        if (leavingView) {
            const views = this.getStack(leavingView.stackId);
            const enteringView = views[views.length - 2];
            const customAnimation = enteringView.animationBuilder;
            return this.wait(() => {
                return this.transition(enteringView, // entering view
                leavingView, // leaving view
                'back', this.canGoBack(2), true, customAnimation);
            });
        }
        return Promise.resolve();
    }
    endBackTransition(shouldComplete) {
        if (shouldComplete) {
            this.skipTransition = true;
            this.pop(1);
        }
        else if (this.activeView) {
            cleanup(this.activeView, this.views, this.views, this.location);
        }
    }
    getLastUrl(stackId) {
        const views = this.getStack(stackId);
        return views.length > 0 ? views[views.length - 1] : undefined;
    }
    /**
     * @internal
     */
    getRootUrl(stackId) {
        const views = this.getStack(stackId);
        return views.length > 0 ? views[0] : undefined;
    }
    getActiveStackId() {
        return this.activeView ? this.activeView.stackId : undefined;
    }
    destroy() {
        this.containerEl = undefined;
        this.views.forEach(destroyView);
        this.activeView = undefined;
        this.views = [];
    }
    getStack(stackId) {
        return this.views.filter(v => v.stackId === stackId);
    }
    insertView(enteringView, direction) {
        this.activeView = enteringView;
        this.views = insertView(this.views, enteringView, direction);
        return this.views.slice();
    }
    transition(enteringView, leavingView, direction, showGoBack, progressAnimation, animationBuilder) {
        if (this.skipTransition) {
            this.skipTransition = false;
            return Promise.resolve(false);
        }
        if (leavingView === enteringView) {
            return Promise.resolve(false);
        }
        const enteringEl = enteringView ? enteringView.element : undefined;
        const leavingEl = leavingView ? leavingView.element : undefined;
        const containerEl = this.containerEl;
        if (enteringEl && enteringEl !== leavingEl) {
            enteringEl.classList.add('ion-page');
            enteringEl.classList.add('ion-page-invisible');
            if (enteringEl.parentElement !== containerEl) {
                containerEl.appendChild(enteringEl);
            }
            if (containerEl.commit) {
                return containerEl.commit(enteringEl, leavingEl, {
                    deepWait: true,
                    duration: direction === undefined ? 0 : undefined,
                    direction,
                    showGoBack,
                    progressAnimation,
                    animationBuilder
                });
            }
        }
        return Promise.resolve(false);
    }
    wait(task) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.runningTask !== undefined) {
                yield this.runningTask;
                this.runningTask = undefined;
            }
            const promise = this.runningTask = task();
            return promise;
        });
    }
}
const cleanupAsync = (activeRoute, views, viewsSnapshot, location) => {
    if (typeof requestAnimationFrame === 'function') {
        return new Promise(resolve => {
            requestAnimationFrame(() => {
                cleanup(activeRoute, views, viewsSnapshot, location);
                resolve();
            });
        });
    }
    return Promise.resolve();
};
const ɵ0 = cleanupAsync;
const cleanup = (activeRoute, views, viewsSnapshot, location) => {
    viewsSnapshot
        .filter(view => !views.includes(view))
        .forEach(destroyView);
    views.forEach(view => {
        /**
         * In the event that a user navigated multiple
         * times in rapid succession, we want to make sure
         * we don't pre-emptively detach a view while
         * it is in mid-transition.
         *
         * In this instance we also do not care about query
         * params or fragments as it will be the same view regardless
         */
        const locationWithoutParams = location.path().split('?')[0];
        const locationWithoutFragment = locationWithoutParams.split('#')[0];
        if (view !== activeRoute && view.url !== locationWithoutFragment) {
            const element = view.element;
            element.setAttribute('aria-hidden', 'true');
            element.classList.add('ion-page-hidden');
            view.ref.changeDetectorRef.detach();
        }
    });
};
const ɵ1 = cleanup;
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2stY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25pYy9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9uYXZpZ2F0aW9uL3N0YWNrLWNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUtBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBR3ZFLE9BQU8sRUFBeUIsY0FBYyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEksTUFBTSxPQUFPLGVBQWU7SUFTMUIsWUFDRSxVQUE4QixFQUN0QixXQUF1QyxFQUN2QyxNQUFjLEVBQ2QsT0FBc0IsRUFDdEIsSUFBWSxFQUNaLFFBQWtCO1FBSmxCLGdCQUFXLEdBQVgsV0FBVyxDQUE0QjtRQUN2QyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUN0QixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQWJwQixVQUFLLEdBQWdCLEVBQUUsQ0FBQztRQUV4QixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUd2QixXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBVWpCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDbEYsQ0FBQztJQUVELFVBQVUsQ0FBQyxHQUFzQixFQUFFLGNBQThCO1FBQy9ELE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sT0FBTyxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQWdCLENBQUM7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QixFQUFFLFFBQWtCLEVBQUUsRUFBRTtJQUM3RyxhQUFhO1NBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUV4QixLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ25COzs7Ozs7OztXQVFHO1FBQ0gsTUFBTSxxQkFBcUIsR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVELE1BQU0sdUJBQXVCLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXBFLElBQUksSUFBSSxLQUFLLFdBQVcsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLHVCQUF1QixFQUFFO1lBQ2hFLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDN0IsT0FBTyxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDNUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnRSZWYsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBbmltYXRpb25CdWlsZGVyLCBSb3V0ZXJEaXJlY3Rpb24gfSBmcm9tICdAaW9uaWMvY29yZSc7XG5cbmltcG9ydCB7IGJpbmRMaWZlY3ljbGVFdmVudHMgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvYW5ndWxhci1kZWxlZ2F0ZSc7XG5pbXBvcnQgeyBOYXZDb250cm9sbGVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL25hdi1jb250cm9sbGVyJztcblxuaW1wb3J0IHsgUm91dGVWaWV3LCBTdGFja0V2ZW50LCBjb21wdXRlU3RhY2tJZCwgZGVzdHJveVZpZXcsIGdldFVybCwgaW5zZXJ0VmlldywgaXNUYWJTd2l0Y2gsIHRvU2VnbWVudHMgfSBmcm9tICcuL3N0YWNrLXV0aWxzJztcblxuZXhwb3J0IGNsYXNzIFN0YWNrQ29udHJvbGxlciB7XG5cbiAgcHJpdmF0ZSB2aWV3czogUm91dGVWaWV3W10gPSBbXTtcbiAgcHJpdmF0ZSBydW5uaW5nVGFzaz86IFByb21pc2U8YW55PjtcbiAgcHJpdmF0ZSBza2lwVHJhbnNpdGlvbiA9IGZhbHNlO1xuICBwcml2YXRlIHRhYnNQcmVmaXg6IHN0cmluZ1tdIHwgdW5kZWZpbmVkO1xuICBwcml2YXRlIGFjdGl2ZVZpZXc6IFJvdXRlVmlldyB8IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBuZXh0SWQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHRhYnNQcmVmaXg6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgICBwcml2YXRlIGNvbnRhaW5lckVsOiBIVE1MSW9uUm91dGVyT3V0bGV0RWxlbWVudCxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgbmF2Q3RybDogTmF2Q29udHJvbGxlcixcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvblxuICApIHtcbiAgICB0aGlzLnRhYnNQcmVmaXggPSB0YWJzUHJlZml4ICE9PSB1bmRlZmluZWQgPyB0b1NlZ21lbnRzKHRhYnNQcmVmaXgpIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgY3JlYXRlVmlldyhyZWY6IENvbXBvbmVudFJlZjxhbnk+LCBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpOiBSb3V0ZVZpZXcge1xuICAgIGNvbnN0IHVybCA9IGdldFVybCh0aGlzLnJvdXRlciwgYWN0aXZhdGVkUm91dGUpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSAocmVmICYmIHJlZi5sb2NhdGlvbiAmJiByZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudCkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgdW5saXN0ZW5FdmVudHMgPSBiaW5kTGlmZWN5Y2xlRXZlbnRzKHRoaXMuem9uZSwgcmVmLmluc3RhbmNlLCBlbGVtZW50KTtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRoaXMubmV4dElkKyssXG4gICAgICBzdGFja0lkOiBjb21wdXRlU3RhY2tJZCh0aGlzLnRhYnNQcmVmaXgsIHVybCksXG4gICAgICB1bmxpc3RlbkV2ZW50cyxcbiAgICAgIGVsZW1lbnQsXG4gICAgICByZWYsXG4gICAgICB1cmwsXG4gICAgfTtcbiAgfVxuXG4gIGdldEV4aXN0aW5nVmlldyhhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpOiBSb3V0ZVZpZXcgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IGFjdGl2YXRlZFVybEtleSA9IGdldFVybCh0aGlzLnJvdXRlciwgYWN0aXZhdGVkUm91dGUpO1xuICAgIGNvbnN0IHZpZXcgPSB0aGlzLnZpZXdzLmZpbmQodncgPT4gdncudXJsID09PSBhY3RpdmF0ZWRVcmxLZXkpO1xuICAgIGlmICh2aWV3KSB7XG4gICAgICB2aWV3LnJlZi5jaGFuZ2VEZXRlY3RvclJlZi5yZWF0dGFjaCgpO1xuICAgIH1cbiAgICByZXR1cm4gdmlldztcbiAgfVxuXG4gIHNldEFjdGl2ZShlbnRlcmluZ1ZpZXc6IFJvdXRlVmlldyk6IFByb21pc2U8U3RhY2tFdmVudD4ge1xuICAgIGNvbnN0IGNvbnN1bWVSZXN1bHQgPSB0aGlzLm5hdkN0cmwuY29uc3VtZVRyYW5zaXRpb24oKTtcbiAgICBsZXQgeyBkaXJlY3Rpb24sIGFuaW1hdGlvbiwgYW5pbWF0aW9uQnVpbGRlciB9ID0gY29uc3VtZVJlc3VsdDtcbiAgICBjb25zdCBsZWF2aW5nVmlldyA9IHRoaXMuYWN0aXZlVmlldztcbiAgICBjb25zdCB0YWJTd2l0Y2ggPSBpc1RhYlN3aXRjaChlbnRlcmluZ1ZpZXcsIGxlYXZpbmdWaWV3KTtcbiAgICBpZiAodGFiU3dpdGNoKSB7XG4gICAgICBkaXJlY3Rpb24gPSAnYmFjayc7XG4gICAgICBhbmltYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgY29uc3Qgdmlld3NTbmFwc2hvdCA9IHRoaXMudmlld3Muc2xpY2UoKTtcblxuICAgIGxldCBjdXJyZW50TmF2aWdhdGlvbjtcblxuICAgIGNvbnN0IHJvdXRlciA9ICh0aGlzLnJvdXRlciBhcyBhbnkpO1xuXG4gICAgLy8gQW5ndWxhciA+PSA3LjIuMFxuICAgIGlmIChyb3V0ZXIuZ2V0Q3VycmVudE5hdmlnYXRpb24pIHtcbiAgICAgIGN1cnJlbnROYXZpZ2F0aW9uID0gcm91dGVyLmdldEN1cnJlbnROYXZpZ2F0aW9uKCk7XG5cbiAgICAgIC8vIEFuZ3VsYXIgPCA3LjIuMFxuICAgIH0gZWxzZSBpZiAoXG4gICAgICByb3V0ZXIubmF2aWdhdGlvbnMgJiZcbiAgICAgIHJvdXRlci5uYXZpZ2F0aW9ucy52YWx1ZVxuICAgICkge1xuICAgICAgY3VycmVudE5hdmlnYXRpb24gPSByb3V0ZXIubmF2aWdhdGlvbnMudmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSWYgdGhlIG5hdmlnYXRpb24gYWN0aW9uXG4gICAgICogc2V0cyBgcmVwbGFjZVVybDogdHJ1ZWBcbiAgICAgKiB0aGVuIHdlIG5lZWQgdG8gbWFrZSBzdXJlXG4gICAgICogd2UgcmVtb3ZlIHRoZSBsYXN0IGl0ZW1cbiAgICAgKiBmcm9tIG91ciB2aWV3cyBzdGFja1xuICAgICAqL1xuICAgIGlmIChcbiAgICAgIGN1cnJlbnROYXZpZ2F0aW9uICYmXG4gICAgICBjdXJyZW50TmF2aWdhdGlvbi5leHRyYXMgJiZcbiAgICAgIGN1cnJlbnROYXZpZ2F0aW9uLmV4dHJhcy5yZXBsYWNlVXJsXG4gICAgKSB7XG4gICAgICBpZiAodGhpcy52aWV3cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMudmlld3Muc3BsaWNlKC0xLCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZXVzZWQgPSB0aGlzLnZpZXdzLmluY2x1ZGVzKGVudGVyaW5nVmlldyk7XG4gICAgY29uc3Qgdmlld3MgPSB0aGlzLmluc2VydFZpZXcoZW50ZXJpbmdWaWV3LCBkaXJlY3Rpb24pO1xuXG4gICAgLy8gVHJpZ2dlciBjaGFuZ2UgZGV0ZWN0aW9uIGJlZm9yZSB0cmFuc2l0aW9uIHN0YXJ0c1xuICAgIC8vIFRoaXMgd2lsbCBjYWxsIG5nT25Jbml0KCkgdGhlIGZpcnN0IHRpbWUgdG9vLCBqdXN0IGFmdGVyIHRoZSB2aWV3XG4gICAgLy8gd2FzIGF0dGFjaGVkIHRvIHRoZSBkb20sIGJ1dCBCRUZPUkUgdGhlIHRyYW5zaXRpb24gc3RhcnRzXG4gICAgaWYgKCFyZXVzZWQpIHtcbiAgICAgIGVudGVyaW5nVmlldy5yZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElmIHdlIGFyZSBnb2luZyBiYWNrIGZyb20gYSBwYWdlIHRoYXRcbiAgICAgKiB3YXMgcHJlc2VudGVkIHVzaW5nIGEgY3VzdG9tIGFuaW1hdGlvblxuICAgICAqIHdlIHNob3VsZCBkZWZhdWx0IHRvIHVzaW5nIHRoYXRcbiAgICAgKiB1bmxlc3MgdGhlIGRldmVsb3BlciBleHBsaWNpdGx5XG4gICAgICogcHJvdmlkZWQgYW5vdGhlciBhbmltYXRpb24uXG4gICAgICovXG4gICAgY29uc3QgY3VzdG9tQW5pbWF0aW9uID0gZW50ZXJpbmdWaWV3LmFuaW1hdGlvbkJ1aWxkZXI7XG4gICAgaWYgKFxuICAgICAgYW5pbWF0aW9uQnVpbGRlciA9PT0gdW5kZWZpbmVkICYmXG4gICAgICBkaXJlY3Rpb24gPT09ICdiYWNrJyAmJlxuICAgICAgIXRhYlN3aXRjaCAmJlxuICAgICAgY3VzdG9tQW5pbWF0aW9uICE9PSB1bmRlZmluZWRcbiAgICApIHtcbiAgICAgIGFuaW1hdGlvbkJ1aWxkZXIgPSBjdXN0b21BbmltYXRpb247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSBhbnkgY3VzdG9tIGFuaW1hdGlvbiBzbyB0aGF0IG5hdmlnYXRpbmdcbiAgICAgKiBiYWNrIHdpbGwgdXNlIHRoaXMgY3VzdG9tIGFuaW1hdGlvbiBieSBkZWZhdWx0LlxuICAgICAqL1xuICAgIGlmIChsZWF2aW5nVmlldykge1xuICAgICAgbGVhdmluZ1ZpZXcuYW5pbWF0aW9uQnVpbGRlciA9IGFuaW1hdGlvbkJ1aWxkZXI7XG4gICAgfVxuXG4gICAgLy8gV2FpdCB1bnRpbCBwcmV2aW91cyB0cmFuc2l0aW9ucyBmaW5pc2hcbiAgICByZXR1cm4gdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLndhaXQoKCkgPT4ge1xuICAgICAgICAvLyBkaXNjb25uZWN0IGxlYXZpbmcgcGFnZSBmcm9tIGNoYW5nZSBkZXRlY3Rpb24gdG9cbiAgICAgICAgLy8gcmVkdWNlIGphbmsgZHVyaW5nIHRoZSBwYWdlIHRyYW5zaXRpb25cbiAgICAgICAgaWYgKGxlYXZpbmdWaWV3KSB7XG4gICAgICAgICAgbGVhdmluZ1ZpZXcucmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGFjaCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEluIGNhc2UgdGhlIGVudGVyaW5nVmlldyBpcyB0aGUgc2FtZSBhcyB0aGUgbGVhdmluZ1BhZ2Ugd2UgbmVlZCB0byByZWF0dGFjaCgpXG4gICAgICAgIGVudGVyaW5nVmlldy5yZWYuY2hhbmdlRGV0ZWN0b3JSZWYucmVhdHRhY2goKTtcblxuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2l0aW9uKGVudGVyaW5nVmlldywgbGVhdmluZ1ZpZXcsIGFuaW1hdGlvbiwgdGhpcy5jYW5Hb0JhY2soMSksIGZhbHNlLCBhbmltYXRpb25CdWlsZGVyKVxuICAgICAgICAgIC50aGVuKCgpID0+IGNsZWFudXBBc3luYyhlbnRlcmluZ1ZpZXcsIHZpZXdzLCB2aWV3c1NuYXBzaG90LCB0aGlzLmxvY2F0aW9uKSlcbiAgICAgICAgICAudGhlbigoKSA9PiAoe1xuICAgICAgICAgICAgZW50ZXJpbmdWaWV3LFxuICAgICAgICAgICAgZGlyZWN0aW9uLFxuICAgICAgICAgICAgYW5pbWF0aW9uLFxuICAgICAgICAgICAgdGFiU3dpdGNoXG4gICAgICAgICAgfSkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjYW5Hb0JhY2soZGVlcDogbnVtYmVyLCBzdGFja0lkID0gdGhpcy5nZXRBY3RpdmVTdGFja0lkKCkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdGFjayhzdGFja0lkKS5sZW5ndGggPiBkZWVwO1xuICB9XG5cbiAgcG9wKGRlZXA6IG51bWJlciwgc3RhY2tJZCA9IHRoaXMuZ2V0QWN0aXZlU3RhY2tJZCgpKSB7XG4gICAgcmV0dXJuIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgY29uc3Qgdmlld3MgPSB0aGlzLmdldFN0YWNrKHN0YWNrSWQpO1xuICAgICAgaWYgKHZpZXdzLmxlbmd0aCA8PSBkZWVwKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgfVxuICAgICAgY29uc3QgdmlldyA9IHZpZXdzW3ZpZXdzLmxlbmd0aCAtIGRlZXAgLSAxXTtcbiAgICAgIGxldCB1cmwgPSB2aWV3LnVybDtcblxuICAgICAgY29uc3Qgdmlld1NhdmVkRGF0YSA9IHZpZXcuc2F2ZWREYXRhO1xuICAgICAgaWYgKHZpZXdTYXZlZERhdGEpIHtcbiAgICAgICAgY29uc3QgcHJpbWFyeU91dGxldCA9IHZpZXdTYXZlZERhdGEuZ2V0KCdwcmltYXJ5Jyk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcmltYXJ5T3V0bGV0ICYmXG4gICAgICAgICAgcHJpbWFyeU91dGxldC5yb3V0ZSAmJlxuICAgICAgICAgIHByaW1hcnlPdXRsZXQucm91dGUuX3JvdXRlclN0YXRlICYmXG4gICAgICAgICAgcHJpbWFyeU91dGxldC5yb3V0ZS5fcm91dGVyU3RhdGUuc25hcHNob3QgJiZcbiAgICAgICAgICBwcmltYXJ5T3V0bGV0LnJvdXRlLl9yb3V0ZXJTdGF0ZS5zbmFwc2hvdC51cmxcbiAgICAgICAgKSB7XG4gICAgICAgICAgdXJsID0gcHJpbWFyeU91dGxldC5yb3V0ZS5fcm91dGVyU3RhdGUuc25hcHNob3QudXJsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCB7IGFuaW1hdGlvbkJ1aWxkZXIgfSA9IHRoaXMubmF2Q3RybC5jb25zdW1lVHJhbnNpdGlvbigpO1xuICAgICAgcmV0dXJuIHRoaXMubmF2Q3RybC5uYXZpZ2F0ZUJhY2sodXJsLCB7IC4uLnZpZXcuc2F2ZWRFeHRyYXMsIGFuaW1hdGlvbjogYW5pbWF0aW9uQnVpbGRlciB9KS50aGVuKCgpID0+IHRydWUpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhcnRCYWNrVHJhbnNpdGlvbigpIHtcbiAgICBjb25zdCBsZWF2aW5nVmlldyA9IHRoaXMuYWN0aXZlVmlldztcbiAgICBpZiAobGVhdmluZ1ZpZXcpIHtcbiAgICAgIGNvbnN0IHZpZXdzID0gdGhpcy5nZXRTdGFjayhsZWF2aW5nVmlldy5zdGFja0lkKTtcbiAgICAgIGNvbnN0IGVudGVyaW5nVmlldyA9IHZpZXdzW3ZpZXdzLmxlbmd0aCAtIDJdO1xuICAgICAgY29uc3QgY3VzdG9tQW5pbWF0aW9uID0gZW50ZXJpbmdWaWV3LmFuaW1hdGlvbkJ1aWxkZXI7XG5cbiAgICAgIHJldHVybiB0aGlzLndhaXQoKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2l0aW9uKFxuICAgICAgICAgIGVudGVyaW5nVmlldywgLy8gZW50ZXJpbmcgdmlld1xuICAgICAgICAgIGxlYXZpbmdWaWV3LCAvLyBsZWF2aW5nIHZpZXdcbiAgICAgICAgICAnYmFjaycsXG4gICAgICAgICAgdGhpcy5jYW5Hb0JhY2soMiksXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICBjdXN0b21BbmltYXRpb25cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICBlbmRCYWNrVHJhbnNpdGlvbihzaG91bGRDb21wbGV0ZTogYm9vbGVhbikge1xuICAgIGlmIChzaG91bGRDb21wbGV0ZSkge1xuICAgICAgdGhpcy5za2lwVHJhbnNpdGlvbiA9IHRydWU7XG4gICAgICB0aGlzLnBvcCgxKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aXZlVmlldykge1xuICAgICAgY2xlYW51cCh0aGlzLmFjdGl2ZVZpZXcsIHRoaXMudmlld3MsIHRoaXMudmlld3MsIHRoaXMubG9jYXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIGdldExhc3RVcmwoc3RhY2tJZD86IHN0cmluZykge1xuICAgIGNvbnN0IHZpZXdzID0gdGhpcy5nZXRTdGFjayhzdGFja0lkKTtcbiAgICByZXR1cm4gdmlld3MubGVuZ3RoID4gMCA/IHZpZXdzW3ZpZXdzLmxlbmd0aCAtIDFdIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZ2V0Um9vdFVybChzdGFja0lkPzogc3RyaW5nKSB7XG4gICAgY29uc3Qgdmlld3MgPSB0aGlzLmdldFN0YWNrKHN0YWNrSWQpO1xuICAgIHJldHVybiB2aWV3cy5sZW5ndGggPiAwID8gdmlld3NbMF0gOiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXRBY3RpdmVTdGFja0lkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlVmlldyA/IHRoaXMuYWN0aXZlVmlldy5zdGFja0lkIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmNvbnRhaW5lckVsID0gdW5kZWZpbmVkITtcbiAgICB0aGlzLnZpZXdzLmZvckVhY2goZGVzdHJveVZpZXcpO1xuICAgIHRoaXMuYWN0aXZlVmlldyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnZpZXdzID0gW107XG4gIH1cblxuICBwcml2YXRlIGdldFN0YWNrKHN0YWNrSWQ6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB0aGlzLnZpZXdzLmZpbHRlcih2ID0+IHYuc3RhY2tJZCA9PT0gc3RhY2tJZCk7XG4gIH1cblxuICBwcml2YXRlIGluc2VydFZpZXcoZW50ZXJpbmdWaWV3OiBSb3V0ZVZpZXcsIGRpcmVjdGlvbjogUm91dGVyRGlyZWN0aW9uKSB7XG4gICAgdGhpcy5hY3RpdmVWaWV3ID0gZW50ZXJpbmdWaWV3O1xuICAgIHRoaXMudmlld3MgPSBpbnNlcnRWaWV3KHRoaXMudmlld3MsIGVudGVyaW5nVmlldywgZGlyZWN0aW9uKTtcbiAgICByZXR1cm4gdGhpcy52aWV3cy5zbGljZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmFuc2l0aW9uKFxuICAgIGVudGVyaW5nVmlldzogUm91dGVWaWV3IHwgdW5kZWZpbmVkLFxuICAgIGxlYXZpbmdWaWV3OiBSb3V0ZVZpZXcgfCB1bmRlZmluZWQsXG4gICAgZGlyZWN0aW9uOiAnZm9yd2FyZCcgfCAnYmFjaycgfCB1bmRlZmluZWQsXG4gICAgc2hvd0dvQmFjazogYm9vbGVhbixcbiAgICBwcm9ncmVzc0FuaW1hdGlvbjogYm9vbGVhbixcbiAgICBhbmltYXRpb25CdWlsZGVyPzogQW5pbWF0aW9uQnVpbGRlclxuICApIHtcbiAgICBpZiAodGhpcy5za2lwVHJhbnNpdGlvbikge1xuICAgICAgdGhpcy5za2lwVHJhbnNpdGlvbiA9IGZhbHNlO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgfVxuICAgIGlmIChsZWF2aW5nVmlldyA9PT0gZW50ZXJpbmdWaWV3KSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICB9XG4gICAgY29uc3QgZW50ZXJpbmdFbCA9IGVudGVyaW5nVmlldyA/IGVudGVyaW5nVmlldy5lbGVtZW50IDogdW5kZWZpbmVkO1xuICAgIGNvbnN0IGxlYXZpbmdFbCA9IGxlYXZpbmdWaWV3ID8gbGVhdmluZ1ZpZXcuZWxlbWVudCA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBjb250YWluZXJFbCA9IHRoaXMuY29udGFpbmVyRWw7XG4gICAgaWYgKGVudGVyaW5nRWwgJiYgZW50ZXJpbmdFbCAhPT0gbGVhdmluZ0VsKSB7XG4gICAgICBlbnRlcmluZ0VsLmNsYXNzTGlzdC5hZGQoJ2lvbi1wYWdlJyk7XG4gICAgICBlbnRlcmluZ0VsLmNsYXNzTGlzdC5hZGQoJ2lvbi1wYWdlLWludmlzaWJsZScpO1xuICAgICAgaWYgKGVudGVyaW5nRWwucGFyZW50RWxlbWVudCAhPT0gY29udGFpbmVyRWwpIHtcbiAgICAgICAgY29udGFpbmVyRWwuYXBwZW5kQ2hpbGQoZW50ZXJpbmdFbCk7XG4gICAgICB9XG5cbiAgICAgIGlmICgoY29udGFpbmVyRWwgYXMgYW55KS5jb21taXQpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lckVsLmNvbW1pdChlbnRlcmluZ0VsLCBsZWF2aW5nRWwsIHtcbiAgICAgICAgICBkZWVwV2FpdDogdHJ1ZSxcbiAgICAgICAgICBkdXJhdGlvbjogZGlyZWN0aW9uID09PSB1bmRlZmluZWQgPyAwIDogdW5kZWZpbmVkLFxuICAgICAgICAgIGRpcmVjdGlvbixcbiAgICAgICAgICBzaG93R29CYWNrLFxuICAgICAgICAgIHByb2dyZXNzQW5pbWF0aW9uLFxuICAgICAgICAgIGFuaW1hdGlvbkJ1aWxkZXJcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyB3YWl0PFQ+KHRhc2s6ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBpZiAodGhpcy5ydW5uaW5nVGFzayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBhd2FpdCB0aGlzLnJ1bm5pbmdUYXNrO1xuICAgICAgdGhpcy5ydW5uaW5nVGFzayA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3QgcHJvbWlzZSA9IHRoaXMucnVubmluZ1Rhc2sgPSB0YXNrKCk7XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cbn1cblxuY29uc3QgY2xlYW51cEFzeW5jID0gKGFjdGl2ZVJvdXRlOiBSb3V0ZVZpZXcsIHZpZXdzOiBSb3V0ZVZpZXdbXSwgdmlld3NTbmFwc2hvdDogUm91dGVWaWV3W10sIGxvY2F0aW9uOiBMb2NhdGlvbikgPT4ge1xuICBpZiAodHlwZW9mIChyZXF1ZXN0QW5pbWF0aW9uRnJhbWUgYXMgYW55KSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KHJlc29sdmUgPT4ge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgY2xlYW51cChhY3RpdmVSb3V0ZSwgdmlld3MsIHZpZXdzU25hcHNob3QsIGxvY2F0aW9uKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xufTtcblxuY29uc3QgY2xlYW51cCA9IChhY3RpdmVSb3V0ZTogUm91dGVWaWV3LCB2aWV3czogUm91dGVWaWV3W10sIHZpZXdzU25hcHNob3Q6IFJvdXRlVmlld1tdLCBsb2NhdGlvbjogTG9jYXRpb24pID0+IHtcbiAgdmlld3NTbmFwc2hvdFxuICAgIC5maWx0ZXIodmlldyA9PiAhdmlld3MuaW5jbHVkZXModmlldykpXG4gICAgLmZvckVhY2goZGVzdHJveVZpZXcpO1xuXG4gIHZpZXdzLmZvckVhY2godmlldyA9PiB7XG4gICAgLyoqXG4gICAgICogSW4gdGhlIGV2ZW50IHRoYXQgYSB1c2VyIG5hdmlnYXRlZCBtdWx0aXBsZVxuICAgICAqIHRpbWVzIGluIHJhcGlkIHN1Y2Nlc3Npb24sIHdlIHdhbnQgdG8gbWFrZSBzdXJlXG4gICAgICogd2UgZG9uJ3QgcHJlLWVtcHRpdmVseSBkZXRhY2ggYSB2aWV3IHdoaWxlXG4gICAgICogaXQgaXMgaW4gbWlkLXRyYW5zaXRpb24uXG4gICAgICpcbiAgICAgKiBJbiB0aGlzIGluc3RhbmNlIHdlIGFsc28gZG8gbm90IGNhcmUgYWJvdXQgcXVlcnlcbiAgICAgKiBwYXJhbXMgb3IgZnJhZ21lbnRzIGFzIGl0IHdpbGwgYmUgdGhlIHNhbWUgdmlldyByZWdhcmRsZXNzXG4gICAgICovXG4gICAgY29uc3QgbG9jYXRpb25XaXRob3V0UGFyYW1zID0gbG9jYXRpb24ucGF0aCgpLnNwbGl0KCc/JylbMF07XG4gICAgY29uc3QgbG9jYXRpb25XaXRob3V0RnJhZ21lbnQgPSBsb2NhdGlvbldpdGhvdXRQYXJhbXMuc3BsaXQoJyMnKVswXTtcblxuICAgIGlmICh2aWV3ICE9PSBhY3RpdmVSb3V0ZSAmJiB2aWV3LnVybCAhPT0gbG9jYXRpb25XaXRob3V0RnJhZ21lbnQpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB2aWV3LmVsZW1lbnQ7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpb24tcGFnZS1oaWRkZW4nKTtcbiAgICAgIHZpZXcucmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGFjaCgpO1xuICAgIH1cbiAgfSk7XG59O1xuIl19