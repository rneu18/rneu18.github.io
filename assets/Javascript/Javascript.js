function saveData(){
    console.log("test");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message =document.getElementById("message").value;
    if( name ==='' || email ===''|| message ===''){
        alert("Please fill all fields...!!!!!!");
        return false;
    }
   console.log(name);
   console.log(email);
   console.log(message);
   
}
