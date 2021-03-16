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

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
      add(Checkout.class);
    }});
  }
}

```

## Usage (iOS, Web, Android)

```ts
import  'capacitor-razorpay-test';
import { Plugins } from '@capacitor/core';
const { Checkout } = Plugins;

  async loadCheckout() {
    const options = { key: 'rzp_test_1DP5mmOlF5G5ag', amount: '5000', description: 'Credits towards consultation', image: 'https://i.imgur.com/3g7nmJC.png', currency: 'INR', name: 'foo', prefill: { email: 'void@razorpay.com', contact: '9191919191', name: 'Razorpay Software'}, theme: {color: '#F37254'}}
    try {
    let data = (await Checkout.open(options));
    this.presentAlert(data.response);
    } catch (error) {
      this.presentAlert(error.message); //Doesn't appear at all
    }
  }
```

###
