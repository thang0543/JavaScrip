var nameProduct = document.querySelector("h1")
var price = document.querySelector("h2")
var quantity = document.querySelector("input")
var btn = document.querySelector("button")
var erro = document.querySelector(".erro")

var information = document.querySelectorAll("p")

function showProduct(envent){
    envent.preventDefault();
    if(quantity.value == ""){
        erro.innerHTML = ("vui long nhap so luong");
    }else{
        information[0].innerHTML += nameProduct.innerHTML
        information[1].innerHTML += quantity.value
        information[2].innerHTML += price.innerHTML
        information[3].innerHTML +=  1199 * quantity.value
    }
}

btn.addEventListener("click",showProduct)