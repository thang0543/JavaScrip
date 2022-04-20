var productName = document.querySelector("#productName")
var productID = document.querySelector("#productID")
var CungCap = document.querySelector("#productCungCap")
var soLuong = document.querySelector("#soLuong")
var giaTien = document.querySelector("#giaTien")
var status = document.querySelector("#status")
var btn = document.querySelector("button")

btn.addEventListener("click",function(e){
    e.preventDefault();
   
    if(productName.value.trim() == ""){
        alert("vui long nhap ten")
        return false
    }
     if(productName.value.lenght < 5){
        console.log("lon hon 5")
        return false
    }
    // if(productID.value.trim() == ""){
       
    // }
    // if(soLuong.value.trim() == ""){
    //     alert("vui long nhap ten")
    // }
    // if(giaTien.value.trim() == ""){
    //     alert("vui long nhap ten")
    // }
})