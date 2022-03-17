var number = prompt("nhap 1 so duong bat ki")
var sum = 0

if(number < 0){
    console.log("bạn nhap khong phai so duong ")
}else{
    for(var i = 1; i <= number; i++){
        if(i % 3 == 0 && i % 5 ==0 ){
            sum += i;
        }else{
            sum = 0;
        }
    }
    
    console.log(sum)
}