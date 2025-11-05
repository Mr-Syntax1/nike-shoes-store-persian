import users from "../constants/users.js"

 export const doesPasswordMatch = (username = '',password='')=>{
    let doesPasswordMatch = false;

    users.forEach(user => {
        if(user.username== username && user.password==password){
            doesPasswordMatch = true;
            return;
        }
    });
    return doesPasswordMatch;
 }
 
export default doesPasswordMatch

