var btn = document.querySelector("button")
var notification = document.querySelector(".priceDelivery")
var arr = document.querySelectorAll("input")
var selector = document.querySelector("#list")
var success = document.querySelector(".successful")
var successful = document.querySelectorAll(".successful p")

var Dispatch = [];

btn.addEventListener("click", show)
arr[3].addEventListener("click", function () {
    notification.style.display = "none";
    Dispatch[0] = arr[3].value;
    Dispatch[1] = 0
})

arr[4].addEventListener("click", function () {
    notification.style.display = "block";
    
    Dispatch[0] = arr[4].value;
    Dispatch[1] = arr[5].value;
})

function show(envent) {
    envent.preventDefault();
    var flag = true;
    if (arr[0].value == "") {
        alert("vui lòng nhâp số lượng")
        flag = false;
    } else if (isNaN(arr[0].value) == true) {
        flag = false;
        alert("vui lòng nhâp số ")
    }
    if (arr[1].value == "") {
        alert("vui lòng nhập tên sản phẩm")
        flag = false;
    }
    if (arr[2].value == "") {
        alert("vui lòng nhập giá sản phẩm")
        flag = false;
    }
    if (selector.value == "") {
        alert("vui lòng chọn loại sản phẩm")
    }
    if (!arr[4].checked && !arr[3].checked) {
        alert("vui lòng chọn điạ chỉ nhận hàng")
        flag = false;
    }


    if (flag == true) {
        alert("đặt mua thành công")
        success.style.display = "block"
        successful[0].innerHTML += arr[1].value;
        successful[1].innerHTML += selector.value;
        successful[2].innerHTML += arr[2].value;
        successful[3].innerHTML += Dispatch[0];
        successful[4].innerHTML += Dispatch[1];
        successful[5].innerHTML += arr[2].value * arr[0].value + Dispatch[1]
    }
}
