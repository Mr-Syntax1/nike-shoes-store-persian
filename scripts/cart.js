const doesUserLoggedIn = JSON.parse
(localStorage.getItem('logged-in')
)?.username;

const cartContainer = document.querySelector('.cart-container')
const cartItemsContainer = document.querySelector('#cart-items-container')

document.addEventListener('DOMContentLoaded',()=>{
    if(doesUserLoggedIn){
        const cart = JSON.parse(localStorage.getItem(doesUserLoggedIn))?.cart || [];
        cartContainer.insertAdjacentHTML('afterbegin',`
        <p class="font-rokh font-size-2 font-weigth-700">سبد خرید شما : </p>
        <p class="font-exo2 font-size-1">username : ${doesUserLoggedIn}</p>
        <a href = "./index.html" class="font-exo2 font-size-1 text-underline ">بازگشت به صفحه اصلی</a>

            `)

            cart.length > 0 
            ? cart.map(({name,price,id,img})=>{
                cartItemsContainer.insertAdjacentHTML('beforeend',`
                    
            <div class="cart-item flex justify-between items-center padding-1">
            <img src="${img}" alt="">
            <p class="font-exo2">${name}</p>
            <p>${price}تومان</p>
           <button onclick="deleteItem(${id})">حذف</button>
            </div>

                    `)
            })
            : cartItemsContainer.insertAdjacentHTML('beforeend',`
                
                <p class = 'padding-3 text-center font-size-2'>کالایی در سبد خرید وجود ندارد!</p>

                `)
                
                let totalPrice = 0;

                // تبدیل price به Number قبل از جمع
                cart.forEach(({price}) => {
                    totalPrice += Number(price);
                });

                cartContainer.insertAdjacentHTML('beforeend', `
                    <p>مجموعاً ${cart.length} کالا به ارزش ${totalPrice.toLocaleString()} تومان</p>
                `);
               
                
    }else{
        cartContainer.insertAdjacentHTML('beforeend',`
    <p class="font-size-4 font-weigth-700 font-rokh">باید حتما لاگین کنید!</p>
    <a style="text-decoration: underline ;text-underline-offset: 5px;" href="./login.html">برای ورود کلیک کنید!</a>
            `)
    }
})