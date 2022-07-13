'use-strict'

const addEvent = (element, nameEvent, functiontoadd) => {
    element.addEventListener(nameEvent, functiontoadd)
}
import {
    productPrint,
    cartProductPrint,
    cartProductAdd,
    cartProductRemove,
    cartProductRest,
    cartProductClear,
    cartProductBuy,
    productsDOM,
    cartDOM,
    products,
    cart
} from './components/cart-shop.js'

productPrint()
/* console.log('productsDOM');
console.log(productsDOM);
console.log('cartDOM');
console.log(cartDOM); */
productsDOM.addEventListener('click', (e) => {
    if (e.target.matches('.btn_buy')) {
        let id = e.target.parentElement.parentElement.getAttribute('data-id')
        id = Number(id)
        let amount = e.target.parentElement.querySelector('.cant__prod')
        amount = Number(amount.value)
        console.log(`ID => ${id}`);
        console.log(`amount => ${amount}`);
        cartProductAdd(id, amount)
        /* alert('Comprar') */

        // cartProductAdd()
    }
})

cartDOM.addEventListener('click', (e) => {
    if (e.target.matches('.add')) {
        // alert('agregar')

        let id = e.target.parentElement.parentElement.parentElement.getAttribute('data-id')
        id = Number(id)
        cartProductAdd(id, 1)
    } else if (e.target.matches('.rest')) {
        let id = e.target.parentElement.parentElement.parentElement.getAttribute('data-id')
        id = Number(id)
        cartProductRest(id, 1)
    }
})
// console.log(products);


/* base de datos**/
