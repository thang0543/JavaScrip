var integer = [ 1, 4, 5, 7, 22, 15, 9, 8]
var evenData =[]
var index =0;

for(var n of integer){
    if(n%2==0){
        evenData.push(n)
        index++
    }
}
console.log(evenData)