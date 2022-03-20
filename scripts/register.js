class User {
    constructor(firstName, lastName, email, password, age, address, cardNumber, phone, color) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.age=age;
        this.cardNumber = cardNumber;
        this.address=address;
        this.contactPhone=phone; //##atention ###
        this.color=color;
    }
}

function isValid(user){
    //return false when the user is not valid
    //return true when the user is valid
    let valid=true;
    // we need to reset the original appareance of the inputs
    //by removing the input-error class
    $("input").removeClass("input-error");
    if(user.email.length==0){
        valid=false;
        $('#txtEmail').addClass("input-error");
    }
    if(user.password==0){
        valid=false;
        console.log("Your need to add a password");
    }

    if(!valid){
        console.error("Missing data");
        $("#alertError").removeClass("hide");
        setTimeout(function(){
            $("#alertError").addClass("hide");
        },2000);
    }
    return valid;
}

function register(){
    let inputFirstName = $('#txtFirstname').val();/*check your id on the html*/
    let inputLastName = $('#txtLastname').val();
    let inputEmail = $('#txtEmail').val();
    let inputPassword = $('#txtPassword').val();
    let inputAge = $("#txtAge").val();
    let inputCardNumber = $('#txtCardNumber').val();
    let inputAddress = $("#txtAddress").val();
    let inputPhone = $("#txtPhone").val();
    let inputColor= $("#txtColor").val();
    
    //create theUser 
    let theUser = new User(inputFirstName,inputLastName,inputEmail,inputPassword,inputAge,inputCardNumber,inputAddress,inputPhone,inputColor);
    if(isValid(theUser)){
        saveUser(theUser); // this fn is in the StoreManager
        // clear the inputs
        $("input").val("");
    } 
}

function init(){
    console.log("Registration");
    //hook events

}
window.onload=init;