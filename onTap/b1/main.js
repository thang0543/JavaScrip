var products =[
    {
        name: "",
        id: "",
        supplier: "",
        poin: "",
        quantity: "",
        status: "",
    }
]

var productName = document.querySelector("#productName")
var productID = document.querySelector("#productID")
var CungCap = document.querySelector("#productCungCap")
var soLuong = document.querySelector("#soLuong")
var giaTien = document.querySelector("#giaTien")
var statusN = document.querySelector("#status")
var btn = document.querySelector("button")
var erro = document.querySelectorAll(".erro")
var tbody = document.querySelector("tbody")



function checkForm(){
    var a ;
    var count = 0;
    if(productName.value.trim() == ""){
        erro[0].innerHTML = "vui long nhap ten"
       count++;
    }else if(productName.value.length < 5){
        erro[0].innerHTML = "vui long nhap ten co it nhat 5 chu cai"
       count++;
    }
    
    if(productID.value.trim() == ""){
        erro[1].innerHTML = "vui long nhap id"
       count++;
    }

    if(soLuong.value.trim() == ""){
        erro[3].innerHTML = "vui long nhap so luong"
       count++;
    }else if(isNaN(soLuong.value)){
        erro[3].innerHTML = "vui long nhap so "
       count++;
    }else if(soLuong.value < 0){
        erro[3].innerHTML = "vui long nhap so duong "
        count++;
    }

    if(CungCap.value == ""){
        erro[2].innerHTML = "vui long chon don vi "
        count++;
    }

    if(giaTien.value.trim() == ""){
        erro[4].innerHTML = "vui long nhap gia tien"
       count++;
    }else if(isNaN(giaTien.value)){
        erro[4].innerHTML = "vui long nhap so "
       count++;
    }else if(giaTien.value < 0){
        erro[4].innerHTML = "vui long nhap so duong"
        count++;
    }
    if(statusN.value == ""){
        erro[5].innerHTML = " vui long chon trang thai"
        count++;
    }

    if(count == 0){
        return true
    }else{
        return false
    }
}
function showProduct(){
    tbody.innerHTML = products.map(function(item){
        return `
        <tr>
        <td>${item.name}</td>
        <td>${item.id}</td>
        <td>${item.supplier}</td>
        <td>${item.poin}</td>
        <td>${item.quantity}</td>
        <td>${item.status}</td>
        </tr>
        `
    }).join("")
}
showProduct();

function addProduct(e){
    checkForm()
    e.preventDefault();
    var chooose = true
    var product = {
        name: productName.value,
        id: productID.value,
        supplier: CungCap.value,
        poin: giaTien.value,
        quantity: soLuong.value,
        status: statusN.value == 0 ? "con hang" : "het hang"
    }

    for(var index of products){
        if(index.id == productID.value){
            chooose = false
        }
    }

    if(chooose == true && checkForm()){
        products.push(product)
    }else if(chooose == false && checkForm()){
        alert("san pham da ton tai")
    }
 showProduct();
}
btn.addEventListener("click",addProduct)