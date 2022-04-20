products = [
    {
        id: 1,
        name: "iPhone 13 Pro Max",
        image: "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg",
        price: 400,
        status: true,
        quantity: 1,
        description: "iPhone 13 Pro Max 128 GB - siêu phẩm được mong chờ nhất ở nửa cuối năm 2021 đến từ Apple. Máy có thiết kế không mấy đột phá khi so với người tiền nhiệm, bên trong đây vẫn là một sản phẩm có màn hình siêu đẹp, tần số quét được nâng cấp lên 120 Hz mượt mà, cảm biến camera có kích thước lớn hơn, cùng hiệu năng mạnh mẽ với sức mạnh đến từ Apple A15 Bionic, sẵn sàng cùng bạn chinh phục mọi thử thách."
    },
    {
        id: 2,
        name: "Xiaomi Mi 11 Lite",
        image: "https://cdn.tgdd.vn/Products/Images/42/233241/xiaomi-mi-11-lite-4g-black-1-200x200.jpg",
        price: 300,
        status: true,
        quantity: 1,
        description: "Xiaomi 11 Lite 5G NE một phiên bản có ngoại hình rất giống với Mi 11 Lite được ra mắt trước đây. Chiếc smartphone này của Xiaomi mang trong mình một hiệu năng ổn định, thiết kế sang trọng và màn hình lớn đáp ứng tốt các tác vụ hằng ngày của bạn một cách dễ dàng."
    },
    {
        id: 3,
        name: "Samsung Galaxy S21",
        image: "https://cdn.tgdd.vn/Products/Images/42/226316/samsung-galaxy-s21-ultra-bac-600x600-1-200x200.jpg",
        price: 300,
        status: true,
        quantity: 1,
        description: "Sự đẳng cấp được Samsung gửi gắm thông qua chiếc smartphone Galaxy S21 Ultra 5G với hàng loạt sự nâng cấp và cải tiến không chỉ ngoại hình bên ngoài mà còn sức mạnh bên trong, hứa hẹn đáp ứng trọn vẹn nhu cầu ngày càng cao của người dùng."
    }
]


var tbody = document.querySelector("tbody")
var detailProductName = document.querySelector(".detail-product")
var productId = document.querySelector("#productId")
var productName = document.querySelector("#productName")
var productImg = document.querySelector("#productImg")
var productPrice = document.querySelector("#productPrice")
var productQuantity = document.querySelector("#productQuantity")
var productStatus = document.querySelector("#status")
var productDesc = document.querySelector("#productDesc")
var btnAdd = document.querySelector("#btn_add")
var btnUpdate = document.querySelector("#btn_update")
var header = document.querySelector("h1")

// hien thi product
function showproduct() {
    tbody.innerHTML = products.map(function (item) {
        return `
             <tr>
                <td>${item.name}</td>
                <td><img src="${item.image}" alt=""></td>
                <td>${item.price}</td>
                <td>${item.status ? "còn hàng" : "hết hàng"}</td>
                <td>${item.quantity}</td>
                <td><button  onclick="detailProduct(${item.id})"> chi tiet </button></td>
                <td><button  onclick="deleteProduct(${item.id})"> detele </button></td>
                <td><button  onclick="showInfoProduct(${item.id})"> update </button></td>
            </tr>
        `
    }).join("");
}

showproduct();

// hiển thị chi tiết sản phẩm 
function detailProduct(id) {

    for (var item of products) {
        if (item.id == id) {
            detailProductName.innerHTML = `
            <img src="${item.image}" alt="">
            <h2 class = "productName">${item.name}</h2>
            <p class="productPrice">${item.price}</p>
            <p class="productStatus">${item.status ? "còn hàng" : "hết hàng"}</p>
            <p class="productQuantity">${item.quantity}</p>
            <p class="productDesc">${item.description}</p>
            `
        }
    }
}

// thêm mới sản phẩm
function addNewProduct(e) {

    checkForm()
    e.preventDefault()
    var newProduct = {
        id: products.length + 1,
        name: productName.value,
        image: productImg.value,
        price: productPrice.value,
        status: productStatus.value == 0 ? true : false,
        quantity: productQuantity.value,
        description: productDesc.value
    }
    var choose = true;
    for (var index of products) {
        if (index.name == productName.value) {
            choose = false;
        }
    }
    if (choose == true && checkForm()) {
        alert("them thanh cong")
        products.push(newProduct);
        setForm();
    } else if (choose == false && checkForm()) {
        alert("san pham da ton tai")
    }

    showproduct();

}

btnAdd.addEventListener("click", addNewProduct)

// xóa sản phẩm
function deleteProduct(id) {
    for (var item of products) {
        if (item.id == id) {
            var itemIndex = products.indexOf(item);
            products.splice(itemIndex, 1)
        }
    }
    showproduct();
}

// hiển thị thông tin cần nhập cập lên form
function showInfoProduct(id) {
    header.innerHTML = "update product"
    btnAdd.style.display = "none"
    btnUpdate.style.display = "block"

    for (var item of products) {
        if (item.id == id) {
            productId.value = item.id
            productName.value = item.name
            productImg.value = item.image
            productPrice.value = item.price
            productStatus.value = item.status ? 0 : 1
            productQuantity.value = item.quantity
            productDesc.value = item.description
        }
    }

}

// update product
function updateProduct(e) {
    e.preventDefault()
    if (checkForm() == true) {
        for (var item of products) {
            if (item.id == productId.value) {
                    item.name = productName.value,
                    item.image = productImg.value,
                    item.price = productPrice.value,
                    item.status = productStatus.value == 0 ? true : false,
                    item.quantity = productQuantity.value,
                    item.description = productDesc.value
            }
        }
        showproduct()
        setForm()
    }
}
btnUpdate.addEventListener("click", updateProduct)

// trả form về mặc định
function setForm() {
    header.innerHTML = "thêm mới Use"
    btnAdd.style.display = "block"
    btnUpdate.style.display = "none"
    productId.value = ""
    productName.value = ""
    productImg.value = ""
    productPrice.value = ""
    productStatus.value = 0
    productQuantity.value = ""
    productDesc.value = ""
}

// kiểm tra ngoại lệ form
function checkForm() {
    if (productName.value.trim() == "") {
        alert("vui long nhap ten san pham")
        return false;
    }
    if (productImg.value.trim() == "") {
        alert("vui long nhap link hinh anh")
        return false;
    }

    if (productPrice.value.trim() == "") {
        alert("vui long nhap gia tien ")
        return false;
    } else if (isNaN(productPrice.value)) {
        alert("vui long nhap so cho gia tien  ")
        return false;
    }else if(productPrice.value < 0){
        console.log(productPrice.value)
        alert("vui long nhap  gia lon hon 0")
        return false;
    }

    if (productQuantity.value.trim() == "") {
        alert("vui long nhap so luong")
        return false;
    } else if (isNaN(productQuantity.value) ) {
        alert("vui long nhap so cho so luong va lon hơn 0")
        return false;
    }else if(isNaN(productQuantity.value) < 0){
        alert("vui long nhap so luong lon hon 0")
        return false;
    }
    return true;
}