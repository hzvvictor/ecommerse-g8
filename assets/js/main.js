'use-strict'
import {
    productPrint,
    productAdd,
    productRemove,
    productClear,
    cartClear,
    cartbuy,
    products
} from './components/cart-shop.js'
console.log(products);


/* base de datos**/
let productos = [{nombre: 'smartphone', precio:950.00, imagen:'../assets/images/headphone.jpg', catergoria: 'telefono mobile',cantidad:20},
                {nombre: 'computadora', precio:450.00, imagen:'../assets/images/laptop.png',catergoria: 'laptop',cantidad:30},
                {nombre: 'Ipad pro',precio:980, imagen:'../assets/images/ipad-pro.jpeg', catergoria: 'tablet',cantidad:10},
                {nombre: 'audifonos', precio:50.00, imagen:'../samsung-phone.png',catergoria:'asesorios',cantidad:15}]
