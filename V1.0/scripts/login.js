import { doesPasswordMatch } from "./utils/doesPasswordMatch.js";
import { doesUserExist } from "./utils/doesUserExist.js";
import { createLocalStorageData } from "./utils/createLocalStorageData.js"
import { createLoginSession } from "./utils/createLoginSession.js"


// گذاشتن دکمه دیدن و ندیدن رمز از اینجا
const hidePasswordElement = document.querySelector('#hide-password')

const passwordInput = document.querySelector('#password')
const loginForm = document.querySelector('#login-form')

let isPasswordVisable = false;


hidePasswordElement.addEventListener('click',()=>{
    
    isPasswordVisable = !isPasswordVisable;
    if (isPasswordVisable) {
        hidePasswordElement.src=`${location.origin}/assets/icons/visible.png`;
        passwordInput.setAttribute('type','text')
    }else{
        hidePasswordElement.src=`${location.origin}/assets/icons/invisible.png`;
        passwordInput.setAttribute('type','password')
    }
})
// گذاشتن دکمه دیدن و ندیدن رمز تا اینجا


//دیدن اینکه ایا کسی قبلا با این رمز و اسم لاگین کرده
loginForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    const elements = event.target.elements;
    const [username,password] = [
        elements.namedItem('username').value || '',
        elements.namedItem('password').value || '',
    ];
    
    const userExist = doesUserExist(username)
    const passwordMatch = doesPasswordMatch(username,password);



    if(userExist){
        if(passwordMatch) {
            //prose login
            createLocalStorageData(username);
            createLoginSession(username)
            location.replace(`${location.origin}/index.html`)

        }else alert('رمز عبور اشتباه')

    }else alert('نام کاربری یافت نشد')
        

})