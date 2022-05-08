var userName = document.querySelector("#userName")
var Userpassword = document.querySelector("#password")
var re_password = document.querySelector("#re_password")
var email = document.querySelector("#email")
var statusUser = document.querySelector("#status")
var btn = document.querySelector("#btn")
var erro = document.querySelectorAll(".erro")
var tbody = document.querySelector("tbody")

function checkform() {
    var count = 0
    if (userName.value.trim() == "") {
        erro[0].innerHTML = " vui long nhap ten"
        count++;
    }
    if (Userpassword.value.trim() == "") {
        erro[1].innerHTML = " vui long nhap password"
        count++;
    }
    if (re_password.value.trim() == "") {
        erro[2].innerHTML = " vui long nhap lai password"
        count++;
    } else if (re_password.value != Userpassword.value) {
        erro[2].innerHTML = " password khong trùng khop"
        count++;
    } else if (re_password.value == Userpassword.value) {
        erro[2].innerHTML = ""
    }
    if (email.value.trim() == "") {
        erro[3].innerHTML = " vui long nhap email"
        count++;
    }
    if (count == 0) {
        return true
    } else {
        return false
    }
}
var users = [

    {
        name: "",
        password: "",
        rePassword: "",
        email: "",
        status: ""
    }
]

function showuser() {
    tbody.innerHTML = users.map(function (item) {
        return `
     <tr>
          <td>${item.name}</td>
           <td>${item.password}</td>
            <td>${item.rePassword}</td>
             <td>${item.email}</td>
           <td>${item.status}</td>
           <td><button onclick="deleteuser(${item.email})">xóa</button></td>
    </tr>
    `
    }).join("")
}
showuser();

function addUser(e) {
    e.preventDefault()
    checkform();
    var check = true
    var user = {
        name: userName.value,
        password: Userpassword.value,
        rePassword: re_password.value,
        email: email.value,
        status: statusUser.value == 0 ? "co" : "khong"
    }
    
    for (var index of users) {
        if (index.email == email.value) {
            check = false
        }
    }

    if (check == true && checkform()) {
        users.push(user)
    } else if (check == false && checkform()) {
        alert("user da ton tai")
    }
  
    showuser()
}
btn.addEventListener("click", addUser)

function deleteuser(email) {
    if (confirm("bạn có muốn xóa") == true) {
        for (var index of users) {
            if (index.email == email) {
                var i = users.indexOf(index)
                users.splice(i, 1)
                break
            }
        }
    }else{
        
    }
    showuser()
}