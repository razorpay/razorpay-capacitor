import Foundation
import Capacitor
import Razorpay

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(Checkout)
public class Checkout: CAPPlugin {
    
    var call: CAPPluginCall?
    
    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.success([
            "value": value
        ])
    }
    
    @objc func open(_ call: CAPPluginCall) {
        self.call = call
        let key = call.getString("key") ?? ""
        guard var option = call.options else { return }
        option["integration"] = "capacitor"
        option["FRAMEWORK"] = "capacitor"
        DispatchQueue.main.async {
            let razorpayObj = RazorpayCheckout.initWithKey(key, andDelegate: self)
            razorpayObj.setExternalWalletSelectionDelegate(self)
            razorpayObj.open(option)
        }
    }
}

extension Checkout : RazorpayPaymentCompletionProtocol, ExternalWalletSelectionProtocol {
    
    public func onPaymentError(_ code: Int32, description str: String) {
        if let call = call {
            call.reject("\(code): \(str)")
        }
    }
    
    public func onPaymentSuccess(_ payment_id: String) {
        if let call = call {
            call.success(["response":"\(payment_id)"])
        }
    }
    
    public func onExternalWalletSelected(_ walletName: String, withPaymentData paymentData: [AnyHashable : Any]?) {
        if let call = call {
            call.reject(walletName)
        }
    }
}
