var numbers = [1, 5, 8, 2, 10, 3, 9]

// var newNumbers =[]

//     for(var i = 0; i < numbers.length; i++){
//         if(numbers[i] %2 ==0){
//             newNumbers.push(numbers[i]);
//         }
//     }

//     function sumArr(){
//         var sum  =0;

//          for(var i = 0; i < newNumbers.length; i++){
//             sum += newNumbers[i];
//          }
//          return sum;
//     }

//     console.log(sumArr())
// var countodd = 0;
// var counteven = 0;


// function showMessage(message) {
//     console.log(message)
//     // return message;
// }

// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 != 0) {
//         countodd++;
//     } else {
//         counteven++;
//     }
// }

// if (countodd == numbers.length) {
//     showMessage("le");
// } else if (counteven == numbers.length) {
//     showMessage("chan");
// } else {
//     showMessage("chan + le");
// }
// console.log(showMessage())

// Tạo 1 mảng tên users để chứa tên tài khoản [sontv, thienth, datlt, minhdq]

// Viết ra 3 hàm thực hiện 3 chức năng sau
// hiển thị ra tất cả user có trong mảng
// thêm mới user vào mảng
// xóa toàn bộ user có trong mảng

var users =  ["sontv", "thienth", "datlt", "minhdq"]

function show(){
    for( var item of users){
        console.log(item)
    }
}

function addUser(){
    var user = prompt("nhap user: ")
    users.push(user)
}

function deleteUsers(){
    users = [];
}
deleteUsers()
show();








var products = [];

function showProduct(){
    for( var item of products){
        console.log(item)
    }
}
function emptyCheck(){
    if(products.length == 0){
        console.log("không có sản phẩm để hiển thị")
    }else{
        showProduct()
    }
}


function addProduct(){
    var product
    do {
         product = prompt("nhap san pham can them: ")
        if(product.length < 5){
            console.log("vui long nhap lai: ")
        }
    } while (product.length  < 5);
    products.push(product)
}
// viết 1 hàm removeProduct để thực hiện việc xóa sản phẩm
function removeProduct(){
  
    var product = prompt("nhap san pham can xoa: ")
    if(products.includes(product)){
        for(var i = 0; i < products.length; i++){
            if(products[i] == product){
                // var index = products.indexOf(products[i])
                products.splice(i,1)
            } 
        }
    }else{
        console.log("không tìm thấy sản phẩm cần xóa")
    }
}


function updateProduct(){
   
    var product = prompt("nhap san pham can them: ")
    if(products.includes(product)){
        for(var i = 0; i < products.length; i++ ){
            if(products[i] == product){
                products.splice(i,0)
                break;
            }
        }
        
    }else{
        console.log("không tìm thấy sản phẩm cần cập nhật")
    }
}

function removeAllProduct(){
    products = [];
    showProduct()
}