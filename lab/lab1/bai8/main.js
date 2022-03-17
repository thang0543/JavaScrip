var userName = prompt("vui long nhap ho ten: ")
var age = prompt("vui long nhap tuoi: ")
var wage =  prompt("vui long mức lương: ")
var moth =  prompt("vui long so thang: ")
var yearSalary = wage * moth
var bonus = 0
var sum = 0

if(moth < 3 && moth > 0){
    bonus += 2000000
}else if(moth >= 3 && moth <= 6){
    bonus += 6000000
}else{
    bonus += 12000000
}

 sum  += yearSalary + bonus

console.log("tong luong cua ca nam la: " + yearSalary)
console.log("so tien thuong cuoi nam la: " + bonus)
console.log("tong thu nhap ca nam la: " + sum)