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

function register(){
    let inputFirstName = $('#txtFirstname').val();
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
    //validate the user *** Extra HW

    console.log(theUser);
    // clear the inputs
    $("input").val("");
}

function init(){
    console.log("Registration");
    //hook events

}
window.onload=init;