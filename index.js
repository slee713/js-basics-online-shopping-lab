var cart = [];

function getCart() {
 return cart
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 let price = Math.floor(Math.random()*100);
 let o = {
   itemName : name,
   itemPrice : price
 }
 cart.push(o);
return item + " has been added to your cart."
}

function viewCart() {
  // write your code here
  let sentence = "In your cart, you have"
  if (cart.length===0){
    return "Your shopping cart is empty."
  }else if (cart.length===1){
    return sentence + ` ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }else if (cart.length===2){
    return sentence + ` ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }else
    for (let i=0; i<cart.length; i++){
      let items=[]
      items.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
}



function total() {
  // write your code here
  for (let i = 0; i<cart.length; i++){
    let total = 0
    total = total + getcart()[0].itemPrice
  }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
