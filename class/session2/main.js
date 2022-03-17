// var poin = 1;

// if(poin < 5 && poin >= 0){
//     console.log("học lực yếu")
// }else if(poin >= 5 && poin < 6.5){
//     console.log("học lực tb")
// }else if(poin >= 6.5 && poin < 8){
//     console.log("học lực tb")
// }else if(poin >= 8 && poin <= 10){
//     console.log("học lực tb")
// }else {
//     console.log("khong hop lệ")
// }

// var height = 3;

// if(height > 10 && height < 15){
//     console.log("chuoi tam duoc")
// }else if(height < 10 && height >=0){
//     console.log("chuoi nho qua k mua")
// }else if(height < 0){
//     console.log("vui long nhap lai")
// }else{
//     console.log("chuoi khung mua ngay")
// }

// var money = 10000;
// var interest = 0
// var sum = 0
// for(var i = 1; i <= 12; i++){
//     interest += ((money * 10)/100)*i;
//     sum = money + interest;
//     console.log("so tien lai thang "+i)
//     console.log(interest)
//     console.log("tong tien  la: "+sum);
// }
//  sum = money + interest;
// console.log("tong tien lai la: "+sum);

// Nhập vào từ bàn phím 1 số bất kỳ 
// Đếm xem có bao nhiêu số chia hết cho 2 tính ào vtừ 1 đến số nhập và hiển thị ra kết quả

// var number = prompt("nhap 1 so bat kì: ")
// var count = 0

// for(var i = 1; i <= number; i++){
//     if(i % 2 ==0){
//         count++
//     }
// }
// console.log(count)

// viết mã javascript cho phép người dùng nhập từ bàn phím vào một giá trị và thông báo cho người dùng
//  biết giá trị vừa nhập có phải là số hay không?
// - Sử dụng hàm isNaN(x) để kiểm tra xem x có phải là số hay không (kết quả True nghĩa là x không phải là số)

// var Input = prompt(" nhap 1 phim bat ki tu ban phim: ")

// if(isNaN(Input)){
//     console.log(" ban nhap la 1 chu")
// }else{
//     console.log(" ban nhap la 1 so")
// }

// viết mã javascript cho phép nhập từ bàn phím vào họ tên sinh viên và một giá trị điểm
// - in ra họ tên sinh viên
// - kiểm tra điểm của sinh viên xem có đủ điều kiện qua môn hay không (điểm A : Good job / B : Pretty good /
//  C : Passed / D : Not so good / F : Failed )
// - nếu điểm nhập vào của sinh viên không thể xác định được thì hiển thị thông báo " điểm không hợp lệ "

// var userName = prompt(" nhap ten cua ban")
// var poin = prompt("nhap diem cua ban")

// console.log(userName)

// switch (poin) {
//     case "A":
//         console.log("Good job")
//         break;
//     case "B":
//         console.log("Pretty good")
//         break;
//     case "C":
//         console.log("Passed")
//         break;
//     case "D":
//         console.log("Not so good")
//         break;
//     case "F":
//         console.log("Failed")
//         break;
//     default:
//         console.log("Diem nhap vao khong hop le")
// }

// Thành dự định mở 1 trang trại nuôi bò sữa. Ban đầu Thành mua 1000 con bò, 
// sau đó trong vòng 2 năm tiếp theo Thành dự định mỗi tháng sẽ mua thêm 15 con bò nữa
// . Tuy nhiên đến tháng thứ 9 của năm đầu tiên Thành bị trộm mất 1 khoản tiền lớn nên 
// không thể tiếp tục đầu tư mua bò nữa nên từ đó trang trại của Thành không tăng thêm con bò nào.

// Hãy viết 1 chương trình bằng javascript để tính số lượng bò mà trang trại của Thành có sau 2 năm.

// Output hiển thị:
// Tổng số lượng bò ban đầu
// Tổng số lượng bò Thành có sau khi mua thêm
// Tổng số lượng bò Thành mua thêm được

// var CountDairyCows = 1000
// var CountMonth = 2*12 + 8;
// var CountDairyCowsLast = 0

