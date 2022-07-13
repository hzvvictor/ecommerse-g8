import { cartShop } from './cart-elements.js'
import products from '../database/index.js'
let cart = []
const cartDOM = cartShop.cart.products
const productsDOM = cartShop.products.cards

/* 
 modal carrito => cartShopModal
*/
function cartProductPrint() {
    cartDOM.innerHTML = ""
    let dibujar = ''
    console.log('Elementos en carrito');
    console.log(cart);
    console.log('Elementos productos');
    console.log(products);
    cart.forEach(({ id, category, img, title, price, amount }) => {
        console.log('dibujar en carrito a ' + title);
        const template =
            `<section data-id="${id}" data-category="${category}" class="art__card">
            <figure class="art__img">
                <img src="${img}" alt="" class="img_art" id="img_art">
            </figure>

            <content class="art__inf">
                <h4>${title}</h4>
                <div class="art__decription">
                    <span class="art__price">${price}</span>
                </div>
                <div class="cart__amount">
                    <div class="amount__btn cart-btn rest">-</div>
                    <span class="art_cant" id="art_cant">${amount}</span>
                    <div class="amount__btn cart-btn add">+</div>
                </div>
            </content>
        </section>
        `
        dibujar += template
    })
    cartDOM.innerHTML = dibujar
}
const cartProductPush = ({ id, category, img, title, price, amount }, amountAdd) => {
    const productAdd = (
        {
            id,
            category,
            img,
            title,
            price,
            amount
        }
    )
    console.log('Se agrego a amount ' + amountAdd);
    console.log(productAdd);
    if (productAdd.amount) {
        productAdd.amount += amountAdd
    }
    else {
        productAdd.amount = amountAdd
        cart.push(productAdd)
    }
}
function consultarInventario(id, stock) {
    const productoFiltrado = products.find(producto => producto.id === id)
    return productoFiltrado.stock - stock >= 0
}
function cartProductAdd(id, amount) {
    let product;
    product = cart.find(product => product.id == Number(id));
    if (amount > products[Number(id) - 1].stock) {
        alert('Ya no queda stock de ' + products[id].title)
        return;
    }

    if (product == undefined) {
        product = products[Number(id) - 1]
    }
    console.log('Categoria ' + product.category);
    const productAdd = (
        {
            id: product.id,
            category: product.category,
            img: product.img,
            title: product.title,
            price: product.price,
            amount: product.amount
        }
    )
    console.log('Se agrego a amount ' + amount);
    console.log(productAdd);
    if (productAdd.amount) {
        product.amount += amount
    }
    else {
        productAdd.amount = amount
        cart.push(productAdd)
    }

    products[Number(id) - 1].stock -= amount


    productPrint()
    cartProductPrint()
}
function cartProductRemove(id) {
    let productIndex;
    productIndex = cart.findIndex(product => product.id == id)

    cart.splice(productIndex, 1)

    productPrint();
    cartProductPrint();
}

function cartProductRest(id, amount) {
    let product;
    product = cart.find(product => product.id == id)
    if (amount >= product.amount) {
        cartProductRemove(id)
    }
    console.log('Producto a restar');
    console.log(products[id]);
    products[Number(id) - 1].stock += amount
    /* Simplemente resta y lo actualiza a dibujar */
    product.amount -= amount
    

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
    cart = []
    cartDOM.innerHTML = ""
    alert('Gracias por su compra')
    return total
}

const productPrint = () => {
    console.log(products);
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

                    <span>
                        | Stock:
                        <span class="prod__stock">${stock}</span>
                    </span>
                </div>
            </div>

        </section>
        <section class="prod__buy">
            <div class="prod__amount">
                <span class="amount__btn remove"><i class='bx bx-minus'></i></span>
                <input type="text" class="cant__prod" value="1">
                <span class="amount__btn add"><i class='bx bx-plus'></i></span>
            </div>
            <span class="btn_buy" id="btn_buy">Buy</span>
        </section>
    </article>`
        dibujar += template
    })
    productsDOM.innerHTML = dibujar
}
const productAdd = (id, amount) => {

    productPrint()
}
const productRemove = (id, amount) => {

    productPrint()
}
const productClear = (id) => {

}


export {
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
}