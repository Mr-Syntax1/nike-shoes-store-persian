export const createLoginSession = (username)=>{
    localStorage.setItem('logged-in',JSON.stringify({username: username}))
}

export default createLoginSession;