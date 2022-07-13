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
    products,
    productsDOM,
    cart,
    cartDOM
} from './components/cart-shop.js'
// productPrint()

// console.log(products);


/* base de datos**/
