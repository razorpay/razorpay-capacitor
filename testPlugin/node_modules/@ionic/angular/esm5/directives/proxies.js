import * as tslib_1 from "tslib";
/* eslint-disable */
/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from "@angular/core";
import { ProxyCmp, proxyOutputs } from "./proxies-utils";
var IonApp = /** @class */ (function () {
    function IonApp(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonApp.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonApp = tslib_1.__decorate([
        Component({ selector: "ion-app", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
    ], IonApp);
    return IonApp;
}());
export { IonApp };
var IonAvatar = /** @class */ (function () {
    function IonAvatar(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonAvatar.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonAvatar = tslib_1.__decorate([
        Component({ selector: "ion-avatar", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
    ], IonAvatar);
    return IonAvatar;
}());
export { IonAvatar };
var IonBackButton = /** @class */ (function () {
    function IonBackButton(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonBackButton.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonBackButton = tslib_1.__decorate([
        ProxyCmp({ inputs: ["color", "defaultHref", "disabled", "icon", "mode", "routerAnimation", "text", "type"] }),
        Component({ selector: "ion-back-button", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "defaultHref", "disabled", "icon", "mode", "routerAnimation", "text", "type"] })
    ], IonBackButton);
    return IonBackButton;
}());
export { IonBackButton };
var IonBackdrop = /** @class */ (function () {
    function IonBackdrop(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionBackdropTap"]);
    }
    IonBackdrop.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonBackdrop = tslib_1.__decorate([
        ProxyCmp({ inputs: ["stopPropagation", "tappable", "visible"] }),
        Component({ selector: "ion-backdrop", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["stopPropagation", "tappable", "visible"] })
    ], IonBackdrop);
    return IonBackdrop;
}());
export { IonBackdrop };
var IonBadge = /** @class */ (function () {
    function IonBadge(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonBadge.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonBadge = tslib_1.__decorate([
        ProxyCmp({ inputs: ["color", "mode"] }),
        Component({ selector: "ion-badge", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode"] })
    ], IonBadge);
    return IonBadge;
}());
export { IonBadge };
var IonButton = /** @class */ (function () {
    function IonButton(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionFocus", "ionBlur"]);
    }
    IonButton.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonButton = tslib_1.__decorate([
        ProxyCmp({ inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }),
        Component({ selector: "ion-button", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] })
    ], IonButton);
    return IonButton;
}());
export { IonButton };
var IonButtons = /** @class */ (function () {
    function IonButtons(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonButtons.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonButtons = tslib_1.__decorate([
        ProxyCmp({ inputs: ["collapse"] }),
        Component({ selector: "ion-buttons", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["collapse"] })
    ], IonButtons);
    return IonButtons;
}());
export { IonButtons };
var IonCard = /** @class */ (function () {
    function IonCard(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonCard.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonCard = tslib_1.__decorate([
        ProxyCmp({ inputs: ["button", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"] }),
        Component({ selector: "ion-card", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["button", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"] })
    ], IonCard);
    return IonCard;
}());
export { IonCard };
var IonCardContent = /** @class */ (function () {
    function IonCardContent(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonCardContent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonCardContent = tslib_1.__decorate([
        ProxyCmp({ inputs: ["mode"] }),
        Component({ selector: "ion-card-content", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["mode"] })
    ], IonCardContent);
    return IonCardContent;
}());
export { IonCardContent };
var IonCardHeader = /** @class */ (function () {
    function IonCardHeader(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonCardHeader.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonCardHeader = tslib_1.__decorate([
        ProxyCmp({ inputs: ["color", "mode", "translucent"] }),
        Component({ selector: "ion-card-header", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode", "translucent"] })
    ], IonCardHeader);
    return IonCardHeader;
}());
export { IonCardHeader };
var IonCardSubtitle = /** @class */ (function () {
    function IonCardSubtitle(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonCardSubtitle.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonCardSubtitle = tslib_1.__decorate([
        ProxyCmp({ inputs: ["color", "mode"] }),
        Component({ selector: "ion-card-subtitle", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode"] })
    ], IonCardSubtitle);
    return IonCardSubtitle;
}());
export { IonCardSubtitle };
var IonCardTitle = /** @class */ (function () {
    function IonCardTitle(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonCardTitle.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonCardTitle = tslib_1.__decorate([
        ProxyCmp({ inputs: ["color", "mode"] }),
        Component({ selector: "ion-card-title", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode"] })
    ], IonCardTitle);
    return IonCardTitle;
}());
export { IonCardTitle };
var IonCheckbox = /** @class */ (function () {
    function IonCheckbox(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionChange", "ionFocus", "ionBlur"]);
    }
    IonCheckbox.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonCheckbox = tslib_1.__decorate([
        ProxyCmp({ inputs: ["checked", "color", "disabled", "indeterminate", "mode", "name", "value"] }),
        Component({ selector: "ion-checkbox", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["checked", "color", "disabled", "indeterminate", "mode", "name", "value"] })
    ], IonCheckbox);
    return IonCheckbox;
}());
export { IonCheckbox };
var IonChip = /** @class */ (function () {
    function IonChip(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonChip.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonChip = tslib_1.__decorate([
        ProxyCmp({ inputs: ["color", "disabled", "mode", "outline"] }),
        Component({ selector: "ion-chip", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "disabled", "mode", "outline"] })
    ], IonChip);
    return IonChip;
}());
export { IonChip };
var IonCol = /** @class */ (function () {
    function IonCol(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonCol.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonCol = tslib_1.__decorate([
        ProxyCmp({ inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"] }),
        Component({ selector: "ion-col", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"] })
    ], IonCol);
    return IonCol;
}());
export { IonCol };
var IonContent = /** @class */ (function () {
    function IonContent(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionScrollStart", "ionScroll", "ionScrollEnd"]);
    }
    IonContent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonContent = tslib_1.__decorate([
        ProxyCmp({ inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"], "methods": ["getScrollElement", "scrollToTop", "scrollToBottom", "scrollByPoint", "scrollToPoint"] }),
        Component({ selector: "ion-content", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] })
    ], IonContent);
    return IonContent;
}());
export { IonContent };
var IonDatetime = /** @class */ (function () {
    function IonDatetime(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionCancel", "ionChange", "ionFocus", "ionBlur"]);
    }
    IonDatetime.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonDatetime = tslib_1.__decorate([
        ProxyCmp({ inputs: ["cancelText", "dayNames", "dayShortNames", "dayValues", "disabled", "displayFormat", "displayTimezone", "doneText", "hourValues", "max", "min", "minuteValues", "mode", "monthNames", "monthShortNames", "monthValues", "name", "pickerFormat", "pickerOptions", "placeholder", "readonly", "value", "yearValues"], "methods": ["open"] }),
        Component({ selector: "ion-datetime", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["cancelText", "dayNames", "dayShortNames", "dayValues", "disabled", "displayFormat", "displayTimezone", "doneText", "hourValues", "max", "min", "minuteValues", "mode", "monthNames", "monthShortNames", "monthValues", "name", "pickerFormat", "pickerOptions", "placeholder", "readonly", "value", "yearValues"] })
    ], IonDatetime);
    return IonDatetime;
}());
export { IonDatetime };
var IonFab = /** @class */ (function () {
    function IonFab(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonFab.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonFab = tslib_1.__decorate([
        ProxyCmp({ inputs: ["activated", "edge", "horizontal", "vertical"], "methods": ["close"] }),
        Component({ selector: "ion-fab", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["activated", "edge", "horizontal", "vertical"] })
    ], IonFab);
    return IonFab;
}());
export { IonFab };
var IonFabButton = /** @class */ (function () {
    function IonFabButton(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionFocus", "ionBlur"]);
    }
    IonFabButton.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonFabButton = tslib_1.__decorate([
        ProxyCmp({ inputs: ["activated", "closeIcon", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "show", "size", "target", "translucent", "type"] }),
        Component({ selector: "ion-fab-button", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["activated", "closeIcon", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "show", "size", "target", "translucent", "type"] })
    ], IonFabButton);
    return IonFabButton;
}());
export { IonFabButton };
var IonFabList = /** @class */ (function () {
    function IonFabList(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonFabList.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonFabList = tslib_1.__decorate([
        ProxyCmp({ inputs: ["activated", "side"] }),
        Component({ selector: "ion-fab-list", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["activated", "side"] })
    ], IonFabList);
    return IonFabList;
}());
export { IonFabList };
var IonFooter = /** @class */ (function () {
    function IonFooter(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonFooter.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonFooter = tslib_1.__decorate([
        ProxyCmp({ inputs: ["mode", "translucent"] }),
        Component({ selector: "ion-footer", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["mode", "translucent"] })
    ], IonFooter);
    return IonFooter;
}());
export { IonFooter };
var IonGrid = /** @class */ (function () {
    function IonGrid(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonGrid.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonGrid = tslib_1.__decorate([
        ProxyCmp({ inputs: ["fixed"] }),
        Component({ selector: "ion-grid", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["fixed"] })
    ], IonGrid);
    return IonGrid;
}());
export { IonGrid };
var IonHeader = /** @class */ (function () {
    function IonHeader(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonHeader.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonHeader = tslib_1.__decorate([
        ProxyCmp({ inputs: ["collapse", "mode", "translucent"] }),
        Component({ selector: "ion-header", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["collapse", "mode", "translucent"] })
    ], IonHeader);
    return IonHeader;
}());
export { IonHeader };
var IonIcon = /** @class */ (function () {
    function IonIcon(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonIcon.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonIcon = tslib_1.__decorate([
        ProxyCmp({ inputs: ["ariaLabel", "color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "size", "src"] }),
        Component({ selector: "ion-icon", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["ariaLabel", "color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "size", "src"] })
    ], IonIcon);
    return IonIcon;
}());
export { IonIcon };
var IonImg = /** @class */ (function () {
    function IonImg(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionImgWillLoad", "ionImgDidLoad", "ionError"]);
    }
    IonImg.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonImg = tslib_1.__decorate([
        ProxyCmp({ inputs: ["alt", "src"] }),
        Component({ selector: "ion-img", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["alt", "src"] })
    ], IonImg);
    return IonImg;
}());
export { IonImg };
var IonInfiniteScroll = /** @class */ (function () {
    function IonInfiniteScroll(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionInfinite"]);
    }
    IonInfiniteScroll.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonInfiniteScroll = tslib_1.__decorate([
        ProxyCmp({ inputs: ["disabled", "position", "threshold"], "methods": ["complete"] }),
        Component({ selector: "ion-infinite-scroll", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["disabled", "position", "threshold"] })
    ], IonInfiniteScroll);
    return IonInfiniteScroll;
}());
export { IonInfiniteScroll };
var IonInfiniteScrollContent = /** @class */ (function () {
    function IonInfiniteScrollContent(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonInfiniteScrollContent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonInfiniteScrollContent = tslib_1.__decorate([
        ProxyCmp({ inputs: ["loadingSpinner", "loadingText"] }),
        Component({ selector: "ion-infinite-scroll-content", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["loadingSpinner", "loadingText"] })
    ], IonInfiniteScrollContent);
    return IonInfiniteScrollContent;
}());
export { IonInfiniteScrollContent };
var IonInput = /** @class */ (function () {
    function IonInput(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionInput", "ionChange", "ionBlur", "ionFocus"]);
    }
    IonInput.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonInput = tslib_1.__decorate([
        ProxyCmp({ inputs: ["accept", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearOnEdit", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "spellcheck", "step", "type", "value"], "methods": ["setFocus", "getInputElement"] }),
        Component({ selector: "ion-input", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["accept", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearOnEdit", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "spellcheck", "step", "type", "value"] })
    ], IonInput);
    return IonInput;
}());
export { IonInput };
var IonItem = /** @class */ (function () {
    function IonItem(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonItem.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonItem = tslib_1.__decorate([
        ProxyCmp({ inputs: ["button", "color", "detail", "detailIcon", "disabled", "download", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"] }),
        Component({ selector: "ion-item", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["button", "color", "detail", "detailIcon", "disabled", "download", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"] })
    ], IonItem);
    return IonItem;
}());
export { IonItem };
var IonItemDivider = /** @class */ (function () {
    function IonItemDivider(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonItemDivider.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonItemDivider = tslib_1.__decorate([
        ProxyCmp({ inputs: ["color", "mode", "sticky"] }),
        Component({ selector: "ion-item-divider", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode", "sticky"] })
    ], IonItemDivider);
    return IonItemDivider;
}());
export { IonItemDivider };
var IonItemGroup = /** @class */ (function () {
    function IonItemGroup(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonItemGroup.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonItemGroup = tslib_1.__decorate([
        Component({ selector: "ion-item-group", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
    ], IonItemGroup);
    return IonItemGroup;
}());
export { IonItemGroup };
var IonItemOption = /** @class */ (function () {
    function IonItemOption(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonItemOption.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonItemOption = tslib_1.__decorate([
        ProxyCmp({ inputs: ["color", "disabled", "download", "expandable", "href", "mode", "rel", "target", "type"] }),
        Component({ selector: "ion-item-option", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "disabled", "download", "expandable", "href", "mode", "rel", "target", "type"] })
    ], IonItemOption);
    return IonItemOption;
}());
export { IonItemOption };
var IonItemOptions = /** @class */ (function () {
    function IonItemOptions(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionSwipe"]);
    }
    IonItemOptions.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonItemOptions = tslib_1.__decorate([
        ProxyCmp({ inputs: ["side"] }),
        Component({ selector: "ion-item-options", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["side"] })
    ], IonItemOptions);
    return IonItemOptions;
}());
export { IonItemOptions };
var IonItemSliding = /** @class */ (function () {
    function IonItemSliding(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionDrag"]);
    }
    IonItemSliding.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonItemSliding = tslib_1.__decorate([
        ProxyCmp({ inputs: ["disabled"], "methods": ["getOpenAmount", "getSlidingRatio", "open", "close", "closeOpened"] }),
        Component({ selector: "ion-item-sliding", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["disabled"] })
    ], IonItemSliding);
    return IonItemSliding;
}());
export { IonItemSliding };
var IonLabel = /** @class */ (function () {
    function IonLabel(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonLabel.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonLabel = tslib_1.__decorate([
        ProxyCmp({ inputs: ["color", "mode", "position"] }),
        Component({ selector: "ion-label", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode", "position"] })
    ], IonLabel);
    return IonLabel;
}());
export { IonLabel };
var IonList = /** @class */ (function () {
    function IonList(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonList.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonList = tslib_1.__decorate([
        ProxyCmp({ inputs: ["inset", "lines", "mode"], "methods": ["closeSlidingItems"] }),
        Component({ selector: "ion-list", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["inset", "lines", "mode"] })
    ], IonList);
    return IonList;
}());
export { IonList };
var IonListHeader = /** @class */ (function () {
    function IonListHeader(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonListHeader.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonListHeader = tslib_1.__decorate([
        ProxyCmp({ inputs: ["color", "lines", "mode"] }),
        Component({ selector: "ion-list-header", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "lines", "mode"] })
    ], IonListHeader);
    return IonListHeader;
}());
export { IonListHeader };
var IonMenu = /** @class */ (function () {
    function IonMenu(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionWillOpen", "ionWillClose", "ionDidOpen", "ionDidClose"]);
    }
    IonMenu.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonMenu = tslib_1.__decorate([
        ProxyCmp({ inputs: ["contentId", "disabled", "maxEdgeStart", "menuId", "side", "swipeGesture", "type"], "methods": ["isOpen", "isActive", "open", "close", "toggle", "setOpen"] }),
        Component({ selector: "ion-menu", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["contentId", "disabled", "maxEdgeStart", "menuId", "side", "swipeGesture", "type"] })
    ], IonMenu);
    return IonMenu;
}());
export { IonMenu };
var IonMenuButton = /** @class */ (function () {
    function IonMenuButton(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonMenuButton.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonMenuButton = tslib_1.__decorate([
        ProxyCmp({ inputs: ["autoHide", "color", "disabled", "menu", "mode", "type"] }),
        Component({ selector: "ion-menu-button", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["autoHide", "color", "disabled", "menu", "mode", "type"] })
    ], IonMenuButton);
    return IonMenuButton;
}());
export { IonMenuButton };
var IonMenuToggle = /** @class */ (function () {
    function IonMenuToggle(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonMenuToggle.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonMenuToggle = tslib_1.__decorate([
        ProxyCmp({ inputs: ["autoHide", "menu"] }),
        Component({ selector: "ion-menu-toggle", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["autoHide", "menu"] })
    ], IonMenuToggle);
    return IonMenuToggle;
}());
export { IonMenuToggle };
var IonNav = /** @class */ (function () {
    function IonNav(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionNavWillChange", "ionNavDidChange"]);
    }
    IonNav.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonNav = tslib_1.__decorate([
        ProxyCmp({ inputs: ["animated", "animation", "root", "rootParams", "swipeGesture"], "methods": ["push", "insert", "insertPages", "pop", "popTo", "popToRoot", "removeIndex", "setRoot", "setPages", "getActive", "getByIndex", "canGoBack", "getPrevious"] }),
        Component({ selector: "ion-nav", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["animated", "animation", "root", "rootParams", "swipeGesture"] })
    ], IonNav);
    return IonNav;
}());
export { IonNav };
var IonNavLink = /** @class */ (function () {
    function IonNavLink(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonNavLink.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonNavLink = tslib_1.__decorate([
        ProxyCmp({ inputs: ["component", "componentProps", "routerAnimation", "routerDirection"] }),
        Component({ selector: "ion-nav-link", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["component", "componentProps", "routerAnimation", "routerDirection"] })
    ], IonNavLink);
    return IonNavLink;
}());
export { IonNavLink };
var IonNote = /** @class */ (function () {
    function IonNote(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonNote.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonNote = tslib_1.__decorate([
        ProxyCmp({ inputs: ["color", "mode"] }),
        Component({ selector: "ion-note", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode"] })
    ], IonNote);
    return IonNote;
}());
export { IonNote };
var IonProgressBar = /** @class */ (function () {
    function IonProgressBar(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonProgressBar.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonProgressBar = tslib_1.__decorate([
        ProxyCmp({ inputs: ["buffer", "color", "mode", "reversed", "type", "value"] }),
        Component({ selector: "ion-progress-bar", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["buffer", "color", "mode", "reversed", "type", "value"] })
    ], IonProgressBar);
    return IonProgressBar;
}());
export { IonProgressBar };
var IonRadio = /** @class */ (function () {
    function IonRadio(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionFocus", "ionBlur"]);
    }
    IonRadio.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonRadio = tslib_1.__decorate([
        ProxyCmp({ inputs: ["color", "disabled", "mode", "name", "value"] }),
        Component({ selector: "ion-radio", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "disabled", "mode", "name", "value"] })
    ], IonRadio);
    return IonRadio;
}());
export { IonRadio };
var IonRadioGroup = /** @class */ (function () {
    function IonRadioGroup(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionChange"]);
    }
    IonRadioGroup.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonRadioGroup = tslib_1.__decorate([
        ProxyCmp({ inputs: ["allowEmptySelection", "name", "value"] }),
        Component({ selector: "ion-radio-group", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["allowEmptySelection", "name", "value"] })
    ], IonRadioGroup);
    return IonRadioGroup;
}());
export { IonRadioGroup };
var IonRange = /** @class */ (function () {
    function IonRange(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionChange", "ionFocus", "ionBlur"]);
    }
    IonRange.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonRange = tslib_1.__decorate([
        ProxyCmp({ inputs: ["color", "debounce", "disabled", "dualKnobs", "max", "min", "mode", "name", "pin", "snaps", "step", "ticks", "value"] }),
        Component({ selector: "ion-range", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "debounce", "disabled", "dualKnobs", "max", "min", "mode", "name", "pin", "snaps", "step", "ticks", "value"] })
    ], IonRange);
    return IonRange;
}());
export { IonRange };
var IonRefresher = /** @class */ (function () {
    function IonRefresher(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionRefresh", "ionPull", "ionStart"]);
    }
    IonRefresher.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonRefresher = tslib_1.__decorate([
        ProxyCmp({ inputs: ["closeDuration", "disabled", "pullFactor", "pullMax", "pullMin", "snapbackDuration"], "methods": ["complete", "cancel", "getProgress"] }),
        Component({ selector: "ion-refresher", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["closeDuration", "disabled", "pullFactor", "pullMax", "pullMin", "snapbackDuration"] })
    ], IonRefresher);
    return IonRefresher;
}());
export { IonRefresher };
var IonRefresherContent = /** @class */ (function () {
    function IonRefresherContent(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonRefresherContent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonRefresherContent = tslib_1.__decorate([
        ProxyCmp({ inputs: ["pullingIcon", "pullingText", "refreshingSpinner", "refreshingText"] }),
        Component({ selector: "ion-refresher-content", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["pullingIcon", "pullingText", "refreshingSpinner", "refreshingText"] })
    ], IonRefresherContent);
    return IonRefresherContent;
}());
export { IonRefresherContent };
var IonReorder = /** @class */ (function () {
    function IonReorder(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonReorder.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonReorder = tslib_1.__decorate([
        Component({ selector: "ion-reorder", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
    ], IonReorder);
    return IonReorder;
}());
export { IonReorder };
var IonReorderGroup = /** @class */ (function () {
    function IonReorderGroup(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionItemReorder"]);
    }
    IonReorderGroup.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonReorderGroup = tslib_1.__decorate([
        ProxyCmp({ inputs: ["disabled"], "methods": ["complete"] }),
        Component({ selector: "ion-reorder-group", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["disabled"] })
    ], IonReorderGroup);
    return IonReorderGroup;
}());
export { IonReorderGroup };
var IonRippleEffect = /** @class */ (function () {
    function IonRippleEffect(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonRippleEffect.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonRippleEffect = tslib_1.__decorate([
        ProxyCmp({ inputs: ["type"], "methods": ["addRipple"] }),
        Component({ selector: "ion-ripple-effect", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["type"] })
    ], IonRippleEffect);
    return IonRippleEffect;
}());
export { IonRippleEffect };
var IonRow = /** @class */ (function () {
    function IonRow(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonRow.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonRow = tslib_1.__decorate([
        Component({ selector: "ion-row", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
    ], IonRow);
    return IonRow;
}());
export { IonRow };
var IonSearchbar = /** @class */ (function () {
    function IonSearchbar(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionInput", "ionChange", "ionCancel", "ionClear", "ionBlur", "ionFocus"]);
    }
    IonSearchbar.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonSearchbar = tslib_1.__decorate([
        ProxyCmp({ inputs: ["animated", "autocomplete", "autocorrect", "cancelButtonIcon", "cancelButtonText", "clearIcon", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "mode", "placeholder", "searchIcon", "showCancelButton", "spellcheck", "type", "value"], "methods": ["setFocus", "getInputElement"] }),
        Component({ selector: "ion-searchbar", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["animated", "autocomplete", "autocorrect", "cancelButtonIcon", "cancelButtonText", "clearIcon", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "mode", "placeholder", "searchIcon", "showCancelButton", "spellcheck", "type", "value"] })
    ], IonSearchbar);
    return IonSearchbar;
}());
export { IonSearchbar };
var IonSegment = /** @class */ (function () {
    function IonSegment(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionChange"]);
    }
    IonSegment.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonSegment = tslib_1.__decorate([
        ProxyCmp({ inputs: ["color", "disabled", "mode", "scrollable", "swipeGesture", "value"] }),
        Component({ selector: "ion-segment", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "disabled", "mode", "scrollable", "swipeGesture", "value"] })
    ], IonSegment);
    return IonSegment;
}());
export { IonSegment };
var IonSegmentButton = /** @class */ (function () {
    function IonSegmentButton(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonSegmentButton.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonSegmentButton = tslib_1.__decorate([
        ProxyCmp({ inputs: ["disabled", "layout", "mode", "type", "value"] }),
        Component({ selector: "ion-segment-button", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["disabled", "layout", "mode", "type", "value"] })
    ], IonSegmentButton);
    return IonSegmentButton;
}());
export { IonSegmentButton };
var IonSelect = /** @class */ (function () {
    function IonSelect(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionChange", "ionCancel", "ionFocus", "ionBlur"]);
    }
    IonSelect.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonSelect = tslib_1.__decorate([
        ProxyCmp({ inputs: ["cancelText", "compareWith", "disabled", "interface", "interfaceOptions", "mode", "multiple", "name", "okText", "placeholder", "selectedText", "value"], "methods": ["open"] }),
        Component({ selector: "ion-select", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["cancelText", "compareWith", "disabled", "interface", "interfaceOptions", "mode", "multiple", "name", "okText", "placeholder", "selectedText", "value"] })
    ], IonSelect);
    return IonSelect;
}());
export { IonSelect };
var IonSelectOption = /** @class */ (function () {
    function IonSelectOption(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonSelectOption.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonSelectOption = tslib_1.__decorate([
        ProxyCmp({ inputs: ["disabled", "value"] }),
        Component({ selector: "ion-select-option", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["disabled", "value"] })
    ], IonSelectOption);
    return IonSelectOption;
}());
export { IonSelectOption };
var IonSkeletonText = /** @class */ (function () {
    function IonSkeletonText(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonSkeletonText.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonSkeletonText = tslib_1.__decorate([
        ProxyCmp({ inputs: ["animated"] }),
        Component({ selector: "ion-skeleton-text", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["animated"] })
    ], IonSkeletonText);
    return IonSkeletonText;
}());
export { IonSkeletonText };
var IonSlide = /** @class */ (function () {
    function IonSlide(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonSlide.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonSlide = tslib_1.__decorate([
        Component({ selector: "ion-slide", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
    ], IonSlide);
    return IonSlide;
}());
export { IonSlide };
var IonSlides = /** @class */ (function () {
    function IonSlides(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionSlidesDidLoad", "ionSlideTap", "ionSlideDoubleTap", "ionSlideWillChange", "ionSlideDidChange", "ionSlideNextStart", "ionSlidePrevStart", "ionSlideNextEnd", "ionSlidePrevEnd", "ionSlideTransitionStart", "ionSlideTransitionEnd", "ionSlideDrag", "ionSlideReachStart", "ionSlideReachEnd", "ionSlideTouchStart", "ionSlideTouchEnd"]);
    }
    IonSlides.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonSlides = tslib_1.__decorate([
        ProxyCmp({ inputs: ["mode", "options", "pager", "scrollbar"], "methods": ["update", "updateAutoHeight", "slideTo", "slideNext", "slidePrev", "getActiveIndex", "getPreviousIndex", "length", "isEnd", "isBeginning", "startAutoplay", "stopAutoplay", "lockSwipeToNext", "lockSwipeToPrev", "lockSwipes", "getSwiper"] }),
        Component({ selector: "ion-slides", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["mode", "options", "pager", "scrollbar"] })
    ], IonSlides);
    return IonSlides;
}());
export { IonSlides };
var IonSpinner = /** @class */ (function () {
    function IonSpinner(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonSpinner.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonSpinner = tslib_1.__decorate([
        ProxyCmp({ inputs: ["color", "duration", "name", "paused"] }),
        Component({ selector: "ion-spinner", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "duration", "name", "paused"] })
    ], IonSpinner);
    return IonSpinner;
}());
export { IonSpinner };
var IonSplitPane = /** @class */ (function () {
    function IonSplitPane(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionSplitPaneVisible"]);
    }
    IonSplitPane.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonSplitPane = tslib_1.__decorate([
        ProxyCmp({ inputs: ["contentId", "disabled", "when"] }),
        Component({ selector: "ion-split-pane", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["contentId", "disabled", "when"] })
    ], IonSplitPane);
    return IonSplitPane;
}());
export { IonSplitPane };
var IonTabBar = /** @class */ (function () {
    function IonTabBar(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonTabBar.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonTabBar = tslib_1.__decorate([
        ProxyCmp({ inputs: ["color", "mode", "selectedTab", "translucent"] }),
        Component({ selector: "ion-tab-bar", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode", "selectedTab", "translucent"] })
    ], IonTabBar);
    return IonTabBar;
}());
export { IonTabBar };
var IonTabButton = /** @class */ (function () {
    function IonTabButton(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonTabButton.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonTabButton = tslib_1.__decorate([
        ProxyCmp({ inputs: ["disabled", "download", "href", "layout", "mode", "rel", "selected", "tab", "target"] }),
        Component({ selector: "ion-tab-button", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["disabled", "download", "href", "layout", "mode", "rel", "selected", "tab", "target"] })
    ], IonTabButton);
    return IonTabButton;
}());
export { IonTabButton };
var IonText = /** @class */ (function () {
    function IonText(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonText.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonText = tslib_1.__decorate([
        ProxyCmp({ inputs: ["color", "mode"] }),
        Component({ selector: "ion-text", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode"] })
    ], IonText);
    return IonText;
}());
export { IonText };
var IonTextarea = /** @class */ (function () {
    function IonTextarea(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionChange", "ionInput", "ionBlur", "ionFocus"]);
    }
    IonTextarea.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonTextarea = tslib_1.__decorate([
        ProxyCmp({ inputs: ["autoGrow", "autocapitalize", "autofocus", "clearOnEdit", "color", "cols", "debounce", "disabled", "enterkeyhint", "inputmode", "maxlength", "minlength", "mode", "name", "placeholder", "readonly", "required", "rows", "spellcheck", "value", "wrap"], "methods": ["setFocus", "getInputElement"] }),
        Component({ selector: "ion-textarea", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["autoGrow", "autocapitalize", "autofocus", "clearOnEdit", "color", "cols", "debounce", "disabled", "enterkeyhint", "inputmode", "maxlength", "minlength", "mode", "name", "placeholder", "readonly", "required", "rows", "spellcheck", "value", "wrap"] })
    ], IonTextarea);
    return IonTextarea;
}());
export { IonTextarea };
var IonThumbnail = /** @class */ (function () {
    function IonThumbnail(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonThumbnail.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonThumbnail = tslib_1.__decorate([
        Component({ selector: "ion-thumbnail", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
    ], IonThumbnail);
    return IonThumbnail;
}());
export { IonThumbnail };
var IonTitle = /** @class */ (function () {
    function IonTitle(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonTitle.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonTitle = tslib_1.__decorate([
        ProxyCmp({ inputs: ["color", "size"] }),
        Component({ selector: "ion-title", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "size"] })
    ], IonTitle);
    return IonTitle;
}());
export { IonTitle };
var IonToggle = /** @class */ (function () {
    function IonToggle(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionChange", "ionFocus", "ionBlur"]);
    }
    IonToggle.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonToggle = tslib_1.__decorate([
        ProxyCmp({ inputs: ["checked", "color", "disabled", "mode", "name", "value"] }),
        Component({ selector: "ion-toggle", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["checked", "color", "disabled", "mode", "name", "value"] })
    ], IonToggle);
    return IonToggle;
}());
export { IonToggle };
var IonToolbar = /** @class */ (function () {
    function IonToolbar(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonToolbar.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonToolbar = tslib_1.__decorate([
        ProxyCmp({ inputs: ["color", "mode"] }),
        Component({ selector: "ion-toolbar", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode"] })
    ], IonToolbar);
    return IonToolbar;
}());
export { IonToolbar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJveGllcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25pYy9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9wcm94aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLDhDQUE4QztBQUM5QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hILE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFLekQ7SUFFRSxnQkFBWSxDQUFvQixFQUFFLENBQWEsRUFBWSxDQUFTO1FBQVQsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUNsRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDWCxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQzs7Z0JBSGMsaUJBQWlCO2dCQUFLLFVBQVU7Z0JBQWUsTUFBTTs7SUFGekQsTUFBTTtRQURsQixTQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLDJCQUEyQixFQUFFLENBQUM7T0FDOUcsTUFBTSxDQU1sQjtJQUFELGFBQUM7Q0FBQSxBQU5ELElBTUM7U0FOWSxNQUFNO0FBVW5CO0lBRUUsbUJBQVksQ0FBb0IsRUFBRSxDQUFhLEVBQVksQ0FBUztRQUFULE1BQUMsR0FBRCxDQUFDLENBQVE7UUFDbEUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ1gsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7O2dCQUhjLGlCQUFpQjtnQkFBSyxVQUFVO2dCQUFlLE1BQU07O0lBRnpELFNBQVM7UUFEckIsU0FBUyxDQUFDLEVBQUUsUUFBUSxF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RUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQztPQUNwTCxTQUFTLENBVXJCO0lBQUQsZ0JBQUM7Q0FBQSxBQVZELElBVUM7U0FWWSxTQUFTO0FBZXRCO0lBRUUsb0JBQVksQ0FBb0IsRUFBRSxDQUFhLEVBQVksQ0FBUztRQUFULE1BQUMsR0FBRCxDQUFDLENBQVE7UUFDbEUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ1gsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7O2dCQUhjLGlCQUFpQjtnQkFBSyxVQUFVO2dCQUFlLE1BQU07O0lBRnpELFVBQVU7UUFGdEIsUUFBUSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDdkMsU0FBUyxDQUFDLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQztPQUM3SSxVQUFVLENBTXRCO0lBQUQsaUJBQUM7Q0FBQSxBQU5ELElBTUM7U0FOWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBhdXRvLWdlbmVyYXRlZCBhbmd1bGFyIGRpcmVjdGl2ZSBwcm94aWVzICovXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUHJveHlDbXAsIHByb3h5T3V0cHV0cyB9IGZyb20gXCIuL3Byb3hpZXMtdXRpbHNcIjtcbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tIFwiQGlvbmljL2NvcmVcIjtcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25BcHAgZXh0ZW5kcyBDb21wb25lbnRzLklvbkFwcCB7XG59XG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLWFwcFwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiIH0pXG5leHBvcnQgY2xhc3MgSW9uQXBwIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25BdmF0YXIgZXh0ZW5kcyBDb21wb25lbnRzLklvbkF2YXRhciB7XG59XG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLWF2YXRhclwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiIH0pXG5leHBvcnQgY2xhc3MgSW9uQXZhdGFyIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25CYWNrQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25CYWNrQnV0dG9uIHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiY29sb3JcIiwgXCJkZWZhdWx0SHJlZlwiLCBcImRpc2FibGVkXCIsIFwiaWNvblwiLCBcIm1vZGVcIiwgXCJyb3V0ZXJBbmltYXRpb25cIiwgXCJ0ZXh0XCIsIFwidHlwZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1iYWNrLWJ1dHRvblwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImNvbG9yXCIsIFwiZGVmYXVsdEhyZWZcIiwgXCJkaXNhYmxlZFwiLCBcImljb25cIiwgXCJtb2RlXCIsIFwicm91dGVyQW5pbWF0aW9uXCIsIFwidGV4dFwiLCBcInR5cGVcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25CYWNrQnV0dG9uIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25CYWNrZHJvcCBleHRlbmRzIENvbXBvbmVudHMuSW9uQmFja2Ryb3Age1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJzdG9wUHJvcGFnYXRpb25cIiwgXCJ0YXBwYWJsZVwiLCBcInZpc2libGVcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tYmFja2Ryb3BcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJzdG9wUHJvcGFnYXRpb25cIiwgXCJ0YXBwYWJsZVwiLCBcInZpc2libGVcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25CYWNrZHJvcCB7XG4gIGlvbkJhY2tkcm9wVGFwITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFtcImlvbkJhY2tkcm9wVGFwXCJdKTtcbiAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkJhZGdlIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25CYWRnZSB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImNvbG9yXCIsIFwibW9kZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1iYWRnZVwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImNvbG9yXCIsIFwibW9kZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvbkJhZGdlIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25CdXR0b24gZXh0ZW5kcyBDb21wb25lbnRzLklvbkJ1dHRvbiB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImJ1dHRvblR5cGVcIiwgXCJjb2xvclwiLCBcImRpc2FibGVkXCIsIFwiZG93bmxvYWRcIiwgXCJleHBhbmRcIiwgXCJmaWxsXCIsIFwiaHJlZlwiLCBcIm1vZGVcIiwgXCJyZWxcIiwgXCJyb3V0ZXJBbmltYXRpb25cIiwgXCJyb3V0ZXJEaXJlY3Rpb25cIiwgXCJzaGFwZVwiLCBcInNpemVcIiwgXCJzdHJvbmdcIiwgXCJ0YXJnZXRcIiwgXCJ0eXBlXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLWJ1dHRvblwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImJ1dHRvblR5cGVcIiwgXCJjb2xvclwiLCBcImRpc2FibGVkXCIsIFwiZG93bmxvYWRcIiwgXCJleHBhbmRcIiwgXCJmaWxsXCIsIFwiaHJlZlwiLCBcIm1vZGVcIiwgXCJyZWxcIiwgXCJyb3V0ZXJBbmltYXRpb25cIiwgXCJyb3V0ZXJEaXJlY3Rpb25cIiwgXCJzaGFwZVwiLCBcInNpemVcIiwgXCJzdHJvbmdcIiwgXCJ0YXJnZXRcIiwgXCJ0eXBlXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uQnV0dG9uIHtcbiAgaW9uRm9jdXMhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICBpb25CbHVyITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFtcImlvbkZvY3VzXCIsIFwiaW9uQmx1clwiXSk7XG4gIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25CdXR0b25zIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25CdXR0b25zIHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiY29sbGFwc2VcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tYnV0dG9uc1wiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImNvbGxhcHNlXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uQnV0dG9ucyB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uQ2FyZCBleHRlbmRzIENvbXBvbmVudHMuSW9uQ2FyZCB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImJ1dHRvblwiLCBcImNvbG9yXCIsIFwiZGlzYWJsZWRcIiwgXCJkb3dubG9hZFwiLCBcImhyZWZcIiwgXCJtb2RlXCIsIFwicmVsXCIsIFwicm91dGVyQW5pbWF0aW9uXCIsIFwicm91dGVyRGlyZWN0aW9uXCIsIFwidGFyZ2V0XCIsIFwidHlwZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1jYXJkXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiYnV0dG9uXCIsIFwiY29sb3JcIiwgXCJkaXNhYmxlZFwiLCBcImRvd25sb2FkXCIsIFwiaHJlZlwiLCBcIm1vZGVcIiwgXCJyZWxcIiwgXCJyb3V0ZXJBbmltYXRpb25cIiwgXCJyb3V0ZXJEaXJlY3Rpb25cIiwgXCJ0YXJnZXRcIiwgXCJ0eXBlXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uQ2FyZCB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uQ2FyZENvbnRlbnQgZXh0ZW5kcyBDb21wb25lbnRzLklvbkNhcmRDb250ZW50IHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wibW9kZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1jYXJkLWNvbnRlbnRcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJtb2RlXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uQ2FyZENvbnRlbnQge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkNhcmRIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnRzLklvbkNhcmRIZWFkZXIge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJjb2xvclwiLCBcIm1vZGVcIiwgXCJ0cmFuc2x1Y2VudFwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1jYXJkLWhlYWRlclwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImNvbG9yXCIsIFwibW9kZVwiLCBcInRyYW5zbHVjZW50XCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uQ2FyZEhlYWRlciB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uQ2FyZFN1YnRpdGxlIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25DYXJkU3VidGl0bGUge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJjb2xvclwiLCBcIm1vZGVcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tY2FyZC1zdWJ0aXRsZVwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImNvbG9yXCIsIFwibW9kZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvbkNhcmRTdWJ0aXRsZSB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uQ2FyZFRpdGxlIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25DYXJkVGl0bGUge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJjb2xvclwiLCBcIm1vZGVcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tY2FyZC10aXRsZVwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImNvbG9yXCIsIFwibW9kZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvbkNhcmRUaXRsZSB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uQ2hlY2tib3ggZXh0ZW5kcyBDb21wb25lbnRzLklvbkNoZWNrYm94IHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiY2hlY2tlZFwiLCBcImNvbG9yXCIsIFwiZGlzYWJsZWRcIiwgXCJpbmRldGVybWluYXRlXCIsIFwibW9kZVwiLCBcIm5hbWVcIiwgXCJ2YWx1ZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1jaGVja2JveFwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImNoZWNrZWRcIiwgXCJjb2xvclwiLCBcImRpc2FibGVkXCIsIFwiaW5kZXRlcm1pbmF0ZVwiLCBcIm1vZGVcIiwgXCJuYW1lXCIsIFwidmFsdWVcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25DaGVja2JveCB7XG4gIGlvbkNoYW5nZSE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gIGlvbkZvY3VzITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgaW9uQmx1ciE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbXCJpb25DaGFuZ2VcIiwgXCJpb25Gb2N1c1wiLCBcImlvbkJsdXJcIl0pO1xuICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uQ2hpcCBleHRlbmRzIENvbXBvbmVudHMuSW9uQ2hpcCB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImNvbG9yXCIsIFwiZGlzYWJsZWRcIiwgXCJtb2RlXCIsIFwib3V0bGluZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1jaGlwXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiY29sb3JcIiwgXCJkaXNhYmxlZFwiLCBcIm1vZGVcIiwgXCJvdXRsaW5lXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uQ2hpcCB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uQ29sIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25Db2wge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJvZmZzZXRcIiwgXCJvZmZzZXRMZ1wiLCBcIm9mZnNldE1kXCIsIFwib2Zmc2V0U21cIiwgXCJvZmZzZXRYbFwiLCBcIm9mZnNldFhzXCIsIFwicHVsbFwiLCBcInB1bGxMZ1wiLCBcInB1bGxNZFwiLCBcInB1bGxTbVwiLCBcInB1bGxYbFwiLCBcInB1bGxYc1wiLCBcInB1c2hcIiwgXCJwdXNoTGdcIiwgXCJwdXNoTWRcIiwgXCJwdXNoU21cIiwgXCJwdXNoWGxcIiwgXCJwdXNoWHNcIiwgXCJzaXplXCIsIFwic2l6ZUxnXCIsIFwic2l6ZU1kXCIsIFwic2l6ZVNtXCIsIFwic2l6ZVhsXCIsIFwic2l6ZVhzXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLWNvbFwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcIm9mZnNldFwiLCBcIm9mZnNldExnXCIsIFwib2Zmc2V0TWRcIiwgXCJvZmZzZXRTbVwiLCBcIm9mZnNldFhsXCIsIFwib2Zmc2V0WHNcIiwgXCJwdWxsXCIsIFwicHVsbExnXCIsIFwicHVsbE1kXCIsIFwicHVsbFNtXCIsIFwicHVsbFhsXCIsIFwicHVsbFhzXCIsIFwicHVzaFwiLCBcInB1c2hMZ1wiLCBcInB1c2hNZFwiLCBcInB1c2hTbVwiLCBcInB1c2hYbFwiLCBcInB1c2hYc1wiLCBcInNpemVcIiwgXCJzaXplTGdcIiwgXCJzaXplTWRcIiwgXCJzaXplU21cIiwgXCJzaXplWGxcIiwgXCJzaXplWHNcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25Db2wge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkNvbnRlbnQgZXh0ZW5kcyBDb21wb25lbnRzLklvbkNvbnRlbnQge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJjb2xvclwiLCBcImZvcmNlT3ZlcnNjcm9sbFwiLCBcImZ1bGxzY3JlZW5cIiwgXCJzY3JvbGxFdmVudHNcIiwgXCJzY3JvbGxYXCIsIFwic2Nyb2xsWVwiXSwgXCJtZXRob2RzXCI6IFtcImdldFNjcm9sbEVsZW1lbnRcIiwgXCJzY3JvbGxUb1RvcFwiLCBcInNjcm9sbFRvQm90dG9tXCIsIFwic2Nyb2xsQnlQb2ludFwiLCBcInNjcm9sbFRvUG9pbnRcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tY29udGVudFwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImNvbG9yXCIsIFwiZm9yY2VPdmVyc2Nyb2xsXCIsIFwiZnVsbHNjcmVlblwiLCBcInNjcm9sbEV2ZW50c1wiLCBcInNjcm9sbFhcIiwgXCJzY3JvbGxZXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uQ29udGVudCB7XG4gIGlvblNjcm9sbFN0YXJ0ITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgaW9uU2Nyb2xsITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgaW9uU2Nyb2xsRW5kITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFtcImlvblNjcm9sbFN0YXJ0XCIsIFwiaW9uU2Nyb2xsXCIsIFwiaW9uU2Nyb2xsRW5kXCJdKTtcbiAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkRhdGV0aW1lIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25EYXRldGltZSB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImNhbmNlbFRleHRcIiwgXCJkYXlOYW1lc1wiLCBcImRheVNob3J0TmFtZXNcIiwgXCJkYXlWYWx1ZXNcIiwgXCJkaXNhYmxlZFwiLCBcImRpc3BsYXlGb3JtYXRcIiwgXCJkaXNwbGF5VGltZXpvbmVcIiwgXCJkb25lVGV4dFwiLCBcImhvdXJWYWx1ZXNcIiwgXCJtYXhcIiwgXCJtaW5cIiwgXCJtaW51dGVWYWx1ZXNcIiwgXCJtb2RlXCIsIFwibW9udGhOYW1lc1wiLCBcIm1vbnRoU2hvcnROYW1lc1wiLCBcIm1vbnRoVmFsdWVzXCIsIFwibmFtZVwiLCBcInBpY2tlckZvcm1hdFwiLCBcInBpY2tlck9wdGlvbnNcIiwgXCJwbGFjZWhvbGRlclwiLCBcInJlYWRvbmx5XCIsIFwidmFsdWVcIiwgXCJ5ZWFyVmFsdWVzXCJdLCBcIm1ldGhvZHNcIjogW1wib3BlblwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1kYXRldGltZVwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImNhbmNlbFRleHRcIiwgXCJkYXlOYW1lc1wiLCBcImRheVNob3J0TmFtZXNcIiwgXCJkYXlWYWx1ZXNcIiwgXCJkaXNhYmxlZFwiLCBcImRpc3BsYXlGb3JtYXRcIiwgXCJkaXNwbGF5VGltZXpvbmVcIiwgXCJkb25lVGV4dFwiLCBcImhvdXJWYWx1ZXNcIiwgXCJtYXhcIiwgXCJtaW5cIiwgXCJtaW51dGVWYWx1ZXNcIiwgXCJtb2RlXCIsIFwibW9udGhOYW1lc1wiLCBcIm1vbnRoU2hvcnROYW1lc1wiLCBcIm1vbnRoVmFsdWVzXCIsIFwibmFtZVwiLCBcInBpY2tlckZvcm1hdFwiLCBcInBpY2tlck9wdGlvbnNcIiwgXCJwbGFjZWhvbGRlclwiLCBcInJlYWRvbmx5XCIsIFwidmFsdWVcIiwgXCJ5ZWFyVmFsdWVzXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uRGF0ZXRpbWUge1xuICBpb25DYW5jZWwhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICBpb25DaGFuZ2UhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICBpb25Gb2N1cyE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gIGlvbkJsdXIhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgW1wiaW9uQ2FuY2VsXCIsIFwiaW9uQ2hhbmdlXCIsIFwiaW9uRm9jdXNcIiwgXCJpb25CbHVyXCJdKTtcbiAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkZhYiBleHRlbmRzIENvbXBvbmVudHMuSW9uRmFiIHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiYWN0aXZhdGVkXCIsIFwiZWRnZVwiLCBcImhvcml6b250YWxcIiwgXCJ2ZXJ0aWNhbFwiXSwgXCJtZXRob2RzXCI6IFtcImNsb3NlXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLWZhYlwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImFjdGl2YXRlZFwiLCBcImVkZ2VcIiwgXCJob3Jpem9udGFsXCIsIFwidmVydGljYWxcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25GYWIge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkZhYkJ1dHRvbiBleHRlbmRzIENvbXBvbmVudHMuSW9uRmFiQnV0dG9uIHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiYWN0aXZhdGVkXCIsIFwiY2xvc2VJY29uXCIsIFwiY29sb3JcIiwgXCJkaXNhYmxlZFwiLCBcImRvd25sb2FkXCIsIFwiaHJlZlwiLCBcIm1vZGVcIiwgXCJyZWxcIiwgXCJyb3V0ZXJBbmltYXRpb25cIiwgXCJyb3V0ZXJEaXJlY3Rpb25cIiwgXCJzaG93XCIsIFwic2l6ZVwiLCBcInRhcmdldFwiLCBcInRyYW5zbHVjZW50XCIsIFwidHlwZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1mYWItYnV0dG9uXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiYWN0aXZhdGVkXCIsIFwiY2xvc2VJY29uXCIsIFwiY29sb3JcIiwgXCJkaXNhYmxlZFwiLCBcImRvd25sb2FkXCIsIFwiaHJlZlwiLCBcIm1vZGVcIiwgXCJyZWxcIiwgXCJyb3V0ZXJBbmltYXRpb25cIiwgXCJyb3V0ZXJEaXJlY3Rpb25cIiwgXCJzaG93XCIsIFwic2l6ZVwiLCBcInRhcmdldFwiLCBcInRyYW5zbHVjZW50XCIsIFwidHlwZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvbkZhYkJ1dHRvbiB7XG4gIGlvbkZvY3VzITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgaW9uQmx1ciE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbXCJpb25Gb2N1c1wiLCBcImlvbkJsdXJcIl0pO1xuICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uRmFiTGlzdCBleHRlbmRzIENvbXBvbmVudHMuSW9uRmFiTGlzdCB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImFjdGl2YXRlZFwiLCBcInNpZGVcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tZmFiLWxpc3RcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJhY3RpdmF0ZWRcIiwgXCJzaWRlXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uRmFiTGlzdCB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25Gb290ZXIge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJtb2RlXCIsIFwidHJhbnNsdWNlbnRcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tZm9vdGVyXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wibW9kZVwiLCBcInRyYW5zbHVjZW50XCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uRm9vdGVyIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25HcmlkIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25HcmlkIHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiZml4ZWRcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tZ3JpZFwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImZpeGVkXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uR3JpZCB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25IZWFkZXIge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJjb2xsYXBzZVwiLCBcIm1vZGVcIiwgXCJ0cmFuc2x1Y2VudFwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1oZWFkZXJcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJjb2xsYXBzZVwiLCBcIm1vZGVcIiwgXCJ0cmFuc2x1Y2VudFwiXSB9KVxuZXhwb3J0IGNsYXNzIElvbkhlYWRlciB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uSWNvbiBleHRlbmRzIENvbXBvbmVudHMuSW9uSWNvbiB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImFyaWFMYWJlbFwiLCBcImNvbG9yXCIsIFwiZmxpcFJ0bFwiLCBcImljb25cIiwgXCJpb3NcIiwgXCJsYXp5XCIsIFwibWRcIiwgXCJtb2RlXCIsIFwibmFtZVwiLCBcInNpemVcIiwgXCJzcmNcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24taWNvblwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImFyaWFMYWJlbFwiLCBcImNvbG9yXCIsIFwiZmxpcFJ0bFwiLCBcImljb25cIiwgXCJpb3NcIiwgXCJsYXp5XCIsIFwibWRcIiwgXCJtb2RlXCIsIFwibmFtZVwiLCBcInNpemVcIiwgXCJzcmNcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25JY29uIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25JbWcgZXh0ZW5kcyBDb21wb25lbnRzLklvbkltZyB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImFsdFwiLCBcInNyY1wiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1pbWdcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJhbHRcIiwgXCJzcmNcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25JbWcge1xuICBpb25JbWdXaWxsTG9hZCE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gIGlvbkltZ0RpZExvYWQhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICBpb25FcnJvciE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbXCJpb25JbWdXaWxsTG9hZFwiLCBcImlvbkltZ0RpZExvYWRcIiwgXCJpb25FcnJvclwiXSk7XG4gIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25JbmZpbml0ZVNjcm9sbCBleHRlbmRzIENvbXBvbmVudHMuSW9uSW5maW5pdGVTY3JvbGwge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJkaXNhYmxlZFwiLCBcInBvc2l0aW9uXCIsIFwidGhyZXNob2xkXCJdLCBcIm1ldGhvZHNcIjogW1wiY29tcGxldGVcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24taW5maW5pdGUtc2Nyb2xsXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiZGlzYWJsZWRcIiwgXCJwb3NpdGlvblwiLCBcInRocmVzaG9sZFwiXSB9KVxuZXhwb3J0IGNsYXNzIElvbkluZmluaXRlU2Nyb2xsIHtcbiAgaW9uSW5maW5pdGUhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgW1wiaW9uSW5maW5pdGVcIl0pO1xuICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uSW5maW5pdGVTY3JvbGxDb250ZW50IGV4dGVuZHMgQ29tcG9uZW50cy5Jb25JbmZpbml0ZVNjcm9sbENvbnRlbnQge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJsb2FkaW5nU3Bpbm5lclwiLCBcImxvYWRpbmdUZXh0XCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLWluZmluaXRlLXNjcm9sbC1jb250ZW50XCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wibG9hZGluZ1NwaW5uZXJcIiwgXCJsb2FkaW5nVGV4dFwiXSB9KVxuZXhwb3J0IGNsYXNzIElvbkluZmluaXRlU2Nyb2xsQ29udGVudCB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uSW5wdXQgZXh0ZW5kcyBDb21wb25lbnRzLklvbklucHV0IHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiYWNjZXB0XCIsIFwiYXV0b2NhcGl0YWxpemVcIiwgXCJhdXRvY29tcGxldGVcIiwgXCJhdXRvY29ycmVjdFwiLCBcImF1dG9mb2N1c1wiLCBcImNsZWFySW5wdXRcIiwgXCJjbGVhck9uRWRpdFwiLCBcImNvbG9yXCIsIFwiZGVib3VuY2VcIiwgXCJkaXNhYmxlZFwiLCBcImVudGVya2V5aGludFwiLCBcImlucHV0bW9kZVwiLCBcIm1heFwiLCBcIm1heGxlbmd0aFwiLCBcIm1pblwiLCBcIm1pbmxlbmd0aFwiLCBcIm1vZGVcIiwgXCJtdWx0aXBsZVwiLCBcIm5hbWVcIiwgXCJwYXR0ZXJuXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJyZWFkb25seVwiLCBcInJlcXVpcmVkXCIsIFwic2l6ZVwiLCBcInNwZWxsY2hlY2tcIiwgXCJzdGVwXCIsIFwidHlwZVwiLCBcInZhbHVlXCJdLCBcIm1ldGhvZHNcIjogW1wic2V0Rm9jdXNcIiwgXCJnZXRJbnB1dEVsZW1lbnRcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24taW5wdXRcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJhY2NlcHRcIiwgXCJhdXRvY2FwaXRhbGl6ZVwiLCBcImF1dG9jb21wbGV0ZVwiLCBcImF1dG9jb3JyZWN0XCIsIFwiYXV0b2ZvY3VzXCIsIFwiY2xlYXJJbnB1dFwiLCBcImNsZWFyT25FZGl0XCIsIFwiY29sb3JcIiwgXCJkZWJvdW5jZVwiLCBcImRpc2FibGVkXCIsIFwiZW50ZXJrZXloaW50XCIsIFwiaW5wdXRtb2RlXCIsIFwibWF4XCIsIFwibWF4bGVuZ3RoXCIsIFwibWluXCIsIFwibWlubGVuZ3RoXCIsIFwibW9kZVwiLCBcIm11bHRpcGxlXCIsIFwibmFtZVwiLCBcInBhdHRlcm5cIiwgXCJwbGFjZWhvbGRlclwiLCBcInJlYWRvbmx5XCIsIFwicmVxdWlyZWRcIiwgXCJzaXplXCIsIFwic3BlbGxjaGVja1wiLCBcInN0ZXBcIiwgXCJ0eXBlXCIsIFwidmFsdWVcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25JbnB1dCB7XG4gIGlvbklucHV0ITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgaW9uQ2hhbmdlITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgaW9uQmx1ciE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gIGlvbkZvY3VzITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFtcImlvbklucHV0XCIsIFwiaW9uQ2hhbmdlXCIsIFwiaW9uQmx1clwiLCBcImlvbkZvY3VzXCJdKTtcbiAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkl0ZW0gZXh0ZW5kcyBDb21wb25lbnRzLklvbkl0ZW0ge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJidXR0b25cIiwgXCJjb2xvclwiLCBcImRldGFpbFwiLCBcImRldGFpbEljb25cIiwgXCJkaXNhYmxlZFwiLCBcImRvd25sb2FkXCIsIFwiaHJlZlwiLCBcImxpbmVzXCIsIFwibW9kZVwiLCBcInJlbFwiLCBcInJvdXRlckFuaW1hdGlvblwiLCBcInJvdXRlckRpcmVjdGlvblwiLCBcInRhcmdldFwiLCBcInR5cGVcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24taXRlbVwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImJ1dHRvblwiLCBcImNvbG9yXCIsIFwiZGV0YWlsXCIsIFwiZGV0YWlsSWNvblwiLCBcImRpc2FibGVkXCIsIFwiZG93bmxvYWRcIiwgXCJocmVmXCIsIFwibGluZXNcIiwgXCJtb2RlXCIsIFwicmVsXCIsIFwicm91dGVyQW5pbWF0aW9uXCIsIFwicm91dGVyRGlyZWN0aW9uXCIsIFwidGFyZ2V0XCIsIFwidHlwZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvbkl0ZW0ge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkl0ZW1EaXZpZGVyIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25JdGVtRGl2aWRlciB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImNvbG9yXCIsIFwibW9kZVwiLCBcInN0aWNreVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1pdGVtLWRpdmlkZXJcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJjb2xvclwiLCBcIm1vZGVcIiwgXCJzdGlja3lcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25JdGVtRGl2aWRlciB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uSXRlbUdyb3VwIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25JdGVtR3JvdXAge1xufVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1pdGVtLWdyb3VwXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIgfSlcbmV4cG9ydCBjbGFzcyBJb25JdGVtR3JvdXAge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkl0ZW1PcHRpb24gZXh0ZW5kcyBDb21wb25lbnRzLklvbkl0ZW1PcHRpb24ge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJjb2xvclwiLCBcImRpc2FibGVkXCIsIFwiZG93bmxvYWRcIiwgXCJleHBhbmRhYmxlXCIsIFwiaHJlZlwiLCBcIm1vZGVcIiwgXCJyZWxcIiwgXCJ0YXJnZXRcIiwgXCJ0eXBlXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLWl0ZW0tb3B0aW9uXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiY29sb3JcIiwgXCJkaXNhYmxlZFwiLCBcImRvd25sb2FkXCIsIFwiZXhwYW5kYWJsZVwiLCBcImhyZWZcIiwgXCJtb2RlXCIsIFwicmVsXCIsIFwidGFyZ2V0XCIsIFwidHlwZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvbkl0ZW1PcHRpb24ge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkl0ZW1PcHRpb25zIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25JdGVtT3B0aW9ucyB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcInNpZGVcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24taXRlbS1vcHRpb25zXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wic2lkZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvbkl0ZW1PcHRpb25zIHtcbiAgaW9uU3dpcGUhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgW1wiaW9uU3dpcGVcIl0pO1xuICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uSXRlbVNsaWRpbmcgZXh0ZW5kcyBDb21wb25lbnRzLklvbkl0ZW1TbGlkaW5nIHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiZGlzYWJsZWRcIl0sIFwibWV0aG9kc1wiOiBbXCJnZXRPcGVuQW1vdW50XCIsIFwiZ2V0U2xpZGluZ1JhdGlvXCIsIFwib3BlblwiLCBcImNsb3NlXCIsIFwiY2xvc2VPcGVuZWRcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24taXRlbS1zbGlkaW5nXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiZGlzYWJsZWRcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25JdGVtU2xpZGluZyB7XG4gIGlvbkRyYWchOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgW1wiaW9uRHJhZ1wiXSk7XG4gIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25MYWJlbCBleHRlbmRzIENvbXBvbmVudHMuSW9uTGFiZWwge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJjb2xvclwiLCBcIm1vZGVcIiwgXCJwb3NpdGlvblwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1sYWJlbFwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImNvbG9yXCIsIFwibW9kZVwiLCBcInBvc2l0aW9uXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uTGFiZWwge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkxpc3QgZXh0ZW5kcyBDb21wb25lbnRzLklvbkxpc3Qge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJpbnNldFwiLCBcImxpbmVzXCIsIFwibW9kZVwiXSwgXCJtZXRob2RzXCI6IFtcImNsb3NlU2xpZGluZ0l0ZW1zXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLWxpc3RcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJpbnNldFwiLCBcImxpbmVzXCIsIFwibW9kZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvbkxpc3Qge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkxpc3RIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnRzLklvbkxpc3RIZWFkZXIge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJjb2xvclwiLCBcImxpbmVzXCIsIFwibW9kZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1saXN0LWhlYWRlclwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImNvbG9yXCIsIFwibGluZXNcIiwgXCJtb2RlXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uTGlzdEhlYWRlciB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uTWVudSBleHRlbmRzIENvbXBvbmVudHMuSW9uTWVudSB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImNvbnRlbnRJZFwiLCBcImRpc2FibGVkXCIsIFwibWF4RWRnZVN0YXJ0XCIsIFwibWVudUlkXCIsIFwic2lkZVwiLCBcInN3aXBlR2VzdHVyZVwiLCBcInR5cGVcIl0sIFwibWV0aG9kc1wiOiBbXCJpc09wZW5cIiwgXCJpc0FjdGl2ZVwiLCBcIm9wZW5cIiwgXCJjbG9zZVwiLCBcInRvZ2dsZVwiLCBcInNldE9wZW5cIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tbWVudVwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImNvbnRlbnRJZFwiLCBcImRpc2FibGVkXCIsIFwibWF4RWRnZVN0YXJ0XCIsIFwibWVudUlkXCIsIFwic2lkZVwiLCBcInN3aXBlR2VzdHVyZVwiLCBcInR5cGVcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25NZW51IHtcbiAgaW9uV2lsbE9wZW4hOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICBpb25XaWxsQ2xvc2UhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICBpb25EaWRPcGVuITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgaW9uRGlkQ2xvc2UhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgW1wiaW9uV2lsbE9wZW5cIiwgXCJpb25XaWxsQ2xvc2VcIiwgXCJpb25EaWRPcGVuXCIsIFwiaW9uRGlkQ2xvc2VcIl0pO1xuICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uTWVudUJ1dHRvbiBleHRlbmRzIENvbXBvbmVudHMuSW9uTWVudUJ1dHRvbiB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImF1dG9IaWRlXCIsIFwiY29sb3JcIiwgXCJkaXNhYmxlZFwiLCBcIm1lbnVcIiwgXCJtb2RlXCIsIFwidHlwZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1tZW51LWJ1dHRvblwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImF1dG9IaWRlXCIsIFwiY29sb3JcIiwgXCJkaXNhYmxlZFwiLCBcIm1lbnVcIiwgXCJtb2RlXCIsIFwidHlwZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvbk1lbnVCdXR0b24ge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbk1lbnVUb2dnbGUgZXh0ZW5kcyBDb21wb25lbnRzLklvbk1lbnVUb2dnbGUge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJhdXRvSGlkZVwiLCBcIm1lbnVcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tbWVudS10b2dnbGVcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJhdXRvSGlkZVwiLCBcIm1lbnVcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25NZW51VG9nZ2xlIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25OYXYgZXh0ZW5kcyBDb21wb25lbnRzLklvbk5hdiB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImFuaW1hdGVkXCIsIFwiYW5pbWF0aW9uXCIsIFwicm9vdFwiLCBcInJvb3RQYXJhbXNcIiwgXCJzd2lwZUdlc3R1cmVcIl0sIFwibWV0aG9kc1wiOiBbXCJwdXNoXCIsIFwiaW5zZXJ0XCIsIFwiaW5zZXJ0UGFnZXNcIiwgXCJwb3BcIiwgXCJwb3BUb1wiLCBcInBvcFRvUm9vdFwiLCBcInJlbW92ZUluZGV4XCIsIFwic2V0Um9vdFwiLCBcInNldFBhZ2VzXCIsIFwiZ2V0QWN0aXZlXCIsIFwiZ2V0QnlJbmRleFwiLCBcImNhbkdvQmFja1wiLCBcImdldFByZXZpb3VzXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLW5hdlwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImFuaW1hdGVkXCIsIFwiYW5pbWF0aW9uXCIsIFwicm9vdFwiLCBcInJvb3RQYXJhbXNcIiwgXCJzd2lwZUdlc3R1cmVcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25OYXYge1xuICBpb25OYXZXaWxsQ2hhbmdlITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgaW9uTmF2RGlkQ2hhbmdlITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFtcImlvbk5hdldpbGxDaGFuZ2VcIiwgXCJpb25OYXZEaWRDaGFuZ2VcIl0pO1xuICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uTmF2TGluayBleHRlbmRzIENvbXBvbmVudHMuSW9uTmF2TGluayB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImNvbXBvbmVudFwiLCBcImNvbXBvbmVudFByb3BzXCIsIFwicm91dGVyQW5pbWF0aW9uXCIsIFwicm91dGVyRGlyZWN0aW9uXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLW5hdi1saW5rXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiY29tcG9uZW50XCIsIFwiY29tcG9uZW50UHJvcHNcIiwgXCJyb3V0ZXJBbmltYXRpb25cIiwgXCJyb3V0ZXJEaXJlY3Rpb25cIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25OYXZMaW5rIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25Ob3RlIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25Ob3RlIHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiY29sb3JcIiwgXCJtb2RlXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLW5vdGVcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJjb2xvclwiLCBcIm1vZGVcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25Ob3RlIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25Qcm9ncmVzc0JhciBleHRlbmRzIENvbXBvbmVudHMuSW9uUHJvZ3Jlc3NCYXIge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJidWZmZXJcIiwgXCJjb2xvclwiLCBcIm1vZGVcIiwgXCJyZXZlcnNlZFwiLCBcInR5cGVcIiwgXCJ2YWx1ZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1wcm9ncmVzcy1iYXJcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJidWZmZXJcIiwgXCJjb2xvclwiLCBcIm1vZGVcIiwgXCJyZXZlcnNlZFwiLCBcInR5cGVcIiwgXCJ2YWx1ZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvblByb2dyZXNzQmFyIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25SYWRpbyBleHRlbmRzIENvbXBvbmVudHMuSW9uUmFkaW8ge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJjb2xvclwiLCBcImRpc2FibGVkXCIsIFwibW9kZVwiLCBcIm5hbWVcIiwgXCJ2YWx1ZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1yYWRpb1wiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImNvbG9yXCIsIFwiZGlzYWJsZWRcIiwgXCJtb2RlXCIsIFwibmFtZVwiLCBcInZhbHVlXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uUmFkaW8ge1xuICBpb25Gb2N1cyE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gIGlvbkJsdXIhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgW1wiaW9uRm9jdXNcIiwgXCJpb25CbHVyXCJdKTtcbiAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvblJhZGlvR3JvdXAgZXh0ZW5kcyBDb21wb25lbnRzLklvblJhZGlvR3JvdXAge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJhbGxvd0VtcHR5U2VsZWN0aW9uXCIsIFwibmFtZVwiLCBcInZhbHVlXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLXJhZGlvLWdyb3VwXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiYWxsb3dFbXB0eVNlbGVjdGlvblwiLCBcIm5hbWVcIiwgXCJ2YWx1ZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvblJhZGlvR3JvdXAge1xuICBpb25DaGFuZ2UhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgW1wiaW9uQ2hhbmdlXCJdKTtcbiAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvblJhbmdlIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25SYW5nZSB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImNvbG9yXCIsIFwiZGVib3VuY2VcIiwgXCJkaXNhYmxlZFwiLCBcImR1YWxLbm9ic1wiLCBcIm1heFwiLCBcIm1pblwiLCBcIm1vZGVcIiwgXCJuYW1lXCIsIFwicGluXCIsIFwic25hcHNcIiwgXCJzdGVwXCIsIFwidGlja3NcIiwgXCJ2YWx1ZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1yYW5nZVwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImNvbG9yXCIsIFwiZGVib3VuY2VcIiwgXCJkaXNhYmxlZFwiLCBcImR1YWxLbm9ic1wiLCBcIm1heFwiLCBcIm1pblwiLCBcIm1vZGVcIiwgXCJuYW1lXCIsIFwicGluXCIsIFwic25hcHNcIiwgXCJzdGVwXCIsIFwidGlja3NcIiwgXCJ2YWx1ZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvblJhbmdlIHtcbiAgaW9uQ2hhbmdlITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgaW9uRm9jdXMhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICBpb25CbHVyITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFtcImlvbkNoYW5nZVwiLCBcImlvbkZvY3VzXCIsIFwiaW9uQmx1clwiXSk7XG4gIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25SZWZyZXNoZXIgZXh0ZW5kcyBDb21wb25lbnRzLklvblJlZnJlc2hlciB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImNsb3NlRHVyYXRpb25cIiwgXCJkaXNhYmxlZFwiLCBcInB1bGxGYWN0b3JcIiwgXCJwdWxsTWF4XCIsIFwicHVsbE1pblwiLCBcInNuYXBiYWNrRHVyYXRpb25cIl0sIFwibWV0aG9kc1wiOiBbXCJjb21wbGV0ZVwiLCBcImNhbmNlbFwiLCBcImdldFByb2dyZXNzXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLXJlZnJlc2hlclwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImNsb3NlRHVyYXRpb25cIiwgXCJkaXNhYmxlZFwiLCBcInB1bGxGYWN0b3JcIiwgXCJwdWxsTWF4XCIsIFwicHVsbE1pblwiLCBcInNuYXBiYWNrRHVyYXRpb25cIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25SZWZyZXNoZXIge1xuICBpb25SZWZyZXNoITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgaW9uUHVsbCE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gIGlvblN0YXJ0ITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFtcImlvblJlZnJlc2hcIiwgXCJpb25QdWxsXCIsIFwiaW9uU3RhcnRcIl0pO1xuICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uUmVmcmVzaGVyQ29udGVudCBleHRlbmRzIENvbXBvbmVudHMuSW9uUmVmcmVzaGVyQ29udGVudCB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcInB1bGxpbmdJY29uXCIsIFwicHVsbGluZ1RleHRcIiwgXCJyZWZyZXNoaW5nU3Bpbm5lclwiLCBcInJlZnJlc2hpbmdUZXh0XCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLXJlZnJlc2hlci1jb250ZW50XCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wicHVsbGluZ0ljb25cIiwgXCJwdWxsaW5nVGV4dFwiLCBcInJlZnJlc2hpbmdTcGlubmVyXCIsIFwicmVmcmVzaGluZ1RleHRcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25SZWZyZXNoZXJDb250ZW50IHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25SZW9yZGVyIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25SZW9yZGVyIHtcbn1cbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tcmVvcmRlclwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiIH0pXG5leHBvcnQgY2xhc3MgSW9uUmVvcmRlciB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uUmVvcmRlckdyb3VwIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25SZW9yZGVyR3JvdXAge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJkaXNhYmxlZFwiXSwgXCJtZXRob2RzXCI6IFtcImNvbXBsZXRlXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLXJlb3JkZXItZ3JvdXBcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJkaXNhYmxlZFwiXSB9KVxuZXhwb3J0IGNsYXNzIElvblJlb3JkZXJHcm91cCB7XG4gIGlvbkl0ZW1SZW9yZGVyITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFtcImlvbkl0ZW1SZW9yZGVyXCJdKTtcbiAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvblJpcHBsZUVmZmVjdCBleHRlbmRzIENvbXBvbmVudHMuSW9uUmlwcGxlRWZmZWN0IHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1widHlwZVwiXSwgXCJtZXRob2RzXCI6IFtcImFkZFJpcHBsZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1yaXBwbGUtZWZmZWN0XCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1widHlwZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvblJpcHBsZUVmZmVjdCB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uUm93IGV4dGVuZHMgQ29tcG9uZW50cy5Jb25Sb3cge1xufVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1yb3dcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiB9KVxuZXhwb3J0IGNsYXNzIElvblJvdyB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uU2VhcmNoYmFyIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25TZWFyY2hiYXIge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJhbmltYXRlZFwiLCBcImF1dG9jb21wbGV0ZVwiLCBcImF1dG9jb3JyZWN0XCIsIFwiY2FuY2VsQnV0dG9uSWNvblwiLCBcImNhbmNlbEJ1dHRvblRleHRcIiwgXCJjbGVhckljb25cIiwgXCJjb2xvclwiLCBcImRlYm91bmNlXCIsIFwiZGlzYWJsZWRcIiwgXCJlbnRlcmtleWhpbnRcIiwgXCJpbnB1dG1vZGVcIiwgXCJtb2RlXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJzZWFyY2hJY29uXCIsIFwic2hvd0NhbmNlbEJ1dHRvblwiLCBcInNwZWxsY2hlY2tcIiwgXCJ0eXBlXCIsIFwidmFsdWVcIl0sIFwibWV0aG9kc1wiOiBbXCJzZXRGb2N1c1wiLCBcImdldElucHV0RWxlbWVudFwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1zZWFyY2hiYXJcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJhbmltYXRlZFwiLCBcImF1dG9jb21wbGV0ZVwiLCBcImF1dG9jb3JyZWN0XCIsIFwiY2FuY2VsQnV0dG9uSWNvblwiLCBcImNhbmNlbEJ1dHRvblRleHRcIiwgXCJjbGVhckljb25cIiwgXCJjb2xvclwiLCBcImRlYm91bmNlXCIsIFwiZGlzYWJsZWRcIiwgXCJlbnRlcmtleWhpbnRcIiwgXCJpbnB1dG1vZGVcIiwgXCJtb2RlXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJzZWFyY2hJY29uXCIsIFwic2hvd0NhbmNlbEJ1dHRvblwiLCBcInNwZWxsY2hlY2tcIiwgXCJ0eXBlXCIsIFwidmFsdWVcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25TZWFyY2hiYXIge1xuICBpb25JbnB1dCE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gIGlvbkNoYW5nZSE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gIGlvbkNhbmNlbCE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gIGlvbkNsZWFyITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgaW9uQmx1ciE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gIGlvbkZvY3VzITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFtcImlvbklucHV0XCIsIFwiaW9uQ2hhbmdlXCIsIFwiaW9uQ2FuY2VsXCIsIFwiaW9uQ2xlYXJcIiwgXCJpb25CbHVyXCIsIFwiaW9uRm9jdXNcIl0pO1xuICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uU2VnbWVudCBleHRlbmRzIENvbXBvbmVudHMuSW9uU2VnbWVudCB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImNvbG9yXCIsIFwiZGlzYWJsZWRcIiwgXCJtb2RlXCIsIFwic2Nyb2xsYWJsZVwiLCBcInN3aXBlR2VzdHVyZVwiLCBcInZhbHVlXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLXNlZ21lbnRcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJjb2xvclwiLCBcImRpc2FibGVkXCIsIFwibW9kZVwiLCBcInNjcm9sbGFibGVcIiwgXCJzd2lwZUdlc3R1cmVcIiwgXCJ2YWx1ZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvblNlZ21lbnQge1xuICBpb25DaGFuZ2UhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgW1wiaW9uQ2hhbmdlXCJdKTtcbiAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvblNlZ21lbnRCdXR0b24gZXh0ZW5kcyBDb21wb25lbnRzLklvblNlZ21lbnRCdXR0b24ge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJkaXNhYmxlZFwiLCBcImxheW91dFwiLCBcIm1vZGVcIiwgXCJ0eXBlXCIsIFwidmFsdWVcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tc2VnbWVudC1idXR0b25cIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJkaXNhYmxlZFwiLCBcImxheW91dFwiLCBcIm1vZGVcIiwgXCJ0eXBlXCIsIFwidmFsdWVcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25TZWdtZW50QnV0dG9uIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25TZWxlY3QgZXh0ZW5kcyBDb21wb25lbnRzLklvblNlbGVjdCB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImNhbmNlbFRleHRcIiwgXCJjb21wYXJlV2l0aFwiLCBcImRpc2FibGVkXCIsIFwiaW50ZXJmYWNlXCIsIFwiaW50ZXJmYWNlT3B0aW9uc1wiLCBcIm1vZGVcIiwgXCJtdWx0aXBsZVwiLCBcIm5hbWVcIiwgXCJva1RleHRcIiwgXCJwbGFjZWhvbGRlclwiLCBcInNlbGVjdGVkVGV4dFwiLCBcInZhbHVlXCJdLCBcIm1ldGhvZHNcIjogW1wib3BlblwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1zZWxlY3RcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJjYW5jZWxUZXh0XCIsIFwiY29tcGFyZVdpdGhcIiwgXCJkaXNhYmxlZFwiLCBcImludGVyZmFjZVwiLCBcImludGVyZmFjZU9wdGlvbnNcIiwgXCJtb2RlXCIsIFwibXVsdGlwbGVcIiwgXCJuYW1lXCIsIFwib2tUZXh0XCIsIFwicGxhY2Vob2xkZXJcIiwgXCJzZWxlY3RlZFRleHRcIiwgXCJ2YWx1ZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvblNlbGVjdCB7XG4gIGlvbkNoYW5nZSE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gIGlvbkNhbmNlbCE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gIGlvbkZvY3VzITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgaW9uQmx1ciE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbXCJpb25DaGFuZ2VcIiwgXCJpb25DYW5jZWxcIiwgXCJpb25Gb2N1c1wiLCBcImlvbkJsdXJcIl0pO1xuICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uU2VsZWN0T3B0aW9uIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25TZWxlY3RPcHRpb24ge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJkaXNhYmxlZFwiLCBcInZhbHVlXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLXNlbGVjdC1vcHRpb25cIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJkaXNhYmxlZFwiLCBcInZhbHVlXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uU2VsZWN0T3B0aW9uIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25Ta2VsZXRvblRleHQgZXh0ZW5kcyBDb21wb25lbnRzLklvblNrZWxldG9uVGV4dCB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImFuaW1hdGVkXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLXNrZWxldG9uLXRleHRcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJhbmltYXRlZFwiXSB9KVxuZXhwb3J0IGNsYXNzIElvblNrZWxldG9uVGV4dCB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uU2xpZGUgZXh0ZW5kcyBDb21wb25lbnRzLklvblNsaWRlIHtcbn1cbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tc2xpZGVcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiB9KVxuZXhwb3J0IGNsYXNzIElvblNsaWRlIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25TbGlkZXMgZXh0ZW5kcyBDb21wb25lbnRzLklvblNsaWRlcyB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcIm1vZGVcIiwgXCJvcHRpb25zXCIsIFwicGFnZXJcIiwgXCJzY3JvbGxiYXJcIl0sIFwibWV0aG9kc1wiOiBbXCJ1cGRhdGVcIiwgXCJ1cGRhdGVBdXRvSGVpZ2h0XCIsIFwic2xpZGVUb1wiLCBcInNsaWRlTmV4dFwiLCBcInNsaWRlUHJldlwiLCBcImdldEFjdGl2ZUluZGV4XCIsIFwiZ2V0UHJldmlvdXNJbmRleFwiLCBcImxlbmd0aFwiLCBcImlzRW5kXCIsIFwiaXNCZWdpbm5pbmdcIiwgXCJzdGFydEF1dG9wbGF5XCIsIFwic3RvcEF1dG9wbGF5XCIsIFwibG9ja1N3aXBlVG9OZXh0XCIsIFwibG9ja1N3aXBlVG9QcmV2XCIsIFwibG9ja1N3aXBlc1wiLCBcImdldFN3aXBlclwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1zbGlkZXNcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJtb2RlXCIsIFwib3B0aW9uc1wiLCBcInBhZ2VyXCIsIFwic2Nyb2xsYmFyXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uU2xpZGVzIHtcbiAgaW9uU2xpZGVzRGlkTG9hZCE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gIGlvblNsaWRlVGFwITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgaW9uU2xpZGVEb3VibGVUYXAhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICBpb25TbGlkZVdpbGxDaGFuZ2UhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICBpb25TbGlkZURpZENoYW5nZSE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gIGlvblNsaWRlTmV4dFN0YXJ0ITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgaW9uU2xpZGVQcmV2U3RhcnQhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICBpb25TbGlkZU5leHRFbmQhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICBpb25TbGlkZVByZXZFbmQhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICBpb25TbGlkZVRyYW5zaXRpb25TdGFydCE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gIGlvblNsaWRlVHJhbnNpdGlvbkVuZCE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gIGlvblNsaWRlRHJhZyE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gIGlvblNsaWRlUmVhY2hTdGFydCE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gIGlvblNsaWRlUmVhY2hFbmQhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICBpb25TbGlkZVRvdWNoU3RhcnQhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICBpb25TbGlkZVRvdWNoRW5kITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFtcImlvblNsaWRlc0RpZExvYWRcIiwgXCJpb25TbGlkZVRhcFwiLCBcImlvblNsaWRlRG91YmxlVGFwXCIsIFwiaW9uU2xpZGVXaWxsQ2hhbmdlXCIsIFwiaW9uU2xpZGVEaWRDaGFuZ2VcIiwgXCJpb25TbGlkZU5leHRTdGFydFwiLCBcImlvblNsaWRlUHJldlN0YXJ0XCIsIFwiaW9uU2xpZGVOZXh0RW5kXCIsIFwiaW9uU2xpZGVQcmV2RW5kXCIsIFwiaW9uU2xpZGVUcmFuc2l0aW9uU3RhcnRcIiwgXCJpb25TbGlkZVRyYW5zaXRpb25FbmRcIiwgXCJpb25TbGlkZURyYWdcIiwgXCJpb25TbGlkZVJlYWNoU3RhcnRcIiwgXCJpb25TbGlkZVJlYWNoRW5kXCIsIFwiaW9uU2xpZGVUb3VjaFN0YXJ0XCIsIFwiaW9uU2xpZGVUb3VjaEVuZFwiXSk7XG4gIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25TcGlubmVyIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25TcGlubmVyIHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiY29sb3JcIiwgXCJkdXJhdGlvblwiLCBcIm5hbWVcIiwgXCJwYXVzZWRcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tc3Bpbm5lclwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImNvbG9yXCIsIFwiZHVyYXRpb25cIiwgXCJuYW1lXCIsIFwicGF1c2VkXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uU3Bpbm5lciB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uU3BsaXRQYW5lIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25TcGxpdFBhbmUge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJjb250ZW50SWRcIiwgXCJkaXNhYmxlZFwiLCBcIndoZW5cIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tc3BsaXQtcGFuZVwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImNvbnRlbnRJZFwiLCBcImRpc2FibGVkXCIsIFwid2hlblwiXSB9KVxuZXhwb3J0IGNsYXNzIElvblNwbGl0UGFuZSB7XG4gIGlvblNwbGl0UGFuZVZpc2libGUhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgW1wiaW9uU3BsaXRQYW5lVmlzaWJsZVwiXSk7XG4gIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25UYWJCYXIgZXh0ZW5kcyBDb21wb25lbnRzLklvblRhYkJhciB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImNvbG9yXCIsIFwibW9kZVwiLCBcInNlbGVjdGVkVGFiXCIsIFwidHJhbnNsdWNlbnRcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tdGFiLWJhclwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImNvbG9yXCIsIFwibW9kZVwiLCBcInNlbGVjdGVkVGFiXCIsIFwidHJhbnNsdWNlbnRcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25UYWJCYXIge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvblRhYkJ1dHRvbiBleHRlbmRzIENvbXBvbmVudHMuSW9uVGFiQnV0dG9uIHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiZGlzYWJsZWRcIiwgXCJkb3dubG9hZFwiLCBcImhyZWZcIiwgXCJsYXlvdXRcIiwgXCJtb2RlXCIsIFwicmVsXCIsIFwic2VsZWN0ZWRcIiwgXCJ0YWJcIiwgXCJ0YXJnZXRcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tdGFiLWJ1dHRvblwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImRpc2FibGVkXCIsIFwiZG93bmxvYWRcIiwgXCJocmVmXCIsIFwibGF5b3V0XCIsIFwibW9kZVwiLCBcInJlbFwiLCBcInNlbGVjdGVkXCIsIFwidGFiXCIsIFwidGFyZ2V0XCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uVGFiQnV0dG9uIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25UZXh0IGV4dGVuZHMgQ29tcG9uZW50cy5Jb25UZXh0IHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiY29sb3JcIiwgXCJtb2RlXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLXRleHRcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJjb2xvclwiLCBcIm1vZGVcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25UZXh0IHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25UZXh0YXJlYSBleHRlbmRzIENvbXBvbmVudHMuSW9uVGV4dGFyZWEge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJhdXRvR3Jvd1wiLCBcImF1dG9jYXBpdGFsaXplXCIsIFwiYXV0b2ZvY3VzXCIsIFwiY2xlYXJPbkVkaXRcIiwgXCJjb2xvclwiLCBcImNvbHNcIiwgXCJkZWJvdW5jZVwiLCBcImRpc2FibGVkXCIsIFwiZW50ZXJrZXloaW50XCIsIFwiaW5wdXRtb2RlXCIsIFwibWF4bGVuZ3RoXCIsIFwibWlubGVuZ3RoXCIsIFwibW9kZVwiLCBcIm5hbWVcIiwgXCJwbGFjZWhvbGRlclwiLCBcInJlYWRvbmx5XCIsIFwicmVxdWlyZWRcIiwgXCJyb3dzXCIsIFwic3BlbGxjaGVja1wiLCBcInZhbHVlXCIsIFwid3JhcFwiXSwgXCJtZXRob2RzXCI6IFtcInNldEZvY3VzXCIsIFwiZ2V0SW5wdXRFbGVtZW50XCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLXRleHRhcmVhXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiYXV0b0dyb3dcIiwgXCJhdXRvY2FwaXRhbGl6ZVwiLCBcImF1dG9mb2N1c1wiLCBcImNsZWFyT25FZGl0XCIsIFwiY29sb3JcIiwgXCJjb2xzXCIsIFwiZGVib3VuY2VcIiwgXCJkaXNhYmxlZFwiLCBcImVudGVya2V5aGludFwiLCBcImlucHV0bW9kZVwiLCBcIm1heGxlbmd0aFwiLCBcIm1pbmxlbmd0aFwiLCBcIm1vZGVcIiwgXCJuYW1lXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJyZWFkb25seVwiLCBcInJlcXVpcmVkXCIsIFwicm93c1wiLCBcInNwZWxsY2hlY2tcIiwgXCJ2YWx1ZVwiLCBcIndyYXBcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25UZXh0YXJlYSB7XG4gIGlvbkNoYW5nZSE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gIGlvbklucHV0ITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgaW9uQmx1ciE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gIGlvbkZvY3VzITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFtcImlvbkNoYW5nZVwiLCBcImlvbklucHV0XCIsIFwiaW9uQmx1clwiLCBcImlvbkZvY3VzXCJdKTtcbiAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvblRodW1ibmFpbCBleHRlbmRzIENvbXBvbmVudHMuSW9uVGh1bWJuYWlsIHtcbn1cbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tdGh1bWJuYWlsXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIgfSlcbmV4cG9ydCBjbGFzcyBJb25UaHVtYm5haWwge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvblRpdGxlIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25UaXRsZSB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImNvbG9yXCIsIFwic2l6ZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi10aXRsZVwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImNvbG9yXCIsIFwic2l6ZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvblRpdGxlIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25Ub2dnbGUgZXh0ZW5kcyBDb21wb25lbnRzLklvblRvZ2dsZSB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImNoZWNrZWRcIiwgXCJjb2xvclwiLCBcImRpc2FibGVkXCIsIFwibW9kZVwiLCBcIm5hbWVcIiwgXCJ2YWx1ZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi10b2dnbGVcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJjaGVja2VkXCIsIFwiY29sb3JcIiwgXCJkaXNhYmxlZFwiLCBcIm1vZGVcIiwgXCJuYW1lXCIsIFwidmFsdWVcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25Ub2dnbGUge1xuICBpb25DaGFuZ2UhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICBpb25Gb2N1cyE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gIGlvbkJsdXIhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgW1wiaW9uQ2hhbmdlXCIsIFwiaW9uRm9jdXNcIiwgXCJpb25CbHVyXCJdKTtcbiAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvblRvb2xiYXIgZXh0ZW5kcyBDb21wb25lbnRzLklvblRvb2xiYXIge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJjb2xvclwiLCBcIm1vZGVcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tdG9vbGJhclwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImNvbG9yXCIsIFwibW9kZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvblRvb2xiYXIge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuIl19