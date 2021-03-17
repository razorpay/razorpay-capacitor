import { NgZone } from '@angular/core';
import { Gesture, GestureConfig } from '@ionic/core';
import * as ɵngcc0 from '@angular/core';
export declare class GestureController {
    private zone;
    constructor(zone: NgZone);
    /**
     * Create a new gesture
     */
    create(opts: GestureConfig, runInsideAngularZone?: boolean): Gesture;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GestureController, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<GestureController>;
}

//# sourceMappingURL=gesture-controller.d.ts.map