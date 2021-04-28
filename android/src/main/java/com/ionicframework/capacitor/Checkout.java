package com.ionicframework.capacitor;

import android.app.Activity;
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

import org.json.JSONException;
import org.json.JSONObject;

@NativePlugin(requestCodes = {com.razorpay.Checkout.RZP_REQUEST_CODE})
public class Checkout extends Plugin  {


    @PluginMethod
    public void open(PluginCall call) {
        saveCall(call);
        try {
            JSObject jsObject = call.getData();
            Intent intent = new Intent(getActivity(), CheckoutActivity.class);
            intent.putExtra("OPTIONS", jsObject.toString());
            intent.putExtra("FRAMEWORK", "CAPACITOR");
            intent.putExtra("integration", "CAPACITOR");
            startActivityForResult(call, intent, com.razorpay.Checkout.RZP_REQUEST_CODE);

        } catch (Exception e) {
            Log.d("Error", e.getLocalizedMessage());
        }
    }

    @Override
    protected void handleOnActivityResult(int requestCode, int resultCode, Intent data) {
        super.handleOnActivityResult(requestCode, resultCode, data);
        final PluginCall lastSavedCall = getSavedCall();
        com.razorpay.Checkout.handleActivityResult(getActivity(), com.razorpay.Checkout.RZP_REQUEST_CODE, resultCode, data, new PaymentResultWithDataListener() {
            @Override
            public void onPaymentSuccess(String s, PaymentData paymentData) {
                try {

                    JSObject jsObject = new JSObject();
                    try {

                        JSObject dataObject = new JSObject();
                        dataObject.put("razorpay_payment_id",paymentData.getPaymentId());
                        dataObject.put("razorpay_order_id",paymentData.getOrderId());
                        dataObject.put("razorpay_signature",paymentData.getSignature());

                        jsObject.put("response", dataObject);

                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                    Log.d("RESULT",jsObject.toString());

                    if (lastSavedCall == null){
                        Log.e("ERROR","no call saved");
                        return;
                    }
                    lastSavedCall.success(jsObject);

                }catch (Exception e){
                    e.printStackTrace();
                }
            }

            @Override
            public void onPaymentError(int i, String s, PaymentData paymentData) {
                   lastSavedCall.reject(s,""+i);

            }
        }, new ExternalWalletListener() {
            @Override
            public void onExternalWalletSelected(String s, PaymentData paymentData) {
                lastSavedCall.reject(s);
            }
        });
    }
}


