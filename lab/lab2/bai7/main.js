var carBrand = ["audi", "volvo", "lamborghini", "ferrari", "porsche"]
var carColor = ["red", "black", "white", "orange"]
var carSelected = []

var nameBrand = prompt("nhap ten xe: ")
var colorBrand = prompt("nhap mau xe: ")
var indexName =0;
var indexColor =0;

for(var checkBrand of carBrand){
    if(checkBrand == nameBrand){
        carSelected.push(checkBrand)
        indexName++
        break
    }
}
for(var checkColor of carColor){
    if(checkColor == colorBrand){
        carSelected.push(checkColor)
        indexColor++
        break
    }
}

if(indexName != 0 && indexName!=0){
    console.log(" có xe")
}else{
    console.log("Không có xe")
}


if(carSelected.length == 0){
    console.log("Không có xe")
}else{
    console.log(carSelected)
}