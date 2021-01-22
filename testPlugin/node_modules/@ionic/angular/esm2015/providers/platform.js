import * as tslib_1 from "tslib";
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, NgZone } from '@angular/core';
import { getPlatforms, isPlatform } from '@ionic/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
let Platform = class Platform {
    constructor(doc, zone) {
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
        zone.run(() => {
            this.win = doc.defaultView;
            this.backButton.subscribeWithPriority = function (priority, callback) {
                return this.subscribe(ev => {
                    return ev.register(priority, processNextHandler => zone.run(() => callback(processNextHandler)));
                });
            };
            proxyEvent(this.pause, doc, 'pause');
            proxyEvent(this.resume, doc, 'resume');
            proxyEvent(this.backButton, doc, 'ionBackButton');
            proxyEvent(this.resize, this.win, 'resize');
            proxyEvent(this.keyboardDidShow, this.win, 'ionKeyboardDidShow');
            proxyEvent(this.keyboardDidHide, this.win, 'ionKeyboardDidHide');
            let readyResolve;
            this._readyPromise = new Promise(res => { readyResolve = res; });
            if (this.win && this.win['cordova']) {
                doc.addEventListener('deviceready', () => {
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
    is(platformName) {
        return isPlatform(this.win, platformName);
    }
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
    platforms() {
        return getPlatforms(this.win);
    }
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
    ready() {
        return this._readyPromise;
    }
    /**
     * Returns if this app is using right-to-left language direction or not.
     * We recommend the app's `index.html` file already has the correct `dir`
     * attribute value set, such as `<html dir="ltr">` or `<html dir="rtl">`.
     * [W3C: Structural markup and right-to-left text in HTML](http://www.w3.org/International/questions/qa-html-dir)
     */
    get isRTL() {
        return this.doc.dir === 'rtl';
    }
    /**
     * Get the query string parameter
     */
    getQueryParam(key) {
        return readQueryParam(this.win.location.href, key);
    }
    /**
     * Returns `true` if the app is in landscape mode.
     */
    isLandscape() {
        return !this.isPortrait();
    }
    /**
     * Returns `true` if the app is in portait mode.
     */
    isPortrait() {
        return this.win.matchMedia && this.win.matchMedia('(orientation: portrait)').matches;
    }
    testUserAgent(expression) {
        const nav = this.win.navigator;
        return !!(nav && nav.userAgent && nav.userAgent.indexOf(expression) >= 0);
    }
    /**
     * Get the current url.
     */
    url() {
        return this.win.location.href;
    }
    /**
     * Gets the width of the platform's viewport using `window.innerWidth`.
     */
    width() {
        return this.win.innerWidth;
    }
    /**
     * Gets the height of the platform's viewport using `window.innerHeight`.
     */
    height() {
        return this.win.innerHeight;
    }
};
Platform.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: NgZone }
];
Platform.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function Platform_Factory() { return new Platform(i0.ɵɵinject(i1.DOCUMENT), i0.ɵɵinject(i0.NgZone)); }, token: Platform, providedIn: "root" });
Platform = tslib_1.__decorate([
    Injectable({
        providedIn: 'root',
    }),
    tslib_1.__param(0, Inject(DOCUMENT))
], Platform);
export { Platform };
const readQueryParam = (url, key) => {
    key = key.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + key + '=([^&#]*)');
    const results = regex.exec(url);
    return results ? decodeURIComponent(results[1].replace(/\+/g, ' ')) : null;
};
const ɵ0 = readQueryParam;
const proxyEvent = (emitter, el, eventName) => {
    if (el) {
        el.addEventListener(eventName, (ev) => {
            // ?? cordova might emit "null" events
            emitter.next(ev != null ? ev.detail : undefined);
        });
    }
};
const ɵ1 = proxyEvent;
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uaWMvYW5ndWxhci8iLCJzb3VyY2VzIjpbInByb3ZpZGVycy9wbGF0Zm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQXlELFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDOUcsT0FBTyxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7OztBQVM3QyxJQUFhLFFBQVEsR0FBckIsTUFBYSxRQUFRO0lBNENuQixZQUFzQyxHQUFRLEVBQUUsSUFBWTtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFLO1FBdkM5Qzs7V0FFRztRQUNILGVBQVUsR0FBc0IsSUFBSSxPQUFPLEVBQWdDLENBQUM7UUFFNUU7OztXQUdHO1FBQ0gsb0JBQWUsR0FBRyxJQUFJLE9BQU8sRUFBOEIsQ0FBQztRQUU1RDs7O1dBR0c7UUFDSCxvQkFBZSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFFdEM7Ozs7O1dBS0c7UUFDSCxVQUFLLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUU1Qjs7OztXQUlHO1FBQ0gsV0FBTSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFFN0I7Ozs7V0FJRztRQUNILFdBQU0sR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBRzNCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDO1lBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCLEdBQUcsVUFBUyxRQUFRLEVBQUUsUUFBUTtnQkFDakUsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO29C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QztBQUM3RSxDQUFDLENBQUM7O0FBRUYsTUFBTSxVQUFVLEdBQUcsQ0FBSSxPQUFtQixFQUFFLEVBQWUsRUFBRSxTQUFpQixFQUFFLEVBQUU7SUFDaEYsSUFBSyxFQUFVLEVBQUU7UUFDZixFQUFFLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBNEIsRUFBRSxFQUFFO1lBQzlELHNDQUFzQztZQUN0QyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFFLEVBQVUsQ0FBQyxNQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pFLENBQUMsQ0FBQyxDQUFDO0tBQ0o7QUFDSCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFja0J1dHRvbkV2ZW50RGV0YWlsLCBLZXlib2FyZEV2ZW50RGV0YWlsLCBQbGF0Zm9ybXMsIGdldFBsYXRmb3JtcywgaXNQbGF0Zm9ybSB9IGZyb20gJ0Bpb25pYy9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJhY2tCdXR0b25FbWl0dGVyIGV4dGVuZHMgU3ViamVjdDxCYWNrQnV0dG9uRXZlbnREZXRhaWw+IHtcbiAgc3Vic2NyaWJlV2l0aFByaW9yaXR5KHByaW9yaXR5OiBudW1iZXIsIGNhbGxiYWNrOiAocHJvY2Vzc05leHRIYW5kbGVyOiAoKSA9PiB2b2lkKSA9PiBQcm9taXNlPGFueT4gfCB2b2lkKTogU3Vic2NyaXB0aW9uO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUGxhdGZvcm0ge1xuXG4gIHByaXZhdGUgX3JlYWR5UHJvbWlzZTogUHJvbWlzZTxzdHJpbmc+O1xuICBwcml2YXRlIHdpbjogYW55O1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBiYWNrQnV0dG9uOiBCYWNrQnV0dG9uRW1pdHRlciA9IG5ldyBTdWJqZWN0PEJhY2tCdXR0b25FdmVudERldGFpbD4oKSBhcyBhbnk7XG5cbiAgLyoqXG4gICAqIFRoZSBrZXlib2FyZERpZFNob3cgZXZlbnQgZW1pdHMgd2hlbiB0aGVcbiAgICogb24tc2NyZWVuIGtleWJvYXJkIGlzIHByZXNlbnRlZC5cbiAgICovXG4gIGtleWJvYXJkRGlkU2hvdyA9IG5ldyBTdWJqZWN0PEtleWJvYXJkRXZlbnREZXRhaWw+KCkgYXMgYW55O1xuXG4gIC8qKlxuICAgKiBUaGUga2V5Ym9hcmREaWRIaWRlIGV2ZW50IGVtaXRzIHdoZW4gdGhlXG4gICAqIG9uLXNjcmVlbiBrZXlib2FyZCBpcyBoaWRkZW4uXG4gICAqL1xuICBrZXlib2FyZERpZEhpZGUgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIC8qKlxuICAgKiBUaGUgcGF1c2UgZXZlbnQgZW1pdHMgd2hlbiB0aGUgbmF0aXZlIHBsYXRmb3JtIHB1dHMgdGhlIGFwcGxpY2F0aW9uXG4gICAqIGludG8gdGhlIGJhY2tncm91bmQsIHR5cGljYWxseSB3aGVuIHRoZSB1c2VyIHN3aXRjaGVzIHRvIGEgZGlmZmVyZW50XG4gICAqIGFwcGxpY2F0aW9uLiBUaGlzIGV2ZW50IHdvdWxkIGVtaXQgd2hlbiBhIENvcmRvdmEgYXBwIGlzIHB1dCBpbnRvXG4gICAqIHRoZSBiYWNrZ3JvdW5kLCBob3dldmVyLCBpdCB3b3VsZCBub3QgZmlyZSBvbiBhIHN0YW5kYXJkIHdlYiBicm93c2VyLlxuICAgKi9cbiAgcGF1c2UgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIC8qKlxuICAgKiBUaGUgcmVzdW1lIGV2ZW50IGVtaXRzIHdoZW4gdGhlIG5hdGl2ZSBwbGF0Zm9ybSBwdWxscyB0aGUgYXBwbGljYXRpb25cbiAgICogb3V0IGZyb20gdGhlIGJhY2tncm91bmQuIFRoaXMgZXZlbnQgd291bGQgZW1pdCB3aGVuIGEgQ29yZG92YSBhcHAgY29tZXNcbiAgICogb3V0IGZyb20gdGhlIGJhY2tncm91bmQsIGhvd2V2ZXIsIGl0IHdvdWxkIG5vdCBmaXJlIG9uIGEgc3RhbmRhcmQgd2ViIGJyb3dzZXIuXG4gICAqL1xuICByZXN1bWUgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIC8qKlxuICAgKiBUaGUgcmVzaXplIGV2ZW50IGVtaXRzIHdoZW4gdGhlIGJyb3dzZXIgd2luZG93IGhhcyBjaGFuZ2VkIGRpbWVuc2lvbnMuIFRoaXNcbiAgICogY291bGQgYmUgZnJvbSBhIGJyb3dzZXIgd2luZG93IGJlaW5nIHBoeXNpY2FsbHkgcmVzaXplZCwgb3IgZnJvbSBhIGRldmljZVxuICAgKiBjaGFuZ2luZyBvcmllbnRhdGlvbi5cbiAgICovXG4gIHJlc2l6ZSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSwgem9uZTogTmdab25lKSB7XG4gICAgem9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy53aW4gPSBkb2MuZGVmYXVsdFZpZXc7XG4gICAgICB0aGlzLmJhY2tCdXR0b24uc3Vic2NyaWJlV2l0aFByaW9yaXR5ID0gZnVuY3Rpb24ocHJpb3JpdHksIGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YnNjcmliZShldiA9PiB7XG4gICAgICAgICAgcmV0dXJuIGV2LnJlZ2lzdGVyKHByaW9yaXR5LCBwcm9jZXNzTmV4dEhhbmRsZXIgPT4gem9uZS5ydW4oKCkgPT4gY2FsbGJhY2socHJvY2Vzc05leHRIYW5kbGVyKSkpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHByb3h5RXZlbnQodGhpcy5wYXVzZSwgZG9jLCAncGF1c2UnKTtcbiAgICAgIHByb3h5RXZlbnQodGhpcy5yZXN1bWUsIGRvYywgJ3Jlc3VtZScpO1xuICAgICAgcHJveHlFdmVudCh0aGlzLmJhY2tCdXR0b24sIGRvYywgJ2lvbkJhY2tCdXR0b24nKTtcbiAgICAgIHByb3h5RXZlbnQodGhpcy5yZXNpemUsIHRoaXMud2luLCAncmVzaXplJyk7XG4gICAgICBwcm94eUV2ZW50KHRoaXMua2V5Ym9hcmREaWRTaG93LCB0aGlzLndpbiwgJ2lvbktleWJvYXJkRGlkU2hvdycpO1xuICAgICAgcHJveHlFdmVudCh0aGlzLmtleWJvYXJkRGlkSGlkZSwgdGhpcy53aW4sICdpb25LZXlib2FyZERpZEhpZGUnKTtcblxuICAgICAgbGV0IHJlYWR5UmVzb2x2ZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgICB0aGlzLl9yZWFkeVByb21pc2UgPSBuZXcgUHJvbWlzZShyZXMgPT4geyByZWFkeVJlc29sdmUgPSByZXM7IH0pO1xuICAgICAgaWYgKHRoaXMud2luICYmIHRoaXMud2luWydjb3Jkb3ZhJ10pIHtcbiAgICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZXJlYWR5JywgKCkgPT4ge1xuICAgICAgICAgIHJlYWR5UmVzb2x2ZSgnY29yZG92YScpO1xuICAgICAgICB9LCB7IG9uY2U6IHRydWUgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWFkeVJlc29sdmUhKCdkb20nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyByZXR1cm5zIHRydWUvZmFsc2UgYmFzZWQgb24gcGxhdGZvcm0uXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBEZXBlbmRpbmcgb24gdGhlIHBsYXRmb3JtIHRoZSB1c2VyIGlzIG9uLCBgaXMocGxhdGZvcm1OYW1lKWAgd2lsbFxuICAgKiByZXR1cm4gYHRydWVgIG9yIGBmYWxzZWAuIE5vdGUgdGhhdCB0aGUgc2FtZSBhcHAgY2FuIHJldHVybiBgdHJ1ZWBcbiAgICogZm9yIG1vcmUgdGhhbiBvbmUgcGxhdGZvcm0gbmFtZS4gRm9yIGV4YW1wbGUsIGFuIGFwcCBydW5uaW5nIGZyb21cbiAgICogYW4gaVBhZCB3b3VsZCByZXR1cm4gYHRydWVgIGZvciB0aGUgcGxhdGZvcm0gbmFtZXM6IGBtb2JpbGVgLFxuICAgKiBgaW9zYCwgYGlwYWRgLCBhbmQgYHRhYmxldGAuIEFkZGl0aW9uYWxseSwgaWYgdGhlIGFwcCB3YXMgcnVubmluZ1xuICAgKiBmcm9tIENvcmRvdmEgdGhlbiBgY29yZG92YWAgd291bGQgYmUgdHJ1ZSwgYW5kIGlmIGl0IHdhcyBydW5uaW5nXG4gICAqIGZyb20gYSB3ZWIgYnJvd3NlciBvbiB0aGUgaVBhZCB0aGVuIGBtb2JpbGV3ZWJgIHdvdWxkIGJlIGB0cnVlYC5cbiAgICpcbiAgICogYGBgXG4gICAqIGltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG4gICAqXG4gICAqIEBDb21wb25lbnQoey4uLn0pXG4gICAqIGV4cG9ydCBNeVBhZ2Uge1xuICAgKiAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwbGF0Zm9ybTogUGxhdGZvcm0pIHtcbiAgICogICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzKCdpb3MnKSkge1xuICAgKiAgICAgICAvLyBUaGlzIHdpbGwgb25seSBwcmludCB3aGVuIG9uIGlPU1xuICAgKiAgICAgICBjb25zb2xlLmxvZygnSSBhbSBhbiBpT1MgZGV2aWNlIScpO1xuICAgKiAgICAgfVxuICAgKiAgIH1cbiAgICogfVxuICAgKiBgYGBcbiAgICpcbiAgICogfCBQbGF0Zm9ybSBOYW1lICAgfCBEZXNjcmlwdGlvbiAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICogfC0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAgICogfCBhbmRyb2lkICAgICAgICAgfCBvbiBhIGRldmljZSBydW5uaW5nIEFuZHJvaWQuICAgICAgIHxcbiAgICogfCBjb3Jkb3ZhICAgICAgICAgfCBvbiBhIGRldmljZSBydW5uaW5nIENvcmRvdmEuICAgICAgIHxcbiAgICogfCBpb3MgICAgICAgICAgICAgfCBvbiBhIGRldmljZSBydW5uaW5nIGlPUy4gICAgICAgICAgIHxcbiAgICogfCBpcGFkICAgICAgICAgICAgfCBvbiBhbiBpUGFkIGRldmljZS4gICAgICAgICAgICAgICAgIHxcbiAgICogfCBpcGhvbmUgICAgICAgICAgfCBvbiBhbiBpUGhvbmUgZGV2aWNlLiAgICAgICAgICAgICAgIHxcbiAgICogfCBwaGFibGV0ICAgICAgICAgfCBvbiBhIHBoYWJsZXQgZGV2aWNlLiAgICAgICAgICAgICAgIHxcbiAgICogfCB0YWJsZXQgICAgICAgICAgfCBvbiBhIHRhYmxldCBkZXZpY2UuICAgICAgICAgICAgICAgIHxcbiAgICogfCBlbGVjdHJvbiAgICAgICAgfCBpbiBFbGVjdHJvbiBvbiBhIGRlc2t0b3AgZGV2aWNlLiAgIHxcbiAgICogfCBwd2EgICAgICAgICAgICAgfCBhcyBhIFBXQSBhcHAuICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICogfCBtb2JpbGUgICAgICAgICAgfCBvbiBhIG1vYmlsZSBkZXZpY2UuICAgICAgICAgICAgICAgIHxcbiAgICogfCBtb2JpbGV3ZWIgICAgICAgfCBvbiBhIG1vYmlsZSBkZXZpY2UgaW4gYSBicm93c2VyLiAgIHxcbiAgICogfCBkZXNrdG9wICAgICAgICAgfCBvbiBhIGRlc2t0b3AgZGV2aWNlLiAgICAgICAgICAgICAgIHxcbiAgICogfCBoeWJyaWQgICAgICAgICAgfCBpcyBhIGNvcmRvdmEgb3IgY2FwYWNpdG9yIGFwcC4gICAgIHxcbiAgICpcbiAgICovXG4gIGlzKHBsYXRmb3JtTmFtZTogUGxhdGZvcm1zKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzUGxhdGZvcm0odGhpcy53aW4sIHBsYXRmb3JtTmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgdGhlIGFycmF5IG9mIHBsYXRmb3Jtc1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogRGVwZW5kaW5nIG9uIHdoYXQgZGV2aWNlIHlvdSBhcmUgb24sIGBwbGF0Zm9ybXNgIGNhbiByZXR1cm4gbXVsdGlwbGUgdmFsdWVzLlxuICAgKiBFYWNoIHBvc3NpYmxlIHZhbHVlIGlzIGEgaGllcmFyY2h5IG9mIHBsYXRmb3Jtcy4gRm9yIGV4YW1wbGUsIG9uIGFuIGlQaG9uZSxcbiAgICogaXQgd291bGQgcmV0dXJuIGBtb2JpbGVgLCBgaW9zYCwgYW5kIGBpcGhvbmVgLlxuICAgKlxuICAgKiBgYGBcbiAgICogaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbiAgICpcbiAgICogQENvbXBvbmVudCh7Li4ufSlcbiAgICogZXhwb3J0IE15UGFnZSB7XG4gICAqICAgY29uc3RydWN0b3IocHVibGljIHBsYXRmb3JtOiBQbGF0Zm9ybSkge1xuICAgKiAgICAgLy8gVGhpcyB3aWxsIHByaW50IGFuIGFycmF5IG9mIHRoZSBjdXJyZW50IHBsYXRmb3Jtc1xuICAgKiAgICAgY29uc29sZS5sb2codGhpcy5wbGF0Zm9ybS5wbGF0Zm9ybXMoKSk7XG4gICAqICAgfVxuICAgKiB9XG4gICAqIGBgYFxuICAgKi9cbiAgcGxhdGZvcm1zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gZ2V0UGxhdGZvcm1zKHRoaXMud2luKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB3aGVuIHRoZSBwbGF0Zm9ybSBpcyByZWFkeSBhbmQgbmF0aXZlIGZ1bmN0aW9uYWxpdHlcbiAgICogY2FuIGJlIGNhbGxlZC4gSWYgdGhlIGFwcCBpcyBydW5uaW5nIGZyb20gd2l0aGluIGEgd2ViIGJyb3dzZXIsIHRoZW5cbiAgICogdGhlIHByb21pc2Ugd2lsbCByZXNvbHZlIHdoZW4gdGhlIERPTSBpcyByZWFkeS4gV2hlbiB0aGUgYXBwIGlzIHJ1bm5pbmdcbiAgICogZnJvbSBhbiBhcHBsaWNhdGlvbiBlbmdpbmUgc3VjaCBhcyBDb3Jkb3ZhLCB0aGVuIHRoZSBwcm9taXNlIHdpbGxcbiAgICogcmVzb2x2ZSB3aGVuIENvcmRvdmEgdHJpZ2dlcnMgdGhlIGBkZXZpY2VyZWFkeWAgZXZlbnQuXG4gICAqXG4gICAqIFRoZSByZXNvbHZlZCB2YWx1ZSBpcyB0aGUgYHJlYWR5U291cmNlYCwgd2hpY2ggc3RhdGVzIHdoaWNoIHBsYXRmb3JtXG4gICAqIHJlYWR5IHdhcyB1c2VkLiBGb3IgZXhhbXBsZSwgd2hlbiBDb3Jkb3ZhIGlzIHJlYWR5LCB0aGUgcmVzb2x2ZWQgcmVhZHlcbiAgICogc291cmNlIGlzIGBjb3Jkb3ZhYC4gVGhlIGRlZmF1bHQgcmVhZHkgc291cmNlIHZhbHVlIHdpbGwgYmUgYGRvbWAuIFRoZVxuICAgKiBgcmVhZHlTb3VyY2VgIGlzIHVzZWZ1bCBpZiBkaWZmZXJlbnQgbG9naWMgc2hvdWxkIHJ1biBkZXBlbmRpbmcgb24gdGhlXG4gICAqIHBsYXRmb3JtIHRoZSBhcHAgaXMgcnVubmluZyBmcm9tLiBGb3IgZXhhbXBsZSwgb25seSBDb3Jkb3ZhIGNhbiBleGVjdXRlXG4gICAqIHRoZSBzdGF0dXMgYmFyIHBsdWdpbiwgc28gdGhlIHdlYiBzaG91bGQgbm90IHJ1biBzdGF0dXMgYmFyIHBsdWdpbiBsb2dpYy5cbiAgICpcbiAgICogYGBgXG4gICAqIGltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuICAgKiBpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuICAgKlxuICAgKiBAQ29tcG9uZW50KHsuLi59KVxuICAgKiBleHBvcnQgTXlBcHAge1xuICAgKiAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwbGF0Zm9ybTogUGxhdGZvcm0pIHtcbiAgICogICAgIHRoaXMucGxhdGZvcm0ucmVhZHkoKS50aGVuKChyZWFkeVNvdXJjZSkgPT4ge1xuICAgKiAgICAgICBjb25zb2xlLmxvZygnUGxhdGZvcm0gcmVhZHkgZnJvbScsIHJlYWR5U291cmNlKTtcbiAgICogICAgICAgLy8gUGxhdGZvcm0gbm93IHJlYWR5LCBleGVjdXRlIGFueSByZXF1aXJlZCBuYXRpdmUgY29kZVxuICAgKiAgICAgfSk7XG4gICAqICAgfVxuICAgKiB9XG4gICAqIGBgYFxuICAgKi9cbiAgcmVhZHkoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5fcmVhZHlQcm9taXNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgaWYgdGhpcyBhcHAgaXMgdXNpbmcgcmlnaHQtdG8tbGVmdCBsYW5ndWFnZSBkaXJlY3Rpb24gb3Igbm90LlxuICAgKiBXZSByZWNvbW1lbmQgdGhlIGFwcCdzIGBpbmRleC5odG1sYCBmaWxlIGFscmVhZHkgaGFzIHRoZSBjb3JyZWN0IGBkaXJgXG4gICAqIGF0dHJpYnV0ZSB2YWx1ZSBzZXQsIHN1Y2ggYXMgYDxodG1sIGRpcj1cImx0clwiPmAgb3IgYDxodG1sIGRpcj1cInJ0bFwiPmAuXG4gICAqIFtXM0M6IFN0cnVjdHVyYWwgbWFya3VwIGFuZCByaWdodC10by1sZWZ0IHRleHQgaW4gSFRNTF0oaHR0cDovL3d3dy53My5vcmcvSW50ZXJuYXRpb25hbC9xdWVzdGlvbnMvcWEtaHRtbC1kaXIpXG4gICAqL1xuICBnZXQgaXNSVEwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZG9jLmRpciA9PT0gJ3J0bCc7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyXG4gICAqL1xuICBnZXRRdWVyeVBhcmFtKGtleTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHJlYWRRdWVyeVBhcmFtKHRoaXMud2luLmxvY2F0aW9uLmhyZWYsIGtleSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFwcCBpcyBpbiBsYW5kc2NhcGUgbW9kZS5cbiAgICovXG4gIGlzTGFuZHNjYXBlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5pc1BvcnRyYWl0KCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFwcCBpcyBpbiBwb3J0YWl0IG1vZGUuXG4gICAqL1xuICBpc1BvcnRyYWl0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLndpbi5tYXRjaE1lZGlhICYmIHRoaXMud2luLm1hdGNoTWVkaWEoJyhvcmllbnRhdGlvbjogcG9ydHJhaXQpJykubWF0Y2hlcztcbiAgfVxuXG4gIHRlc3RVc2VyQWdlbnQoZXhwcmVzc2lvbjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgbmF2ID0gdGhpcy53aW4ubmF2aWdhdG9yO1xuICAgIHJldHVybiAhIShuYXYgJiYgbmF2LnVzZXJBZ2VudCAmJiBuYXYudXNlckFnZW50LmluZGV4T2YoZXhwcmVzc2lvbikgPj0gMCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IHVybC5cbiAgICovXG4gIHVybCgpIHtcbiAgICByZXR1cm4gdGhpcy53aW4ubG9jYXRpb24uaHJlZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSB3aWR0aCBvZiB0aGUgcGxhdGZvcm0ncyB2aWV3cG9ydCB1c2luZyBgd2luZG93LmlubmVyV2lkdGhgLlxuICAgKi9cbiAgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMud2luLmlubmVyV2lkdGg7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgaGVpZ2h0IG9mIHRoZSBwbGF0Zm9ybSdzIHZpZXdwb3J0IHVzaW5nIGB3aW5kb3cuaW5uZXJIZWlnaHRgLlxuICAgKi9cbiAgaGVpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMud2luLmlubmVySGVpZ2h0O1xuICB9XG59XG5cbmNvbnN0IHJlYWRRdWVyeVBhcmFtID0gKHVybDogc3RyaW5nLCBrZXk6IHN0cmluZykgPT4ge1xuICBrZXkgPSBrZXkucmVwbGFjZSgvW1xcW10vLCAnXFxcXFsnKS5yZXBsYWNlKC9bXFxdXS8sICdcXFxcXScpO1xuICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoJ1tcXFxcPyZdJyArIGtleSArICc9KFteJiNdKiknKTtcbiAgY29uc3QgcmVzdWx0cyA9IHJlZ2V4LmV4ZWModXJsKTtcbiAgcmV0dXJuIHJlc3VsdHMgPyBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1sxXS5yZXBsYWNlKC9cXCsvZywgJyAnKSkgOiBudWxsO1xufTtcblxuY29uc3QgcHJveHlFdmVudCA9IDxUPihlbWl0dGVyOiBTdWJqZWN0PFQ+LCBlbDogRXZlbnRUYXJnZXQsIGV2ZW50TmFtZTogc3RyaW5nKSA9PiB7XG4gIGlmICgoZWwgYXMgYW55KSkge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCAoZXY6IEV2ZW50IHwgdW5kZWZpbmVkIHwgbnVsbCkgPT4ge1xuICAgICAgLy8gPz8gY29yZG92YSBtaWdodCBlbWl0IFwibnVsbFwiIGV2ZW50c1xuICAgICAgZW1pdHRlci5uZXh0KGV2ICE9IG51bGwgPyAoZXYgYXMgYW55KS5kZXRhaWwgYXMgVCA6IHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH1cbn07XG4iXX0=