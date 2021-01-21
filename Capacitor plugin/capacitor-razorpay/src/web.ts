import { WebPlugin } from '@capacitor/core';
import { CheckoutPlugin } from './definitions';

export class CheckoutWeb extends WebPlugin implements CheckoutPlugin {
  constructor() {
    super({
      name: 'Checkout',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }


  async open(options: { value: string }): Promise<{ value: string }> {
    console.log('Open', options);
    return options;
  }

}

const Checkout = new CheckoutWeb();

export { Checkout };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(Checkout);
