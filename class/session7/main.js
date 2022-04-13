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

var user = {
    name: "thang",
    email: "thangdtph27626@fpt.edu.vn",
    signin: function () {
        alert("sign in")
    },
    signout: function () {
        alert("sign out")
    }

}

// console.log(user.name + ", " + user.email)

// var user_info = document.querySelector(".user-info")
// user_info.innerHTML = `
//     <h2>${user.name}</h2>
//     <p>${user.email}</p>
// `

var userName = document.querySelector("#userName")
var btn = document.querySelector("button")


btn.addEventListener("click",function(event){
    event.preventDefault();
    if(user.name == userName.value ){
       alert("dang nhap thanh cong")
    }else{
        alert("dang nhap that bai")
    }
})
