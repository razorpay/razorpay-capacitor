package com.ionicframework.capacitor;

import android.app.Activity;
import android.content.Intent;
import android.util.Log;

import androidx.activity.result.ActivityResult;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.ActivityCallback;
import com.razorpay.CheckoutActivity;
import com.razorpay.ExternalWalletListener;
import com.razorpay.PaymentData;
import com.razorpay.PaymentResultListener;
import com.razorpay.PaymentResultWithDataListener;

import org.json.JSONException;
import org.json.JSONObject;

@NativePlugin(
        requestCodes = {com.razorpay.Checkout.RZP_REQUEST_CODE}
)
public class Checkout extends Plugin  {


    @PluginMethod
    public void open(PluginCall call) {
        call.setKeepAlive(true);
        try {
            JSObject jsObject = call.getData();
            Intent intent = new Intent(getActivity(), CheckoutActivity.class);
            intent.putExtra("OPTIONS", jsObject.toString());
            intent.putExtra("FRAMEWORK", "CAPACITOR");
            startActivityForResult(call,intent,"handleOnActivityResult");

        } catch (Exception e) {
            Log.d("Error", e.getLocalizedMessage());
        }
    }

    @ActivityCallback
    private void handleOnActivityResult(PluginCall call, ActivityResult result){
        final PluginCall lastSavedCall = call;
        com.razorpay.Checkout.handleActivityResult(getActivity(), com.razorpay.Checkout.RZP_REQUEST_CODE, result.getResultCode(), result.getData(), new PaymentResultWithDataListener() {
            @Override
            public void onPaymentSuccess(String s, PaymentData paymentData) {
                try {
                    JSObject jsObject = new JSObject();
                    try {
                        jsObject.put("response", paymentData.getData().toString());
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                    Log.d("RESULT",jsObject.toString());

                    if (lastSavedCall == null){
                        Log.e("ERROR","no call saved");
                        return;
                    }
                    lastSavedCall.resolve(jsObject);
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


