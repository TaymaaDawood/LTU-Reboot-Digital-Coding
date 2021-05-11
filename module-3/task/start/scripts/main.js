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
/*function productDiscount(){
    if (quantity > 1){
     let newPrice=(price - discountAmount * quantity);
    console.log(newPrice);
    }
    else{
        console.log(price*quantity);
    }
}
productDiscount();*/

let productAsAnArray =[productName, price, quantity, inStock, discountAmount];
//console.log(productAsAnArray);

let firstItem = productAsAnArray[0];
let lastItem = productAsAnArray[4];
//console.log(firstItem ,' ' , lastItem);

let productAsAnObject ={
  productName: "Chocolate Icecream",
  price: 0.89,
  quantity: 2,
  discountAmount: 0.20
};
/*console.log(productAsAnObject.productName);
console.log(productAsAnObject.quantity);*/

/*let productName2 = productAsAnObject.productName;

let productPrice=productAsAnObject['price'];
console.log ('product name:', productName2 ,' ','product price:', productPrice);*/

/*console.log(productAsAnObject.productName);
productAsAnObject.price=1.15;
//console.log(productAsAnObject.price);
productAsAnObject.inStock= false;
productAsAnObject['quantity']=5;
console.log('price:',productAsAnObject.price,' ', 'quantity:', productAsAnObject.quantity);*/

/*productAsAnObject.loyaltyCard= false;  //add new properity
console.log(productAsAnObject.loyaltyCard);
delete productAsAnObject.loyaltyCard
*/
/*let numbers=[1,2,3,4,5,6,7,8,9];
//console.log(numbers.length);
for ( let counter=0; counter<numbers.length; counter++){
    console.log(numbers[counter]);
}*/

/*
7 times table
7*1
7*2 etc
7*12 stop
for loop 
  counter =1
  counter< 12 
  counter ++
*/
/*for(let counter= 1; counter<=12; counter++){
    let result = 7* counter;

    console.log(result);
}*/


/*function multiplyBy(num){
    for(let counter= 1; counter<=12; counter++){
        let result = num * counter;
    
        console.log(num, '* ', counter ,'=', result);
    }
}
multiplyBy(5);*/

/*
arr=shoppingcart

shoppingcart[1]

for
counter=0
counter<arr.length
counter ++

arr[counter].price*arr[counter].quantity
*/

function totalPriceOfShopping(arr){
  let totalPrice=0;

 for (let counter=0; counter<arr.length; counter++){
     totalPrice+=arr[counter].price*arr[counter].quantity;
   }
   return totalPrice.toFixed(2);
}

console.log(totalPriceOfShopping(shoppingCart));
