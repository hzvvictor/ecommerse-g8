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
cartProductClear()
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
        let id = e.target.parentElement.parentElement.getAttribute('data-id')
        cartProductRemove(id)
    }

})

const trashTodo = cartShop.cart.modal
trashTodo.addEventListener('click', (e) => {
    if (e.target.id == 'incontrashGlobal') {
        cartProductClear()
    } else if (e.target.matches('#checkoutButton')) {
        cartProductBuy()
    }

})

<<<<<<< HEAD
mixitup('.prod__cards', {
    selectors:{
        target:`.prod__cardbuy`
    },
    animation: {
        duration: 300
    }
}).filter('all')

mixitup('.prod__cards', {
    selectors:{
        target:`.prod__cardbuy`
    },
    animation: {
        duration: 300
    }
}).filter('.mobile_phone')

mixitup('.prod__cards', {
    selectors:{
        target:`.prod__cardbuy`
    },
    animation: {
        duration: 300
    }
}).filter('.tablet')

mixitup('.prod__cards', {
    selectors:{
        target:`.prod__cardbuy`
    },
    animation: {
        duration: 300
    }
}).filter('.laptop')

mixitup('.prod__cards', {
    selectors:{
        target:`.prod__cardbuy`
    },
    animation: {
        duration: 300
    }
}).filter('.asesorios')

=======
const theme__document = document.getElementById('theme__document')
const link__style = document.head.querySelector('#style')
theme__document.addEventListener('click', () => {
    const styles = {
        default: 'style.css',
        dark: 'style-dark.css'
    }
    if (link__style.getAttribute('href') == styles.default)
        link__style.setAttribute('href', styles.dark)
    else
        link__style.setAttribute('href', styles.default)
})
>>>>>>> 27befcec0d0aa144bb054ce7330a631790bbb249
/* base de datos**/
