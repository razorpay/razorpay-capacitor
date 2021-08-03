import { WebPlugin } from '@capacitor/core';
import type { CheckoutPlugin } from './definitions';
export declare class CheckoutWeb extends WebPlugin implements CheckoutPlugin {
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    open(options: {
        key: string;
        amount: string;
    }): Promise<{
        response: string;
    }>;
}
declare const Checkout: CheckoutPlugin;
export * from './definitions';
export { Checkout };
