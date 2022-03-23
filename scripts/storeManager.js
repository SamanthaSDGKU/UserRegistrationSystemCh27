const LS_KEY="users";

function saveUser(user){
    //load the old data
    let data=readUsers();
    //merge old data and new user
    data.push(user);
    //save
    let val= JSON.stringify(data);//parse into a JSON string
    localStorage.setItem(LS_KEY,val);//send the string into the localStorage
}

function readUsers(){
    let data= localStorage.getItem(LS_KEY);//get data from LS
    console.log(data); // JSON
    if(!data){ //is not data?
        return [];//create the array
    }else{
        //we have data
        let list =JSON.parse(data);//obj 
        return list;
    }
}
