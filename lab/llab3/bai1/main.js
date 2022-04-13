var user = document.querySelector("#user")
var password = document.querySelector("#password")
var btn  = document.querySelector("#btn")


btn.addEventListener("click",function(envent){
    
    if(user.value == ""){
        alert("vui long nhap user")
    }
    if(password.value == ""){
        alert("vui long nhap password")
    }
}
    )