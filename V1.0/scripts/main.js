import { products } from "./constants/products.js";

const doesUserLoggedIn = JSON.parse(localStorage.getItem('logged-in'))?.username;
const headerDiynamicContentContainer = document.querySelector('#header-diynamic-content');
const productsGridContainer = document.querySelector('.product-grid');

document.addEventListener('DOMContentLoaded', () => {
    if (doesUserLoggedIn) {
        const cart = JSON.parse(localStorage.getItem(doesUserLoggedIn))?.cart || [];
        headerDiynamicContentContainer.insertAdjacentHTML("beforeend", `
            <a id="cart" href="./cart.html" class="flex">
                <img src="./assets/icons/cart.png" alt="">
                <span id="cart_badge">${cart.length}</span>
            </a>
            <button onclick='logout()' id="logout-botton">
                <span>خروج</span>
                <img src="./assets/icons/logout.png" alt="">
            </button>`
        );

        products.map((product) => {
            productsGridContainer.insertAdjacentHTML('beforeend', `
                <article class="product-grid-item">
                    <img src="${product.img}" alt="">
                    <p class="flex justify-between padding-1">
                        <span>نام :</span><span class="font-exo2">${product.name}</span>
                    </p>
                    <p class="flex justify-between padding-1">
                        <span>قیمت :</span><span>${product.price.toLocaleString()} تومان</span>
                    </p>
                    <div onclick="addToCart(${product.id}, '${product.price}', '${product.name}', '${product.img}')"
                         class="product-to-cart-section padding-1">
                        <button>افزودن به سبد خرید</button>
                    </div>
                </article>
            `);
        })
    } else {
        headerDiynamicContentContainer.insertAdjacentHTML("beforeend", `
            <a class="header_login-button" href="./login.html">
                <img src="./assets/icons/user.png" alt="login">
                <span>ورود</span>
            </a>`
        );

        products.map((products) => {
            productsGridContainer.insertAdjacentHTML('beforeend', `
                <article class="product-grid-item">
                    <img src="${products?.img}" alt="">
                    <p class="flex justify-between padding-1">
                        <span>نام :</span><span class="font-exo2">${products.name}</span>
                    </p>
                    <p class="flex justify-between padding-1">
                        <span>قیمت :</span><span>${(products.price).toLocaleString()} تومان</span>
                    </p>
                    <div onclick = 'addToCart(${(products.id)},'${products.price}','${products.name}','${products.img}')' class="product-to-cart-section padding-1">
                        <button onclick="window.location.href='./login.html'">ورود برای خرید</button>
                    </div>
                </article>
            `)
        })
    }
})
