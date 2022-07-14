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
    cart,
    cartShop,
} from './components/cart-shop.js'

productPrint()


productsDOM.addEventListener('click', (e) => {
    if (e.target.matches('.btn_buy')) {
        let id = e.target.parentElement.parentElement.getAttribute('data-id')
        id = Number(id)
        let amount = e.target.parentElement.querySelector('.cant__prod')
        amount = Number(amount.value)

        cartProductAdd(id, amount)
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
    } else if (e.target.matches('.icontrash')) {
        let id = e.target.parentElement.parentElement.parentElement.getAttribute('data-id')
        cartProductRemove(id)
    }

})

const trashTodo=cartShop.cart.modal
    trashTodo.addEventListener('click',(e)=>{
        console.log(e.target.id);
        if(e.target.id=='incontrashGlobal'){
            cartProductClear()
        }else if (e.target.matches('#checkoutButton')){
        cartProductBuy()
    }

    })


/* base de datos**/