// for(var i = 0; i < CountMonth;i++){
//     CountDairyCowsLast +=  15;
// }
// var sum = CountDairyCows + CountDairyCowsLast
// console.log("tong luon bo ban dau la: "+CountDairyCows)
// console.log("tong luon bo thanh mua duoc la: "+CountDairyCowsLast)
// console.log("so luong bo myua duoc la: " + sum)

// Nhập vào từ bàn phím: họ tên, tuổi, mức lương, số tháng đi làm trong năm
// Yêu cầu:
// Tính tổng lương của cả năm
// Nếu số tháng làm việc ít hơn 3 tháng thì được thưởng cuối năm 2000000
// Nếu số tháng làm việc từ 3 - 6 tháng thì được thưởng 6000000
// Nếu số tháng làm việc trên 6 tháng thì được thưởng 12000000

// Output:
// Hiển thị tổng lương của cả năm
// Hiển thị số tiền thưởng dựa vào số tháng nhập vào trong năm
// Hiển thị tổng thu nhập bao gồm cả lương và thưởng

// var userName = prompt("vui long nhap ho ten: ")
// var age = prompt("vui long nhap tuoi: ")
// var wage =  prompt("vui long mức lương: ")
// var moth =  prompt("vui long so thang: ")
// var yearSalary = wage * moth
// var bonus = 0
// var sum = 0

// if(moth < 3 && moth > 0){
//     bonus += 2000000
// }else if(moth >= 3 && moth <= 6){
//     bonus += 6000000
// }else{
//     bonus += 12000000
// }

//  sum  += yearSalary + bonus

// console.log("tong luong cua ca nam la: " + yearSalary)
// console.log("so tien thuong cuoi nam la: " + bonus)
// console.log("tong thu nhap ca nam la: " + sum)

// Nhập vào điểm từ bàn phím:
// điểm lab (trọng số 30%)
// điểm quiz ( trọng số 10%)
// điểm assignment (trọng số 20%)
// điểm thi (trọng số 40%)

// Output:
// Nếu điểm nhập vào nhỏ hơn 0 hoặc lớn hơn 10 thì thông báo "Lỗi nhập điểm"

// hiển thị các đầu điểm
// tính và hiển thị điểm phẩy tổng kết
// Nếu điểm tổng kết dưới 5 phẩy thì hiển thị thông báo "Bạn đã trượt môn "
// Nếu điểm tổng kết trên 5 thì hiển thị thông báo " Bạn đã qua môn "

// var lab = prompt(" điểm lab (trọng số 30%): ")
// var quiz = prompt("điểm quiz ( trọng số 10%): ")
// var assignment = prompt("điểm assignment (trọng số 20%): ")
// var testScore = prompt("điểm thi (trọng số 40%): ")
// var summary = (lab * 0.3) + (quiz * 0.1) + (assignment * 0.2) + (testScore * 0.4)
// var notification;

// if(summary < 5){
//     notification = "bạn đã trượt môn"
// }else{
//     notification = "bạn đã qua môn"
// }
// if((lab < 0 || lab > 10) || (quiz < 0 || quiz >10) || (assignment < 0 || assignment > 10) || (testScore < 0 || testScore > 10) ){
//     console.log("loi nhap diem")
// }else{
//     console.log("diem lab cua ban la: " + lab)
//     console.log("diem quiz cua ban la: " + quiz)
//     console.log("diem assignment cua ban la: " + assignment)
//     console.log("diem thi cua ban la: " + testScore)
//     console.log("tong diem cua ban la: " + summary)
//     console.log(notification)
// }

// Nhập vào 1 số dương bất kỳ từ bàn phím

// Output:
// tính tổng các số vừa chia hết cho 3 vừa chia hết cho 5 và hiển thị ra 
// nếu số nhập vào là số âm thì hiển thị thông báo "Bạn phải nhập số dương"
var number = prompt("nhap 1 so duong bat ki")
var sum = 0

if(number < 0){
    console.log("bạn nhap khong phai so duong ")
}else{
    for(var i = 1; i <= number; i++){
        if(i % 3 == 0 && i % 5 ==0 ){
            sum += i;
            console.log(i)
        }else{
            sum = 0;
        }
    }
    
    console.log(sum)
}