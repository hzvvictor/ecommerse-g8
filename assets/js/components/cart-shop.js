import { cartShop } from './cart-elements.js'
let ec = []
let productsSelect = []
const productsSelectDom = null
const cartProducts = cartShop.cart.products

/* 
 modal carrito => cartShopModal
*/


const productPrint = () => {
    /* requiere de template de producto */
    let inner = ''
    products.forEach(({ id, title, category, img, price, stock }) => {
        const template =
            `<section id="prod__card:${id}" data-category="${category}" class="prod__card card-scrolRevel">
    <figure class="prod__img">
        <img src="${img}" alt="" class="img_prod" id="img_prod">
    </figure>

    <content class="prod__inf">
        <h4>${title}</h4>
        <div class="prod__decription">
            <span class="prod__price">${price}</span>

            <span class="prod__stock">
                | Stock:
                <span>${stock}</span>
            </span>
        </div>
    </content>
    <div class="card__buy">
        <div class="prod__amount">
            <span class="amount__btn remove"><i class='bx bx-minus'></i></span>
            <span id="cant_prod">1</span>
            <span class="amount__btn add"><i class='bx bx-plus'></i></span>
        </div>
        <span class="btn_buy" id="btn_buy">Buy</span>
    </div>
</section>`
        inner += template
    })
    cartProducts.innerHTML = inner
}
const productAdd = (id, amount) => {

    productPrint()
}
const productRemove = (id, amount) => {

    productPrint()
}

const productClear = (id) => {

}
const cartClear = () => {
    productsSelect = []
    cartProducts.innerHTML = ''
}
const cartbuy = () => {
    let total

    return total
}
console.log(`cartProducts`);
console.log(cartProducts);
export {
    productPrint,
    productAdd,
    productRemove,
    productClear,
    cartClear,
    cartbuy,
    products
}