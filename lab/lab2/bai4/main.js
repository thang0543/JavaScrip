
var index = prompt("nmhap so [phan tu cua mang: ")
var number =[index]

for( var i =0; i< index; i++){
    number[i] = prompt("nhap gia tri: ")
}
for(var n of number){
   if(n % 2 != 0 ){
        count++;
        break;
   }
}

if(count == 0){
    console.log("yes")
}else{
    console.log("no")
}