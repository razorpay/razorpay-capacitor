import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { AlertController } from '@ionic/angular';

import 'capacitor-razorpay';

const { Checkout } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  constructor(public alertController: AlertController) {
  }
 
  async loadCheckout() {
    const options = { value: 'string', key: 'rzp_test_1DP5mmOlF5G5ag', amount: '5000', description: 'Credits towards consultation', image: 'https://i.imgur.com/3g7nmJC.png', currency: 'INR', name: 'foo', prefill: { email: 'void@razorpay.com', contact: '9191919191', name: 'Razorpay Software'}, theme: {color: '#F37254'}}
    try {
    let data = (await Checkout.open(options));
    this.presentAlert(data.value);
    } catch (error) {
      this.presentAlert(error.message); //Doesn't appear at all
    }
  }

  async presentAlert( description: string) {
    const alert = await this.alertController.create({
        message: description,
        buttons: ['Agree']
    });
    await alert.present();
  }
}
