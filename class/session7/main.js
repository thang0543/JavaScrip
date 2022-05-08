/*
    phone
        đặt tính(thuộc tính):
            màu sắc
            kích thước
            tên
            ...

            key : value
        hành động - method (phương thức)
*/
/*
var phone = {
    color: "black",
    size: "4 inch",
    branch: "iphone",
    sendMessage: function(){
        alert("hello word")
    },
    phoneCall: function(){
        alert("call")
    }
}


//thêm mới phần tử 
phone.price = 500;
phone.takePicture = function(){
    alert("picture")
}

console.log(phone)

*/

// var user = {
//     name: "thang",
//     email: "thangdtph27626@fpt.edu.vn",
//     signin: function () {
//         alert("sign in")
//     },
//     signout: function () {
//         alert("sign out")
//     }

// }

var users =[
    {
        name: "thang",
        email: "thangdtph27626@fpt.edu.vn",
    },
    {
        name: "thanh",
        email: "thanhdtph87626@fpt.edu.vn",
    }
]
// console.log(user.name + ", " + user.email)

var userName = document.querySelector("#userName")
var email = document.querySelector("#email")
var btn = document.querySelector("button")
var user_info = document.querySelector(".user-info")


btn.addEventListener("click",function(even){
    even.preventDefault()
    for(var user of users){
        if(user.name == userName.value && email.value == user.email){
            user_info.innerHTML = `
            <p>dang nhap thanh cong</p>
     `
        break;
         }else{
             user_info.innerHTML = `
             <p>dang nhap that bai</p>
      `
         }
    }
})

var st = "Shakespeare written \"To be or not to be \" ";

document.write(!isNaN(st));