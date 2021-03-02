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

  responseListener(response:any){
    console.log(response.razorpay_payment_id)
  }

  async loadCheckout() {
    const options = {
    "key": "rzp_test_1DP5mmOlF5G5ag", // Enter the Key ID generated from the Dashboard
    "amount": "100", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Acme Corp",
    "description": "Test Transaction",
  
    "retry":{
      "enabled":false,
      "max_count":0
    },
    "prefill": {
        "name": "Gaurav Kumar",
        "email": "gaurav.kumar@example.com",
        "contact": "9999999999"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
    // const options = { key: 'rzp_test_1DP5mmOlF5G5ag', amount: '100', description: 'Credits towards consultation', image: 'https://i.imgur.com/3g7nmJC.png', currency: 'INR', name: 'foo', prefill: { email: 'void@razorpay.com', contact: '9191919191', name: 'Razorpay Software'}, theme: {color: '#F37254'}}
    try {
    let data = (await Checkout.open(options));
    console.log(data)
    var json = JSON.parse(data.response)
    alert(json.razorpay_payment_id)
    // this.presentAlert(data);
  } catch (error) {
      console.log("getting here "+error)
      // alert(response.error.code);
      // this.presentAlert(response.error.code); //Doesn't appear at all
    }
  }





  // async presentAlert( description: string) {
  //   const alert = await this.alertController.create({
  //       message: description,
  //       buttons: ['Agree']
  //   });
  //   await alert.present();
  // }
}
