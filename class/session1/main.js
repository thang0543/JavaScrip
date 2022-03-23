
/*
   1: biến là đại lượng sinh ra để chứa dữ liệu 
   cú pháp khai báo biến: 
        +var tenBien = giaTri
        Quy tắc đặt tên biến :
            - phải có ý nghĩa
            - tên biến không bắt đầu bằng số 
            -camelCase or _
            -tên biến không trùng với từ khóa 
    2: toán tử và biểu thức
        Biểu thức toán học:
            +toán tử,: các phép tính 
            +toán hạng: là các giá trị tham gia vào biểu thức 
            các kiểu toán tủw phổ biến:
                +toán tử số học: + - * / % ++ --
                +toán tử gán: = += -= /= *= %=
                +toán tử so sánh: > == < >= <= !=
                +toán tử logic: && || !
    3: câu lệnh rẽ nhánh
        + if else
            if
            if else
            if else if 
        + switch case 
            switch(biến){
                case 1:
                     câu lệnh thực thi
                    break;
                default:
                     câu lệnh thực thi
            }
    4: vòng lặp
        +for
            for(var [biến chạy]; điều kiện; bước nhảy){
                khối lệnh
            }
            for(var tenbien of tenmang){
                khối lệnh
            }
        +while
            var [biến chạy]
            while(điều kiện){
                
                 bước nhảy
            }
        +do while
             var [biến chạy]
            do{

            }while(điều kiện)
    5: function-hàm
            -dong goi du lieu va tai su dung nhieu lan
            c1: funcyion sum(){--cau lenh thuc thi--}
            c2: var showMessage = function(){--cau lenh thuc thi--}
            -ham khong co tham so va khong co gia tri tra ve
            -ham khong co tham so và co gia tri gia ve 
            -ham co tham so va khonmg co gia tri tra ve
            -ham co tham so va  co gia tri tra ve
    6: mảng-Array
        1:var tenMang = new Array();
        2:var tenmang = [];
    7: object


*/
// var height = 10;
// var userName = "Hello word"
// console.log(height);
// console.log(userName);

var products = ["iphone", "samsung"];
//them du lieu vao cuoi mang
products.push("oppo");
//them du lieu vao dau mang
products.unshift("oppo")
// xoa du lieu cuoi mang
products.pop()
//xoa du lieu dau mang
products.shift()
// xoa vi tri bat ki 
products.splice(1,1,"oppo","..")
//              (vị trí bắt đầu, xóa số phần tử, thêm mới phần tư vào vi trí)

console.log(products)

function sum(){
    var sum = 0
    /// arguments tat ca tham so nhap vao 
    for(var i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum
}

console.log(sum(5,4,3,3))