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
        call.resolve([
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
            
            let razorpayObj = RazorpayCheckout.initWithKey(key, andDelegateWithData: self)
            razorpayObj.setExternalWalletSelectionDelegate(self)
            razorpayObj.open(option)
        }
    }
}

extension Checkout : RazorpayPaymentCompletionProtocolWithData, ExternalWalletSelectionProtocol {
    
    static let CODE_PAYMENT_ERROR = 1
    
    static let NETWORK_ERROR = 0
        static let INVALID_OPTIONS = 1
        static let PAYMENT_CANCELLED = 2
        static let TLS_ERROR = 3
        static let INCOMPATIBLE_PLUGIN = 3
        static let UNKNOWN_ERROR = 100
    public func onPaymentSuccess(_ payment_id: String, andData response: [AnyHashable : Any]?) {
        if let call = call {
            var responseObj = [String:Any]()
            responseObj["response"]  = response
//            let jsObject: JSObject = JSObject.init(uniqueKeysWithValues: (response as! NSDictionary))
            call.resolve(["response":(response) as Any])
        }
    }
    public func onPaymentError(_ code: Int32, description str: String, andData data: [AnyHashable : Any]?) {
        if let call = call {

            do{
                let dataJson = try JSONSerialization.data(withJSONObject: (data) ?? "\(code):\(str)", options: [])
                let dataString = String(data: dataJson, encoding: .utf8)!
                call.reject("", dataString, nil)
            }catch{
                print("catch")
                call.reject("",str, nil)
            }
        }
    }
    
    public func onExternalWalletSelected(_ walletName: String, withPaymentData paymentData: [AnyHashable : Any]?) {
        if let call = call {
            call.reject(walletName)
        }
    }
    
    static func translateRzpPaymentError(errorCode: Int) -> Int {
            switch (errorCode) {
            case 0:
                return NETWORK_ERROR
            case 1:
                return INVALID_OPTIONS
            case 2:
                return PAYMENT_CANCELLED
            default:
                return UNKNOWN_ERROR
            }
        }
}
