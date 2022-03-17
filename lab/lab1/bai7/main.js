var CountDairyCows = 1000
var CountMonth = 2*12 + 8;
var CountDairyCowsLast = 0

for(var i = 0; i < CountMonth;i++){
    CountDairyCowsLast +=  15;
}
var sum = CountDairyCows + CountDairyCowsLast
console.log("tong luon bo ban dau la: "+CountDairyCows)
console.log("tong luon bo thanh mua duoc la: "+CountDairyCowsLast)
console.log("so luong bo myua duoc la: " + sum)