export const createLocalStorageData = (username) =>{
    let data = JSON.parse(localStorage.getItem(username));
    
    if(!data){
        console.log('comes here');
        
        localStorage.setItem(
            username,
            JSON.stringify({username: username , cart : [] })
        );
        data = {username: username , cart : [] }
    }
}

export default createLocalStorageData;