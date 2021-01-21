import * as tslib_1 from "tslib";
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, NgZone } from '@angular/core';
import { getPlatforms, isPlatform } from '@ionic/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var Platform = /** @class */ (function () {
    function Platform(doc, zone) {
        var _this = this;
        this.doc = doc;
        /**
         * @hidden
         */
        this.backButton = new Subject();
        /**
         * The keyboardDidShow event emits when the
         * on-screen keyboard is presented.
         */
        this.keyboardDidShow = new Subject();
        /**
         * The keyboardDidHide event emits when the
         * on-screen keyboard is hidden.
         */
        this.keyboardDidHide = new Subject();
        /**
         * The pause event emits when the native platform puts the application
         * into the background, typically when the user switches to a different
         * application. This event would emit when a Cordova app is put into
         * the background, however, it would not fire on a standard web browser.
         */
        this.pause = new Subject();
        /**
         * The resume event emits when the native platform pulls the application
         * out from the background. This event would emit when a Cordova app comes
         * out from the background, however, it would not fire on a standard web browser.
         */
        this.resume = new Subject();
        /**
         * The resize event emits when the browser window has changed dimensions. This
         * could be from a browser window being physically resized, or from a device
         * changing orientation.
         */
        this.resize = new Subject();
        zone.run(function () {
            _this.win = doc.defaultView;
            _this.backButton.subscribeWithPriority = function (priority, callback) {
                return this.subscribe(function (ev) {
                    return ev.register(priority, function (processNextHandler) { return zone.run(function () { return callback(processNextHandler); }); });
                });
            };
            proxyEvent(_this.pause, doc, 'pause');
            proxyEvent(_this.resume, doc, 'resume');
            proxyEvent(_this.backButton, doc, 'ionBackButton');
            proxyEvent(_this.resize, _this.win, 'resize');
            proxyEvent(_this.keyboardDidShow, _this.win, 'ionKeyboardDidShow');
            proxyEvent(_this.keyboardDidHide, _this.win, 'ionKeyboardDidHide');
            var readyResolve;
            _this._readyPromise = new Promise(function (res) { readyResolve = res; });
            if (_this.win && _this.win['cordova']) {
                doc.addEventListener('deviceready', function () {
                    readyResolve('cordova');
                }, { once: true });
            }
            else {
                readyResolve('dom');
            }
        });
    }
    /**
     * @returns returns true/false based on platform.
     * @description
     * Depending on the platform the user is on, `is(platformName)` will
     * return `true` or `false`. Note that the same app can return `true`
     * for more than one platform name. For example, an app running from
     * an iPad would return `true` for the platform names: `mobile`,
     * `ios`, `ipad`, and `tablet`. Additionally, if the app was running
     * from Cordova then `cordova` would be true, and if it was running
     * from a web browser on the iPad then `mobileweb` would be `true`.
     *
     * ```
     * import { Platform } from 'ionic-angular';
     *
     * @Component({...})
     * export MyPage {
     *   constructor(public platform: Platform) {
     *     if (this.platform.is('ios')) {
     *       // This will only print when on iOS
     *       console.log('I am an iOS device!');
     *     }
     *   }
     * }
     * ```
     *
     * | Platform Name   | Description                        |
     * |-----------------|------------------------------------|
     * | android         | on a device running Android.       |
     * | cordova         | on a device running Cordova.       |
     * | ios             | on a device running iOS.           |
     * | ipad            | on an iPad device.                 |
     * | iphone          | on an iPhone device.               |
     * | phablet         | on a phablet device.               |
     * | tablet          | on a tablet device.                |
     * | electron        | in Electron on a desktop device.   |
     * | pwa             | as a PWA app.                      |
     * | mobile          | on a mobile device.                |
     * | mobileweb       | on a mobile device in a browser.   |
     * | desktop         | on a desktop device.               |
     * | hybrid          | is a cordova or capacitor app.     |
     *
     */
    Platform.prototype.is = function (platformName) {
        return isPlatform(this.win, platformName);
    };
    /**
     * @returns the array of platforms
     * @description
     * Depending on what device you are on, `platforms` can return multiple values.
     * Each possible value is a hierarchy of platforms. For example, on an iPhone,
     * it would return `mobile`, `ios`, and `iphone`.
     *
     * ```
     * import { Platform } from 'ionic-angular';
     *
     * @Component({...})
     * export MyPage {
     *   constructor(public platform: Platform) {
     *     // This will print an array of the current platforms
     *     console.log(this.platform.platforms());
     *   }
     * }
     * ```
     */
    Platform.prototype.platforms = function () {
        return getPlatforms(this.win);
    };
    /**
     * Returns a promise when the platform is ready and native functionality
     * can be called. If the app is running from within a web browser, then
     * the promise will resolve when the DOM is ready. When the app is running
     * from an application engine such as Cordova, then the promise will
     * resolve when Cordova triggers the `deviceready` event.
     *
     * The resolved value is the `readySource`, which states which platform
     * ready was used. For example, when Cordova is ready, the resolved ready
     * source is `cordova`. The default ready source value will be `dom`. The
     * `readySource` is useful if different logic should run depending on the
     * platform the app is running from. For example, only Cordova can execute
     * the status bar plugin, so the web should not run status bar plugin logic.
     *
     * ```
     * import { Component } from '@angular/core';
     * import { Platform } from 'ionic-angular';
     *
     * @Component({...})
     * export MyApp {
     *   constructor(public platform: Platform) {
     *     this.platform.ready().then((readySource) => {
     *       console.log('Platform ready from', readySource);
     *       // Platform now ready, execute any required native code
     *     });
     *   }
     * }
     * ```
     */
    Platform.prototype.ready = function () {
        return this._readyPromise;
    };
    Object.defineProperty(Platform.prototype, "isRTL", {
        /**
         * Returns if this app is using right-to-left language direction or not.
         * We recommend the app's `index.html` file already has the correct `dir`
         * attribute value set, such as `<html dir="ltr">` or `<html dir="rtl">`.
         * [W3C: Structural markup and right-to-left text in HTML](http://www.w3.org/International/questions/qa-html-dir)
         */
        get: function () {
            return this.doc.dir === 'rtl';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get the query string parameter
     */
    Platform.prototype.getQueryParam = function (key) {
        return readQueryParam(this.win.location.href, key);
    };
    /**
     * Returns `true` if the app is in landscape mode.
     */
    Platform.prototype.isLandscape = function () {
        return !this.isPortrait();
    };
    /**
     * Returns `true` if the app is in portait mode.
     */
    Platform.prototype.isPortrait = function () {
        return this.win.matchMedia && this.win.matchMedia('(orientation: portrait)').matches;
    };
    Platform.prototype.testUserAgent = function (expression) {
        var nav = this.win.navigator;
        return !!(nav && nav.userAgent && nav.userAgent.indexOf(expression) >= 0);
    };
    /**
     * Get the current url.
     */
    Platform.prototype.url = function () {
        return this.win.location.href;
    };
    /**
     * Gets the width of the platform's viewport using `window.innerWidth`.
     */
    Platform.prototype.width = function () {
        return this.win.innerWidth;
    };
    /**
     * Gets the height of the platform's viewport using `window.innerHeight`.
     */
    Platform.prototype.height = function () {
        return this.win.innerHeight;
    };
    Platform.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: NgZone }
    ]; };
    Platform.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function Platform_Factory() { return new Platform(i0.ɵɵinject(i1.DOCUMENT), i0.ɵɵinject(i0.NgZone)); }, token: Platform, providedIn: "root" });
    Platform = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        }),
        tslib_1.__param(0, Inject(DOCUMENT))
    ], Platform);
    return Platform;
}());
export { Platform };
var readQueryParam = function (url, key) {
    key = key.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + key + '=([^&#]*)');
    var results = regex.exec(url);
    return results ? decodeURIComponent(results[1].replace(/\+/g, ' ')) : null;
};
var ɵ0 = readQueryParam;
var proxyEvent = function (emitter, el, eventName) {
    if (el) {
        el.addEventListener(eventName, function (ev) {
            // ?? cordova might emit "null" events
            emitter.next(ev != null ? ev.detail : undefined);
        });
    }
};
var ɵ1 = proxyEvent;
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uaWMvYW5ndWxhci8iLCJzb3VyY2VzIjpbInByb3ZpZGVycy9wbGF0Zm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQXlELFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDOUcsT0FBTyxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7OztBQVM3QztJQTRDRSxrQkFBc0MsR0FBUSxFQUFFLElBQVk7UUFBNUQsaUJBMEJDO1FBMUJxQyxRQUFHLEdBQUgsR0FBRyxDQUFLO1FBdkM5Qzs7V0FFRztRQUNILGVBQVUsR0FBc0IsSUFBSSxPQUFPLEVBQWdDLENBQUM7UUFFNUU7OztXQUdHO1FBQ0gsb0JBQWUsR0FBRyxJQUFJLE9BQU8sRUFBOEIsQ0FBQztRQUU1RDs7O1dBR0c7UUFDSCxvQkFBZSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFFdEM7Ozs7O1dBS0c7UUFDSCxVQUFLLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUU1Qjs7OztXQUlHO1FBQ0gsV0FBTSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFFN0I7Ozs7V0FJRztRQUNILFdBQU0sR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBRzNCLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDUCxLQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUM7WUFDM0IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsR0FBRyxVQUFTLFFBQVEsRUFBRSxRQUFRO2dCQUNqRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQSxFQUFFO29CQUN0QixPQUFPLEVBQUUsQ0FBQyxRQUFRLENB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QUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUM3RSxDQUFDLENBQUM7O0FBRUYsSUFBTSxVQUFVLEdBQUcsVUFBSSxPQUFtQixFQUFFLEVBQWUsRUFBRSxTQUFpQjtJQUM1RSxJQUFLLEVBQVUsRUFBRTtRQUNmLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsVUFBQyxFQUE0QjtZQUMxRCxzQ0FBc0M7WUFDdEMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBRSxFQUFVLENBQUMsTUFBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqRSxDQUFDLENBQUMsQ0FBQztLQUNKO0FBQ0gsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhY2tCdXR0b25FdmVudERldGFpbCwgS2V5Ym9hcmRFdmVudERldGFpbCwgUGxhdGZvcm1zLCBnZXRQbGF0Zm9ybXMsIGlzUGxhdGZvcm0gfSBmcm9tICdAaW9uaWMvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBCYWNrQnV0dG9uRW1pdHRlciBleHRlbmRzIFN1YmplY3Q8QmFja0J1dHRvbkV2ZW50RGV0YWlsPiB7XG4gIHN1YnNjcmliZVdpdGhQcmlvcml0eShwcmlvcml0eTogbnVtYmVyLCBjYWxsYmFjazogKHByb2Nlc3NOZXh0SGFuZGxlcjogKCkgPT4gdm9pZCkgPT4gUHJvbWlzZTxhbnk+IHwgdm9pZCk6IFN1YnNjcmlwdGlvbjtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFBsYXRmb3JtIHtcblxuICBwcml2YXRlIF9yZWFkeVByb21pc2U6IFByb21pc2U8c3RyaW5nPjtcbiAgcHJpdmF0ZSB3aW46IGFueTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgYmFja0J1dHRvbjogQmFja0J1dHRvbkVtaXR0ZXIgPSBuZXcgU3ViamVjdDxCYWNrQnV0dG9uRXZlbnREZXRhaWw+KCkgYXMgYW55O1xuXG4gIC8qKlxuICAgKiBUaGUga2V5Ym9hcmREaWRTaG93IGV2ZW50IGVtaXRzIHdoZW4gdGhlXG4gICAqIG9uLXNjcmVlbiBrZXlib2FyZCBpcyBwcmVzZW50ZWQuXG4gICAqL1xuICBrZXlib2FyZERpZFNob3cgPSBuZXcgU3ViamVjdDxLZXlib2FyZEV2ZW50RGV0YWlsPigpIGFzIGFueTtcblxuICAvKipcbiAgICogVGhlIGtleWJvYXJkRGlkSGlkZSBldmVudCBlbWl0cyB3aGVuIHRoZVxuICAgKiBvbi1zY3JlZW4ga2V5Ym9hcmQgaXMgaGlkZGVuLlxuICAgKi9cbiAga2V5Ym9hcmREaWRIaWRlID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKipcbiAgICogVGhlIHBhdXNlIGV2ZW50IGVtaXRzIHdoZW4gdGhlIG5hdGl2ZSBwbGF0Zm9ybSBwdXRzIHRoZSBhcHBsaWNhdGlvblxuICAgKiBpbnRvIHRoZSBiYWNrZ3JvdW5kLCB0eXBpY2FsbHkgd2hlbiB0aGUgdXNlciBzd2l0Y2hlcyB0byBhIGRpZmZlcmVudFxuICAgKiBhcHBsaWNhdGlvbi4gVGhpcyBldmVudCB3b3VsZCBlbWl0IHdoZW4gYSBDb3Jkb3ZhIGFwcCBpcyBwdXQgaW50b1xuICAgKiB0aGUgYmFja2dyb3VuZCwgaG93ZXZlciwgaXQgd291bGQgbm90IGZpcmUgb24gYSBzdGFuZGFyZCB3ZWIgYnJvd3Nlci5cbiAgICovXG4gIHBhdXNlID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKipcbiAgICogVGhlIHJlc3VtZSBldmVudCBlbWl0cyB3aGVuIHRoZSBuYXRpdmUgcGxhdGZvcm0gcHVsbHMgdGhlIGFwcGxpY2F0aW9uXG4gICAqIG91dCBmcm9tIHRoZSBiYWNrZ3JvdW5kLiBUaGlzIGV2ZW50IHdvdWxkIGVtaXQgd2hlbiBhIENvcmRvdmEgYXBwIGNvbWVzXG4gICAqIG91dCBmcm9tIHRoZSBiYWNrZ3JvdW5kLCBob3dldmVyLCBpdCB3b3VsZCBub3QgZmlyZSBvbiBhIHN0YW5kYXJkIHdlYiBicm93c2VyLlxuICAgKi9cbiAgcmVzdW1lID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKipcbiAgICogVGhlIHJlc2l6ZSBldmVudCBlbWl0cyB3aGVuIHRoZSBicm93c2VyIHdpbmRvdyBoYXMgY2hhbmdlZCBkaW1lbnNpb25zLiBUaGlzXG4gICAqIGNvdWxkIGJlIGZyb20gYSBicm93c2VyIHdpbmRvdyBiZWluZyBwaHlzaWNhbGx5IHJlc2l6ZWQsIG9yIGZyb20gYSBkZXZpY2VcbiAgICogY2hhbmdpbmcgb3JpZW50YXRpb24uXG4gICAqL1xuICByZXNpemUgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksIHpvbmU6IE5nWm9uZSkge1xuICAgIHpvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMud2luID0gZG9jLmRlZmF1bHRWaWV3O1xuICAgICAgdGhpcy5iYWNrQnV0dG9uLnN1YnNjcmliZVdpdGhQcmlvcml0eSA9IGZ1bmN0aW9uKHByaW9yaXR5LCBjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWJzY3JpYmUoZXYgPT4ge1xuICAgICAgICAgIHJldHVybiBldi5yZWdpc3Rlcihwcmlvcml0eSwgcHJvY2Vzc05leHRIYW5kbGVyID0+IHpvbmUucnVuKCgpID0+IGNhbGxiYWNrKHByb2Nlc3NOZXh0SGFuZGxlcikpKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBwcm94eUV2ZW50KHRoaXMucGF1c2UsIGRvYywgJ3BhdXNlJyk7XG4gICAgICBwcm94eUV2ZW50KHRoaXMucmVzdW1lLCBkb2MsICdyZXN1bWUnKTtcbiAgICAgIHByb3h5RXZlbnQodGhpcy5iYWNrQnV0dG9uLCBkb2MsICdpb25CYWNrQnV0dG9uJyk7XG4gICAgICBwcm94eUV2ZW50KHRoaXMucmVzaXplLCB0aGlzLndpbiwgJ3Jlc2l6ZScpO1xuICAgICAgcHJveHlFdmVudCh0aGlzLmtleWJvYXJkRGlkU2hvdywgdGhpcy53aW4sICdpb25LZXlib2FyZERpZFNob3cnKTtcbiAgICAgIHByb3h5RXZlbnQodGhpcy5rZXlib2FyZERpZEhpZGUsIHRoaXMud2luLCAnaW9uS2V5Ym9hcmREaWRIaWRlJyk7XG5cbiAgICAgIGxldCByZWFkeVJlc29sdmU6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xuICAgICAgdGhpcy5fcmVhZHlQcm9taXNlID0gbmV3IFByb21pc2UocmVzID0+IHsgcmVhZHlSZXNvbHZlID0gcmVzOyB9KTtcbiAgICAgIGlmICh0aGlzLndpbiAmJiB0aGlzLndpblsnY29yZG92YSddKSB7XG4gICAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2VyZWFkeScsICgpID0+IHtcbiAgICAgICAgICByZWFkeVJlc29sdmUoJ2NvcmRvdmEnKTtcbiAgICAgICAgfSwgeyBvbmNlOiB0cnVlIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVhZHlSZXNvbHZlISgnZG9tJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgcmV0dXJucyB0cnVlL2ZhbHNlIGJhc2VkIG9uIHBsYXRmb3JtLlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogRGVwZW5kaW5nIG9uIHRoZSBwbGF0Zm9ybSB0aGUgdXNlciBpcyBvbiwgYGlzKHBsYXRmb3JtTmFtZSlgIHdpbGxcbiAgICogcmV0dXJuIGB0cnVlYCBvciBgZmFsc2VgLiBOb3RlIHRoYXQgdGhlIHNhbWUgYXBwIGNhbiByZXR1cm4gYHRydWVgXG4gICAqIGZvciBtb3JlIHRoYW4gb25lIHBsYXRmb3JtIG5hbWUuIEZvciBleGFtcGxlLCBhbiBhcHAgcnVubmluZyBmcm9tXG4gICAqIGFuIGlQYWQgd291bGQgcmV0dXJuIGB0cnVlYCBmb3IgdGhlIHBsYXRmb3JtIG5hbWVzOiBgbW9iaWxlYCxcbiAgICogYGlvc2AsIGBpcGFkYCwgYW5kIGB0YWJsZXRgLiBBZGRpdGlvbmFsbHksIGlmIHRoZSBhcHAgd2FzIHJ1bm5pbmdcbiAgICogZnJvbSBDb3Jkb3ZhIHRoZW4gYGNvcmRvdmFgIHdvdWxkIGJlIHRydWUsIGFuZCBpZiBpdCB3YXMgcnVubmluZ1xuICAgKiBmcm9tIGEgd2ViIGJyb3dzZXIgb24gdGhlIGlQYWQgdGhlbiBgbW9iaWxld2ViYCB3b3VsZCBiZSBgdHJ1ZWAuXG4gICAqXG4gICAqIGBgYFxuICAgKiBpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuICAgKlxuICAgKiBAQ29tcG9uZW50KHsuLi59KVxuICAgKiBleHBvcnQgTXlQYWdlIHtcbiAgICogICBjb25zdHJ1Y3RvcihwdWJsaWMgcGxhdGZvcm06IFBsYXRmb3JtKSB7XG4gICAqICAgICBpZiAodGhpcy5wbGF0Zm9ybS5pcygnaW9zJykpIHtcbiAgICogICAgICAgLy8gVGhpcyB3aWxsIG9ubHkgcHJpbnQgd2hlbiBvbiBpT1NcbiAgICogICAgICAgY29uc29sZS5sb2coJ0kgYW0gYW4gaU9TIGRldmljZSEnKTtcbiAgICogICAgIH1cbiAgICogICB9XG4gICAqIH1cbiAgICogYGBgXG4gICAqXG4gICAqIHwgUGxhdGZvcm0gTmFtZSAgIHwgRGVzY3JpcHRpb24gICAgICAgICAgICAgICAgICAgICAgICB8XG4gICAqIHwtLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gICAqIHwgYW5kcm9pZCAgICAgICAgIHwgb24gYSBkZXZpY2UgcnVubmluZyBBbmRyb2lkLiAgICAgICB8XG4gICAqIHwgY29yZG92YSAgICAgICAgIHwgb24gYSBkZXZpY2UgcnVubmluZyBDb3Jkb3ZhLiAgICAgICB8XG4gICAqIHwgaW9zICAgICAgICAgICAgIHwgb24gYSBkZXZpY2UgcnVubmluZyBpT1MuICAgICAgICAgICB8XG4gICAqIHwgaXBhZCAgICAgICAgICAgIHwgb24gYW4gaVBhZCBkZXZpY2UuICAgICAgICAgICAgICAgICB8XG4gICAqIHwgaXBob25lICAgICAgICAgIHwgb24gYW4gaVBob25lIGRldmljZS4gICAgICAgICAgICAgICB8XG4gICAqIHwgcGhhYmxldCAgICAgICAgIHwgb24gYSBwaGFibGV0IGRldmljZS4gICAgICAgICAgICAgICB8XG4gICAqIHwgdGFibGV0ICAgICAgICAgIHwgb24gYSB0YWJsZXQgZGV2aWNlLiAgICAgICAgICAgICAgICB8XG4gICAqIHwgZWxlY3Ryb24gICAgICAgIHwgaW4gRWxlY3Ryb24gb24gYSBkZXNrdG9wIGRldmljZS4gICB8XG4gICAqIHwgcHdhICAgICAgICAgICAgIHwgYXMgYSBQV0EgYXBwLiAgICAgICAgICAgICAgICAgICAgICB8XG4gICAqIHwgbW9iaWxlICAgICAgICAgIHwgb24gYSBtb2JpbGUgZGV2aWNlLiAgICAgICAgICAgICAgICB8XG4gICAqIHwgbW9iaWxld2ViICAgICAgIHwgb24gYSBtb2JpbGUgZGV2aWNlIGluIGEgYnJvd3Nlci4gICB8XG4gICAqIHwgZGVza3RvcCAgICAgICAgIHwgb24gYSBkZXNrdG9wIGRldmljZS4gICAgICAgICAgICAgICB8XG4gICAqIHwgaHlicmlkICAgICAgICAgIHwgaXMgYSBjb3Jkb3ZhIG9yIGNhcGFjaXRvciBhcHAuICAgICB8XG4gICAqXG4gICAqL1xuICBpcyhwbGF0Zm9ybU5hbWU6IFBsYXRmb3Jtcyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc1BsYXRmb3JtKHRoaXMud2luLCBwbGF0Zm9ybU5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHRoZSBhcnJheSBvZiBwbGF0Zm9ybXNcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIERlcGVuZGluZyBvbiB3aGF0IGRldmljZSB5b3UgYXJlIG9uLCBgcGxhdGZvcm1zYCBjYW4gcmV0dXJuIG11bHRpcGxlIHZhbHVlcy5cbiAgICogRWFjaCBwb3NzaWJsZSB2YWx1ZSBpcyBhIGhpZXJhcmNoeSBvZiBwbGF0Zm9ybXMuIEZvciBleGFtcGxlLCBvbiBhbiBpUGhvbmUsXG4gICAqIGl0IHdvdWxkIHJldHVybiBgbW9iaWxlYCwgYGlvc2AsIGFuZCBgaXBob25lYC5cbiAgICpcbiAgICogYGBgXG4gICAqIGltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG4gICAqXG4gICAqIEBDb21wb25lbnQoey4uLn0pXG4gICAqIGV4cG9ydCBNeVBhZ2Uge1xuICAgKiAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwbGF0Zm9ybTogUGxhdGZvcm0pIHtcbiAgICogICAgIC8vIFRoaXMgd2lsbCBwcmludCBhbiBhcnJheSBvZiB0aGUgY3VycmVudCBwbGF0Zm9ybXNcbiAgICogICAgIGNvbnNvbGUubG9nKHRoaXMucGxhdGZvcm0ucGxhdGZvcm1zKCkpO1xuICAgKiAgIH1cbiAgICogfVxuICAgKiBgYGBcbiAgICovXG4gIHBsYXRmb3JtcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIGdldFBsYXRmb3Jtcyh0aGlzLndpbik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHByb21pc2Ugd2hlbiB0aGUgcGxhdGZvcm0gaXMgcmVhZHkgYW5kIG5hdGl2ZSBmdW5jdGlvbmFsaXR5XG4gICAqIGNhbiBiZSBjYWxsZWQuIElmIHRoZSBhcHAgaXMgcnVubmluZyBmcm9tIHdpdGhpbiBhIHdlYiBicm93c2VyLCB0aGVuXG4gICAqIHRoZSBwcm9taXNlIHdpbGwgcmVzb2x2ZSB3aGVuIHRoZSBET00gaXMgcmVhZHkuIFdoZW4gdGhlIGFwcCBpcyBydW5uaW5nXG4gICAqIGZyb20gYW4gYXBwbGljYXRpb24gZW5naW5lIHN1Y2ggYXMgQ29yZG92YSwgdGhlbiB0aGUgcHJvbWlzZSB3aWxsXG4gICAqIHJlc29sdmUgd2hlbiBDb3Jkb3ZhIHRyaWdnZXJzIHRoZSBgZGV2aWNlcmVhZHlgIGV2ZW50LlxuICAgKlxuICAgKiBUaGUgcmVzb2x2ZWQgdmFsdWUgaXMgdGhlIGByZWFkeVNvdXJjZWAsIHdoaWNoIHN0YXRlcyB3aGljaCBwbGF0Zm9ybVxuICAgKiByZWFkeSB3YXMgdXNlZC4gRm9yIGV4YW1wbGUsIHdoZW4gQ29yZG92YSBpcyByZWFkeSwgdGhlIHJlc29sdmVkIHJlYWR5XG4gICAqIHNvdXJjZSBpcyBgY29yZG92YWAuIFRoZSBkZWZhdWx0IHJlYWR5IHNvdXJjZSB2YWx1ZSB3aWxsIGJlIGBkb21gLiBUaGVcbiAgICogYHJlYWR5U291cmNlYCBpcyB1c2VmdWwgaWYgZGlmZmVyZW50IGxvZ2ljIHNob3VsZCBydW4gZGVwZW5kaW5nIG9uIHRoZVxuICAgKiBwbGF0Zm9ybSB0aGUgYXBwIGlzIHJ1bm5pbmcgZnJvbS4gRm9yIGV4YW1wbGUsIG9ubHkgQ29yZG92YSBjYW4gZXhlY3V0ZVxuICAgKiB0aGUgc3RhdHVzIGJhciBwbHVnaW4sIHNvIHRoZSB3ZWIgc2hvdWxkIG5vdCBydW4gc3RhdHVzIGJhciBwbHVnaW4gbG9naWMuXG4gICAqXG4gICAqIGBgYFxuICAgKiBpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbiAgICogaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbiAgICpcbiAgICogQENvbXBvbmVudCh7Li4ufSlcbiAgICogZXhwb3J0IE15QXBwIHtcbiAgICogICBjb25zdHJ1Y3RvcihwdWJsaWMgcGxhdGZvcm06IFBsYXRmb3JtKSB7XG4gICAqICAgICB0aGlzLnBsYXRmb3JtLnJlYWR5KCkudGhlbigocmVhZHlTb3VyY2UpID0+IHtcbiAgICogICAgICAgY29uc29sZS5sb2coJ1BsYXRmb3JtIHJlYWR5IGZyb20nLCByZWFkeVNvdXJjZSk7XG4gICAqICAgICAgIC8vIFBsYXRmb3JtIG5vdyByZWFkeSwgZXhlY3V0ZSBhbnkgcmVxdWlyZWQgbmF0aXZlIGNvZGVcbiAgICogICAgIH0pO1xuICAgKiAgIH1cbiAgICogfVxuICAgKiBgYGBcbiAgICovXG4gIHJlYWR5KCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuX3JlYWR5UHJvbWlzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGlmIHRoaXMgYXBwIGlzIHVzaW5nIHJpZ2h0LXRvLWxlZnQgbGFuZ3VhZ2UgZGlyZWN0aW9uIG9yIG5vdC5cbiAgICogV2UgcmVjb21tZW5kIHRoZSBhcHAncyBgaW5kZXguaHRtbGAgZmlsZSBhbHJlYWR5IGhhcyB0aGUgY29ycmVjdCBgZGlyYFxuICAgKiBhdHRyaWJ1dGUgdmFsdWUgc2V0LCBzdWNoIGFzIGA8aHRtbCBkaXI9XCJsdHJcIj5gIG9yIGA8aHRtbCBkaXI9XCJydGxcIj5gLlxuICAgKiBbVzNDOiBTdHJ1Y3R1cmFsIG1hcmt1cCBhbmQgcmlnaHQtdG8tbGVmdCB0ZXh0IGluIEhUTUxdKGh0dHA6Ly93d3cudzMub3JnL0ludGVybmF0aW9uYWwvcXVlc3Rpb25zL3FhLWh0bWwtZGlyKVxuICAgKi9cbiAgZ2V0IGlzUlRMKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRvYy5kaXIgPT09ICdydGwnO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgcXVlcnkgc3RyaW5nIHBhcmFtZXRlclxuICAgKi9cbiAgZ2V0UXVlcnlQYXJhbShrZXk6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiByZWFkUXVlcnlQYXJhbSh0aGlzLndpbi5sb2NhdGlvbi5ocmVmLCBrZXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBhcHAgaXMgaW4gbGFuZHNjYXBlIG1vZGUuXG4gICAqL1xuICBpc0xhbmRzY2FwZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuaXNQb3J0cmFpdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBhcHAgaXMgaW4gcG9ydGFpdCBtb2RlLlxuICAgKi9cbiAgaXNQb3J0cmFpdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy53aW4ubWF0Y2hNZWRpYSAmJiB0aGlzLndpbi5tYXRjaE1lZGlhKCcob3JpZW50YXRpb246IHBvcnRyYWl0KScpLm1hdGNoZXM7XG4gIH1cblxuICB0ZXN0VXNlckFnZW50KGV4cHJlc3Npb246IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IG5hdiA9IHRoaXMud2luLm5hdmlnYXRvcjtcbiAgICByZXR1cm4gISEobmF2ICYmIG5hdi51c2VyQWdlbnQgJiYgbmF2LnVzZXJBZ2VudC5pbmRleE9mKGV4cHJlc3Npb24pID49IDApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCB1cmwuXG4gICAqL1xuICB1cmwoKSB7XG4gICAgcmV0dXJuIHRoaXMud2luLmxvY2F0aW9uLmhyZWY7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgd2lkdGggb2YgdGhlIHBsYXRmb3JtJ3Mgdmlld3BvcnQgdXNpbmcgYHdpbmRvdy5pbm5lcldpZHRoYC5cbiAgICovXG4gIHdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLndpbi5pbm5lcldpZHRoO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGhlaWdodCBvZiB0aGUgcGxhdGZvcm0ncyB2aWV3cG9ydCB1c2luZyBgd2luZG93LmlubmVySGVpZ2h0YC5cbiAgICovXG4gIGhlaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLndpbi5pbm5lckhlaWdodDtcbiAgfVxufVxuXG5jb25zdCByZWFkUXVlcnlQYXJhbSA9ICh1cmw6IHN0cmluZywga2V5OiBzdHJpbmcpID0+IHtcbiAga2V5ID0ga2V5LnJlcGxhY2UoL1tcXFtdLywgJ1xcXFxbJykucmVwbGFjZSgvW1xcXV0vLCAnXFxcXF0nKTtcbiAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKCdbXFxcXD8mXScgKyBrZXkgKyAnPShbXiYjXSopJyk7XG4gIGNvbnN0IHJlc3VsdHMgPSByZWdleC5leGVjKHVybCk7XG4gIHJldHVybiByZXN1bHRzID8gZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMV0ucmVwbGFjZSgvXFwrL2csICcgJykpIDogbnVsbDtcbn07XG5cbmNvbnN0IHByb3h5RXZlbnQgPSA8VD4oZW1pdHRlcjogU3ViamVjdDxUPiwgZWw6IEV2ZW50VGFyZ2V0LCBldmVudE5hbWU6IHN0cmluZykgPT4ge1xuICBpZiAoKGVsIGFzIGFueSkpIHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgKGV2OiBFdmVudCB8IHVuZGVmaW5lZCB8IG51bGwpID0+IHtcbiAgICAgIC8vID8/IGNvcmRvdmEgbWlnaHQgZW1pdCBcIm51bGxcIiBldmVudHNcbiAgICAgIGVtaXR0ZXIubmV4dChldiAhPSBudWxsID8gKGV2IGFzIGFueSkuZGV0YWlsIGFzIFQgOiB1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9XG59O1xuIl19