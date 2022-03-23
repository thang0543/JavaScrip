// Bài 1:
// Khai báo 1 mảng username gồm 7 tên tài khoản 
// Hiển thị toàn bộ tên tài khoản 
// Thêm mới tài khoản "sontv8" vào
// Xóa đi phần tử đầu tiên
// Xóa đi phần tử cuối cùng
// Xóa đi phần tử có vị trí index = 4

// var userName =["nam","tung","son","phuong","hang","lam","hong"]



// userName.push("sontv8")

// userName.shift()

// userName.pop()

// userName.splice(4,1)

// for(var name of userName){
//     console.log(name)
// }

// Bài 2:
// Khai báo 1 mảng users bao gồm các phần tử sau
// sontv8
// datlt34
// thienth
// tiennh21
// minhdq8
// Yêu cầu:
// nhập vào tên users từ bàn phím
// kiểm tra xem users có tồn tại trong mảng hay không
// nếu user có tồn tại thì hiển thị : tài khoản đăng nhập: [tên tài khoản vừa nhập]
// nếu user không tồn tại thì hiển thị: tài khoản bạn vừa nhập không tồn tại
// thêm mới user dungna vào trong mảng rồi hiển thị ra toàn bộ tên user trong mảng

// var users =new Array("sontv8", "datlt34", "thienth", "tiennh21", "minhdq8")

// var name = prompt("nhap ten: ")

// var count =0
// for(var n of users){
//     if(name == n){
//         count++;
//         break;
//     }
// }

// if (count == 0) {
//     console.log("tài khoản bạn vừa nhập không tồn tại")
// }else{
//     console.log("tài khoản đăng nhập")
// }

// if(users.includes(name)){
//     console.log("tài khoản đăng nhập")
// }else{
//     console.log("tài khoản bạn vừa nhập không tồn tại")
// }
// users.push("dungna")
// console.log(users)

// Bài 3:
// Tạo 1 mảng numbers (mảng ban đầu là mảng rỗng)
// Sử dụng vòng lặp để thêm 5  số vào mảng (số nhập vào từ bàn phím)
// Hiển thị ra giá trị của mảng

// var number =[]

// for( var i =0; i< 5; i++){
//     number[i] = prompt("nhap gia tri: ")
// }
// for(var n of number){
//     console.log(n)
// }

// Bài 4:
// Tạo 1 mảng số nguyên
// Viết chương trình thực hiện yêu cầu sau
// Nếu tất cả các phần từ của mảng là số chẵn thì in ra "Yes" 
// Nếu không in ra "No"

// var index = prompt("nmhap so [phan tu cua mang: ")
// var number =[index]

// for( var i =0; i< index; i++){
//     number[i] = prompt("nhap gia tri: ")
// }
// for(var n of number){
//    if(n % 2 != 0 ){
//         count++;
//         break;
//    }
// }

// if(count == 0){
//     console.log("yes")
// }else{
//     console.log("no")
// }

// Bài 5:
// Cho 1 mảng số nguyên gồm các phần tử [ 1, 4, 5, 7, 22, 15, 9, 8]
// Tạo 1 mảng mới có tên evenData

// Yêu cầu:
// Lấy ra tất cả các số chẵn trong mảng bên trên đưa vào trong mảng evenData

// var integer = [ 1, 4, 5, 7, 22, 15, 9, 8]
// var evenData =[]
// var index =0;

// for(var n of integer){
//     if(n%2==0){
//         evenData.push(n)
//         index++
//     }
// }
// console.log(evenData)

// Bài 6:
// Khai báo 1 mảng users;
// Nhập vào 3 user từ bàn phím (sontv, datlt, thienth)
// Hiển thị ra các user vừa nhập
// Thêm mới user huynh vào mảng users
// Sửa user sontv thành tiennh
// Xóa user thienth
// Hiển thị lại danh sách user còn lại trong mảng sau khi đã thực hiện các thao tác trên

// var users = ["sontv", "datlt", "thienth"]

// for(var name of users){
//     console.log(name)
// }

// users.push("huynh")
// users.splice(0,1,"tiennh")
// users.splice(2,1)

// for(var name of users){
//     console.log(name)
// }

// Bài 7:
// Khai báo 1 mảng carBrand bao gồm 5 thương hiệu sau: audi, volvo, lamborghini, ferrari, porsche
// Khai báo 1 mảng carColor bao gồm các màu sắc sau: red, black, white, orange
// Khai báo 1 mảng rỗng carSelected
// Cho phép user nhập vào từ bàn phím tên xe và màu xe, sau đó lấy ra giá trị vừa nhập kiểm tra xem có trong 2 mảng bên trên hay không.
// Nếu có tồn tại thì lấy ra 2 giá trị đó đưa vào trong mảng carSelected rồi log ra dữ liệu
// Nếu không có thì log ra "Không có xe"

// var carBrand = ["audi", "volvo", "lamborghini", "ferrari", "porsche"]
// var carColor = ["red", "black", "white", "orange"]
// var carSelected = []

// var nameBrand = prompt("nhap ten xe: ")
// var colorBrand = prompt("nhap mau xe: ")
// var indexName =0;
// var indexColor =0;

// for(var checkBrand of carBrand){
//     if(checkBrand == nameBrand){
//         carSelected.push(checkBrand)
//         indexName++
//         break
//     }
// }
// for(var checkColor of carColor){
//     if(checkColor == colorBrand){
//         carSelected.push(checkColor)
//         indexColor++
//         break
//     }
// }

// if(indexName != 0 && indexName!=0){
//     console.log(" có xe")
// }else{
//     console.log("Không có xe")
// }


// if(carSelected.length == 0){
//     console.log("Không có xe")
// }else{
//     console.log(carSelected)
// }

var users =[]
for(var  i = 0; i < 3;i++){
    var user = prompt("nhap ten nguoi dung: ")
    users.push(user);
 }
 console.log(users)

 users.push("huynh")
 for(var  i = 0; i < users.length;i++){
    if(users[i] == "sontv"){
        users.splice(i,1,"tiennh")
    }
 }

for(var  i = 0; i < users.length;i++){
    if(users[i] == "thienth"){
        users.splice(i,1)
    }
 }


console.log(users)


