<p align="center"><br><img src="https://user-images.githubusercontent.com/236501/85893648-1c92e880-b7a8-11ea-926d-95355b8175c7.png" width="128" height="128" /></p>
<h3 align="center">razorpay-capacitor</h3>

# razorpay-capacitor
Capacitor wrapper around Razorpay's Android and iOS SDKs

<!-- 
Capacitor plugin to support [Razorpay Standard Checkout](https://developer.apple.com/sign-in-with-apple/get-started/)
-->

<!-- Badges
<a href="https://npmjs.com/package/@capacitor-community/apple-sign-in">
  <img src="https://img.shields.io/npm/v/@capacitor-community/apple-sign-in.svg">
</a>
<a href="https://npmjs.com/package/@capacitor-community/apple-sign-in">
  <img src="https://img.shields.io/npm/l/@capacitor-community/apple-sign-in.svg">
</a>
 -->

## Installation

- `npm i -S https://github.com/razorpay/razorpay-capacitor.git`

## Adding Plugin For Android Integration

Add the Checkout class to the ArrayList in the MainActivity class in {{projectDir}}/android/src/main/MainActivity.java

```ts
import com.ionicframework.capacitor.Checkout;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
  super.onCreate(savedInstanceState);

  registerPlugin(Checkout.class);
}
}

```

## Usage (iOS, Web, Android)

```ts
import { Checkout } from 'capacitor-razorpay';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertController: AlertController) {}

  async payWithRazorpay(){
    const options = {
      key: '[YOUR_KEY_ID]',
      amount: '100',
      description: 'Great offers',
      image: 'https://i.imgur.com/3g7nmJC.png',
      order_id: 'order_Cp10EhSaf7wLbS',//Order ID generated in Step 1
      currency: 'INR',
      name: 'Acme Corp',
      prefill: {
        email: 'gaurav.kumar@example.com',
        contact: '9191919191'
      },
      theme: {
        color: '#3399cc'
      }
    }
    try {
      let data = (await Checkout.open(options));
      console.log(data.response+"AcmeCorp");

      this.presentAlert(data.response);
    } catch (error) {
      this.presentAlert(error.message); //Doesn't appear at all
    }
  }

  async presentAlert(response: string){
    // let responseObj = JSON.parse(response)
    console.log("message"+ response['razorpay_payment_id']);
    const alert = await this.alertController.create({
      message:response['razorpay_payment_id'],
      backdropDismiss: true,
    });

    await alert.present();
  }

}
```

###
