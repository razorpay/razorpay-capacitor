package com.ionicframework.capacitor;

import android.content.Intent;
import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.razorpay.CheckoutActivity;
import com.razorpay.ExternalWalletListener;
import com.razorpay.PaymentData;
import com.razorpay.PaymentResultListener;
import com.razorpay.PaymentResultWithDataListener;

import org.json.JSONObject;

@NativePlugin
public class Checkout extends Plugin implements PaymentResultWithDataListener, ExternalWalletListener {

    @PluginMethod
    public void open(PluginCall call){
        saveCall(call);
        try{
            JSObject jsObject = call.getData();
            Intent intent = new Intent(getActivity(), CheckoutActivity.class);
            intent.putExtra("OPTIONS",jsObject.toString());
            intent.putExtra("FRAMEWORK","CAPACITOR");
            intent.putExtra("integration","CAPACITOR");
            startActivityForResult(call,intent,com.razorpay.Checkout.RZP_REQUEST_CODE);
        }catch (Exception e){
            Log.d("Error",e.getLocalizedMessage());
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
