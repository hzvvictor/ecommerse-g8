import { cartShop } from './cart-elements.js'
let products = []
let productsSelect = []
const productsSelectDom = cartShop.cart.products
const cartProducts = cartShop.products.cards
console.log('contenedor productos sleccionados');
console.log(productsSelectDom);
/* 
 modal carrito => cartShopModal 

 const productsSelectDom=document.getElementById(productsSelectDom)
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
const productAdd = (id, stock) => {
    const productoFiltrado = products.find(producto => producto.id===id)
    if (productoFiltrado && productoFiltrado.stok > 0){
     
    const productsSelectFiltrado = productsSelect.find(productsSelect => productsSelect.id === id)

        if (productsSelect){
            
            if(consultarInventario(id, stock + productsSelectFiltrado.stock)){
                productsSelect.stock += stock
            } else {
               window.alert('No hay suficiente stock') 
            }
        }else {
            productsSelect.push({id,stock})
        }
        
    }else {
        window.alert('Lo sentimos, no hay stock')
    }
}

const productRemove = (id, stock) => {

    const productsSelectFiltrado = productsSelect.find(productsSelect => productsSelect.id === id)

    if (productsSelect.stok - stock > 0){
        productsSelect.stock -= cantidad
    }else{
        const confirmar =window.confirm('¿Estás Seguro de que quieres remover el articulo?')

        if (confirmar){
            productsSelect = productsSelect.filter(productsSelect => productsSelect.id !== id)
        }
    }
}

function consultarInventario(id, stock){
    const productoFiltrado = products.find(producto => producto.id===id)

    return  productoFiltrado.stock - stock  >= 0
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