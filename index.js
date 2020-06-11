var cart = [];

function getCart(name) {
  let price = Math.floor(Math.random()*100);
  let o = new Object()
  o = {
    itemName: name,
    itemPrice: price
  };
  cart.push(o);
 return cart
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
}

function viewCart() {
  // write your code here
  let sentence = "In your cart, you have"
  if (cart.length===0){
    return "Your shopping cart is empty."
  }else if (cart.length===1){
    return sentence + ` ${cart[0].itemName} at $${cart[0].itemPrice}`
  }else if (cart.length===2){
    return sentence + ` ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }else
    for (i=0; i<cart.length; i++){
      let items=[]
      items.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
}



function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
