import {mount as productsMount} from 'products/ProductsIndex';
import {mount as cartMOunt} from 'cart/CartShow';
console.log("container")
console.log(document.querySelector('#my-products'))
productsMount(document.querySelector('#my-products'));
cartMOunt(document.querySelector('#my-cart'));
