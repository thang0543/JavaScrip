var lab = prompt(" điểm lab (trọng số 30%): ")
var quiz = prompt("điểm quiz ( trọng số 10%): ")
var assignment = prompt("điểm assignment (trọng số 20%): ")
var testScore = prompt("điểm thi (trọng số 40%): ")
var summary = (lab * 0.3) + (quiz * 0.1) + (assignment * 0.2) + (testScore * 0.4)
var notification;

if(summary < 5){
    notification = "bạn đã trượt môn"
}else{
    notification = "bạn đã qua môn"
}
if((lab < 0 || lab > 10) || (quiz < 0 || quiz >10) || (assignment < 0 || assignment > 10) || (testScore < 0 || testScore > 10) ){
    console.log("loi nhap diem")
}else{
    console.log("diem lab cua ban la: " + lab)
    console.log("diem quiz cua ban la: " + quiz)
    console.log("diem assignment cua ban la: " + assignment)
    console.log("diem thi cua ban la: " + testScore)
    console.log("tong diem cua ban la: " + summary)
    console.log(notification)
}
