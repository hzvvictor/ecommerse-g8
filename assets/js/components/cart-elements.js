'use-strict'
import myCSS from "./mycss.js"


const nav = document.getElementById('nav')
const nav__icons = document.getElementById('nav__icons')
const cartModal = document.getElementById('contenedor__carrito')
const prod__cards = document.querySelector('.prod__cards')
const trash_icon=document.querySelector('.contenedor__carrito .icontrash')

const cartShop = {
    nav__icons: nav__icons,
    products: {
        cards: prod__cards
    }
    , theme: {
        icon: nav__icons.querySelector('[theme]'),
        modal: null
    }
    , cart: {
        icon: nav__icons.querySelector('[cart]'),
        modal: cartModal,
        products: cartModal.querySelector('.carrito__productos')
    }
}


const toggleCartModal = () => {
    const toggle = myCSS.toggleClass(cartShop.cart.modal, 'hidden')
    // console.log(`toggle ${toggle} 'hidden'`);
}
cartShop.cart.icon.addEventListener(
    'click', () => toggleCartModal()
);
cartShop.cart.modal.addEventListener(
    'click', ({ target }) => {
        if (target == cartShop.cart.modal)
            toggleCartModal()
    }
)
const inputsoloNumeros = (e) => {
    var key = window.event ? e.which : e.keyCode;
    if (key < 48 || key > 57) e.preventDefault();
}

const productsInputEvents = () => {

    const getStockActual = (e, el) => {
        const prod__decription = e? e.target.parentElement.parentElement.previousElementSibling :el.previousElementSibling
        console.log({el,p: el.previousElementSibling});
        const prod__stock = prod__decription.querySelector('.prod__stock')
        const stock = Number(prod__stock.textContent)
        // console.log(prod__stock);
        return { prod__decription, prod__stock, stock }
    }
    /* Captura el teclado */
    cartShop.products.cards.addEventListener('keydown', (e) => {
        if (e.target.matches(".cant__prod") == false)
            return;
        /* 
          keyCodes:
            left:       37 
            up:         38 
            right:      39 
            down:       40 
        */
        // console.log(e.keyCode);
        let value
        switch (e.keyCode) {
            case 38:
            case 39:
                value = 1
                break;
            case 37:
            case 40:
                value = -1
                break;
        }
        const { stock } = getStockActual(e)
        value = Number(e.target.value) + (value)
        if ((value > 0 && value <= stock))
            e.target.value = value
    })
    /* Captura el teclado */
    cartShop.products.cards.addEventListener('keypress', (e) => {
        if (e.target.matches(".cant__prod") == false)
            return;
        inputsoloNumeros(e);
    })
    /* Captura cambios en el input */
    cartShop.products.cards.addEventListener('input', (e) => {
        if (e.target.matches(".cant__prod") == false) {
            console.log('not is prod input');
            return;
        }
        const { stock } = getStockActual(e);

        let value = Number(e.target.value.slice(-2))
        // console.log(`if (${value} > ${stock})`);
        if (!value) value = 1
        else if (value > stock) value = e.target.value.slice(-1)

        e.target.value = value
    })
    /* Captura los botones de agregar y sumar */
    cartShop.products.cards.addEventListener('click', (e) => {
        console.log(e.target);
        const parentElement = e.target.parentElement
        if (parentElement.matches(".amount__btn") == false)
            return;
        console.log({ parentElement });
        const prod__buy = parentElement.parentElement.parentElement
        const { stock } = getStockActual(false, prod__buy )

        const input = prod__buy.querySelector('.cant__prod')
        console.log({ input });
        if (parentElement.matches('.add') && input.value < stock) {
            input.value = Number(input.value) + 1
            return
        }
        if (input.value > 1) --input.value
    })


}

productsInputEvents();

export {
    cartShop
}