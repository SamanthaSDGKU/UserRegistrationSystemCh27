const LS_KEY="users";

function saveUser(user){
    
    let val= JSON.stringify(user);//parse into a JSON string
    localStorage.setItem(LS_KEY,val);//send the string into the localStorage
}