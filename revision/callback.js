function placeOrder(orderDetail, orderPLaced,paymentProceed,orderConfirmed){

console.log("order recived: ",orderDetail);

setTimeout(()=>{
orderPLaced("order Placed successfully")

setTimeout( ()=>{

paymentProceed("Payment processed successfully");
setTimeout(()=>{
orderConfirmed("Order confirmed successfully");
},3000  )


},4000 )

},500)

}

function handleOrderPlaced(message){
console.log(message);
}

function handlePaymentProcessed(message) {
    console.log(message);
}

function handleOrderConfirmed(message) {
    console.log(message);
}

placeOrder(
    { id: 123, item: "Laptop", price: 50000 },
    handleOrderPlaced,
    handlePaymentProcessed,
    handleOrderConfirmed
);

