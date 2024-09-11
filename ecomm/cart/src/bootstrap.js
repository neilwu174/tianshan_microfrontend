import faker from 'faker';
let cart = '';

const name = faker.random.number();
cart += `<div>You have ${name} items in your cart</div>`;

console.log(cart)
document.querySelector("#dev-cart").innerHTML = cart;