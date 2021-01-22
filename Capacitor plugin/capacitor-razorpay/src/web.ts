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


  async open(options: { key: string, amount: string }): Promise<{ response: string }> {
    console.log('Open', options);
    return {
      response: options.key
  };
  }
}

const Checkout = new CheckoutWeb();

export { Checkout };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(Checkout);
