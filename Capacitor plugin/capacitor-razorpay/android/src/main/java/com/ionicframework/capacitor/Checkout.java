package com.ionicframework.capacitor;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@NativePlugin
public class Checkout extends Plugin {

    @PluginMethod
public void open(PluginCall call){
    saveCall(call);
    try{
        Intent intent = new Intent(getActivity(), CheckoutActivity.class);
        intent.putExtra("OPTIONS",call.getString("options"));
        intent.putExtra("FRAMEWORK","CAPACITOR");
        intent.putExtra("integration","CAPACITOR");        
        startActivityForResult(call,intent,com.razorpay.Checkout.RZP_REQUEST_CODE);
    }catch (Exception e){
    }
}
@Override
protected void handleOnActivityResult(int requestCode, int resultCode, Intent data) {
    super.handleOnActivityResult(requestCode, resultCode, data);
    com.razorpay.Checkout.handleActivityResult(getActivity(), com.razorpay.Checkout.RZP_REQUEST_CODE,resultCode,data,this,this);
}
@Override
public void onExternalWalletSelected(String s, PaymentData paymentData) {
    savedLastCall.reject(s);
}
@Override
public void onPaymentSuccess(String s, PaymentData paymentData) {
    JSObject jsObject = new JSObject();
try{
    jsObject.put("response",s);
}catch (Exception e){
    e.printStackTrace();
}
savedLastCall.success(jsObject);
}
@Override
public void onPaymentError(int i, String s, PaymentData paymentData) {
    savedLastCall.reject(s,""+i);
}
}
