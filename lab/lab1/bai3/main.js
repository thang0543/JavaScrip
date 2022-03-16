var money = 10000;
var interest = 0
var sum = 0
for(var i = 1; i <= 12; i++){
    interest += ((money * 10)/100)*i;
    sum = money + interest;
    console.log("so tien lai thang "+i)
    console.log(interest)
    console.log("tong tien  la: "+sum);
}
 sum = money + interest;
console.log("tong tien lai la: "+sum);