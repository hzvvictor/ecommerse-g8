import { cartShop } from './cart-elements.js'
import products from '../database/index.js'

// let products = []
let cart = []
const productsDOM = cartShop.cart.products
const cartDOM = cartShop.products.cards
console.log('contenedor productos sleccionados');
console.log(productsDOM);
/* 
 modal carrito => cartShopModal
*/
function cartProductPrint() {
    productsDOM.innerHTML = ""
    let dibujar = ''
    cart.forEach(({ id, title, category, img, price, stock }) => {
        const template =
            `<section data-id="${id}" data-category="${category}" class="art__card">
        <figure class="art__img">
            <img src="${img}" alt="" class="img_art" id="img_art">
        </figure>

        <content class="art__inf">
            <h4>${title}</h4>
            <div class="art__decription">
                <span class="art__price">${price}</span>
                <span class="art_cant" id="art_cant">Cant: ${stock}</span>
            </div>
        </content>

        <div class="card__buy">
            <div class="cart__amount">
                <div class="amount__btn cart-btn" id="cart-btnadd">-</div>
                <span>1</span>
                <div class="amount__btn cart-btn" id="cart-btnadd">+</div>
            </div>
        </div>

    </section>`
        dibujar += template
    })
    productsDOM.innerHTML = dibujar
}
function cartProductAdd(id, amount) {
    let product;
    product = cart.find(product => product.id == id)
    if (product == undefined) {
        product = products.find(product => product.id == id)
        cart.push(productAdd)
    }
    else {
        if (amount > products[id].stock) {
            alert('Ya no queda stock de ' + products[id].title)
            return;
        }
        products[id].stock -= amount

        product.stock += amount
    }

    productPrint()
    cartProductPrint()
}
function cartProductRemove(id) {
    let productIndex;
    productIndex = cart.findIndex(product => product.id == id)
    cart.slice(productIndex, 1)

    productPrint();
    cartProductPrint();
}

function cartProductRest(id, amount) {
    let product;
    product = cart.find(product => product.id == id)
    if (product == undefined) {
        product = products.find(product => product.id == id)
        cart.push(productAdd)
    }
    else {
        /* Si lo que se restara de cantidad es igual o mayor del producto del carrito entonces lo remueve*/
        if (amount >= product.stock) {
            cartProductRemove(id)
            return;
        }
        products[id].stock += amount
        /* Simplemente resta y lo actualiza a dibujar */
        product.stock -= amount

    }

    productPrint();
    cartProductPrint();
}
function cartProductClear() {
    cart.forEach(({ id, stock }) => {
        products[id].stock += stock
    })
    cart = []
    cartDOM.innerHTML = ""
}
const cartProductBuy = () => {
    let total

    cart.forEach(
        product => total += product.stock
    )
    cartProductClear();
    alert('Gracias por su compra')
    return total
}

const productPrint = () => {
    /* requiere de template de producto */
    let dibujar = ''
    console.log(`Productos :)`);
    console.log(products);
    products.forEach(({ id, title, category, img, price, stock }) => {
        console.log(`Dibujando a ${title}`);
        const template =
        `<article class="prod__cardbuy" data-id="${id}" data-category="${category}">
        <section class="prod__card">
            <div class="prod__img">
                <img src="${img}" alt="">
            </div>

            <div class="prod__inf">
                <h4>${title}</h4>
                <div class="prod__decription">
                    <span class="prod__price">${price}</span>

                    <span class="prod__stock">
                        | Stock:
                        <span>${stock}</span>
                    </span>
                </div>
            </div>

        </section>
        <section class="prod__buy">
            <div class="prod__amount">
                <span class="amount__btn remove"><i class='bx bx-minus'></i></span>
                <span class="cant_prod">1</span>
                <span class="amount__btn add"><i class='bx bx-plus'></i></span>
            </div>
            <span class="btn_buy" id="btn_buy">Buy</span>
        </section>
    </article>`
        dibujar += template
    })
    cartDOM.innerHTML = dibujar
}
const productAdd = (id, amount) => {

    productPrint()
}
const productRemove = (id, amount) => {

    productPrint()
}
const productClear = (id) => {

}


console.log(`cartDOM`);
console.log(cartDOM);
export {
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
}