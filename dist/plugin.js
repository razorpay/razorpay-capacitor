var capacitorPlugin = (function (exports, core) {
    'use strict';

    var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    class CheckoutWeb extends core.WebPlugin {
        constructor() {
            super({
                name: 'Checkout',
                platforms: ['web'],
            });
        }
        echo(options) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('ECHO', options);
                return options;
            });
        }
        open(options) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(options);
                return new Promise((resolve, reject) => {
                    var _a;
                    var razorpay;
                    //add handlers to options to get the success response
                    var finalOps = options;
                    finalOps['handler'] = function (res) {
                        console.log(res.razorpay_payment_id);
                        resolve({
                            response: res
                        });
                    };
                    finalOps['modal.ondismiss'] = function () {
                        reject(JSON.stringify({ code: 2, description: 'Payment Canceled by User' }));
                    };
                    var retryCount = 0;
                    if (finalOps.hasOwnProperty('retry')) {
                        if (finalOps.retry.enabled === true) {
                            retryCount = finalOps.retry.max_count;
                        }
                    }
                    //get the first script tag in the document
                    var rjs = document.getElementsByTagName('script')[0];
                    //create a HTMLScriptElement object for rzp script injection
                    var rzpjs = document.createElement('script');
                    rzpjs.id = 'rzp-jssdk';
                    rzpjs.setAttribute('src', 'https://checkout.razorpay.com/v1/checkout.js');
                    (_a = rjs.parentNode) === null || _a === void 0 ? void 0 : _a.appendChild(rzpjs);
                    rzpjs.addEventListener('load', () => {
                        try {
                            razorpay = new window.Razorpay(finalOps);
                            razorpay.open();
                            razorpay.on(('payment.failed'), (res) => {
                                var _a;
                                retryCount = retryCount - 1;
                                if (retryCount < 0) {
                                    console.log(res);
                                    (_a = rjs.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(rzpjs);
                                    reject(res.error);
                                }
                            });
                        }
                        catch (err) {
                            reject({
                                response: err
                            });
                        }
                    });
                });
                // var rjs = document.getElementsByTagName('script')[0]
                // var razorpay;
                // var js:HTMLScriptElement = document.createElement('script')
                // js.id = 'rzp-jssdk'
                // js.setAttribute('src','https://checkout.razorpay.com/v1/checkout.js')
                // document.body.appendChild(js);
                // document.body.appendChild(js);
                // rjs.parentNode?.appendChild(js)
                // rjs.addEventListener('load',()=>{
                //   try{
                //     razorpay = new (window as any).Razorpay(options)
                //     razorpay.open()
                //     razorpay.on('payment.failed',function(response:any){
                //         console.log('payment failed')
                //         console.log(response)
                //     })
                //   }catch(err){
                //     document.body.removeChild(js)
                //     return{
                //       response: "Problem opening checkouts"
                //     }
                //   }
                // })
                // return {
                //   response:options.key
                // }
            });
        }
    }
    const Checkout = new CheckoutWeb();
    core.registerWebPlugin(Checkout);

    exports.Checkout = Checkout;
    exports.CheckoutWeb = CheckoutWeb;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
