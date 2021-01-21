import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(Checkout)
public class Checkout: CAPPlugin {
    
    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.success([
            "value": value
        ])
    }
    
    @objc func open(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.success([
            "value": value
        ])
    }
}

/*
 <ion-header>
   <ion-toolbar color="primary">
     <ion-title>
       Devdactic Capacitor Plugin
     </ion-title>
   </ion-toolbar>
 </ion-header>
  
 <ion-content>
   <ion-button expand="full" (click)="loadContacts()">
     Load Contacts
   </ion-button>
 </ion-content>
 */
