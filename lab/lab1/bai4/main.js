var number = prompt("nhap 1 so bat kì: ")
var count = 0

for(var i = 1; i <= number; i++){
    if(i % 2 ==0){
        count++
    }
}
console.log(count)