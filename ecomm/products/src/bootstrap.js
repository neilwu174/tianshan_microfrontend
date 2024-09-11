import faker from 'faker';
const mount = (el) => {
    let products = '';

    for (let i = 0; i < 10; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}vvvv</div>`;
    }
    
    console.log(products)
    el.innerHTML = products;
}

export { mount };