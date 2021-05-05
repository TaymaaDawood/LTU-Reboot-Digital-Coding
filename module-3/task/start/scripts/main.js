// This is a single line comment


/* 
This is
a 
multiple
line
comment
*/

const productName ='Chocolate Icecream'; //string
let price =0.89; //float
let quantity =2; // integer
let inStock =true; // boolean
let discountAmount =0.20; //float

//console.log(productName,price);

function showProductName(){
    console.log(productName);
}
//showProductName();

/*function totalPrice(productPrice,productQuantity){
    console.log(productPrice*productQuantity);
}
totalPrice(price,quantity);*/

/*function checkAvailability(productInStock){
    console.log(productInStock);
}
checkAvailability(inStock);*/

/*let checkAvailability=productInStock => console.log(productInStock);
checkAvailability(inStock);*/

/*function showMessege(){
    let message = 'Hello, I am JavaScript';
    alert (message);
}
showMessege();*/
function productDiscount(){
    if (quantity > 1){
     let newPrice=(price - discountAmount * quantity);
    console.log(newPrice);
    }
    else{
        console.log(price*quantity);
    }
}
productDiscount();