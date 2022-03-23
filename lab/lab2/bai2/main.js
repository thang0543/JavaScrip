var users =new Array("sontv8", "datlt34", "thienth", "tiennh21", "minhdq8")

var name = prompt("nhap ten: ")

var count =0
for(var n of users){
    if(name == n){
        count++;
        break;
    }
}

if (count == 0) {
    console.log("tài khoản bạn vừa nhập không tồn tại")
}else{
    console.log("tài khoản đăng nhập")
}

if(users.includes(name)){
    console.log("tài khoản đăng nhập")
}else{
    console.log("tài khoản bạn vừa nhập không tồn tại")
}
users.push("dungna")
console.log(users)