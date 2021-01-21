import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import 'capacitor-razorpay';

const { Checkout } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  constructor() {
  }
 
  async loadContacts() {
     await Checkout.echo( { value: "https://ionicframework.com" });
  }
}