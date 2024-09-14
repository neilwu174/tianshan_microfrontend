import faker from 'faker';
let cart = '';
const mount = (el) => {
    console.log('mount func is called in cart');
    const name = faker.random.number();
    cart += `<div>You have ${name} items in your cart</div>`;
    el.innerHTML = cart;
}

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-cart');
    if (el) {
        mount(el);
    }
}

export { mount };