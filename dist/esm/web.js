import { registerPlugin, WebPlugin } from '@capacitor/core';
export class CheckoutWeb extends WebPlugin {
    constructor() {
        super({
            name: 'Checkout',
            platforms: ['web'],
        });
    }
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
    async open(options) {
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
    }
}
const Checkout = registerPlugin('Checkout', {
    web: () => import('./web').then(m => new m.CheckoutWeb())
});
export * from './definitions';
export { Checkout };
//# sourceMappingURL=web.js.map