// var btn = document.querySelector("#btn")
// var text = document.querySelector("input")


// // c2
// // btn.onclick = function(event){
// //     event.preventDefault();
// //     console.log("hi")
// // }

// //c3
// btn.addEventListener("click",function(event){
//     event.preventDefault();
//     console.log(text.value)
// })

// var btn = document.querySelector("#btn")
// var nameProduct = document.querySelector("#productName")
// var show = document.querySelector("#showPorduct")

// function Text(){
//      show.innerHTML = nameProduct.innerHTML
// }
// btn.addEventListener("click",Text)


var quantity = document.querySelector("#quantity")
var btn = document.querySelector("#buy")
var error = document.querySelector(".error")
var successful = document.querySelector(".successful")

btn.addEventListener("click",function(enven){
    enven.preventDefault();
    if(quantity.value < 0){
        error.innerHTML = "so luong lon hon 0"
        return false;
    }
    if(quantity.value == ""){
        error.innerHTML = "vui long nhap"
        return false;
    }
error.innerHTML = "";
successful.innerHTML = "thanh cong "
})