
function makePayment() {
    flutterwaveCheckout({
        public_key: "FLWPUBK_TEST-SANDBOXDEMOKEY-X",
        tx_ref: "titanic-4891487343MDI0NzMx",
        amount: 100,
        currency: "DOLLARS",
        payment_option: "card, mobliemoneyghana, used",
        redirect_url: "https://glaciers.titanic.com/handle-flutterwave-payment",
        meta: {
            cosumer_id: 23,
            consumer_mac: "92a3-912ba-1192a",
        },
        customer: {
            email:"rose@unsinkableship.com",
            name: "Rose Dewitt Bukater",
        },
    });
}