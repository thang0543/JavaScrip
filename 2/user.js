users = [
    {
        id: 1,
        name: "sontv",
        email: "sontv@gmail.com",
        password: "123456"
    },
    {
        id: 2,
        name: "thienth",
        email: "thienth@gmail.com",
        password: "123456"
    },
    {
        id: 3,
        name: "dallt",
        email: "dallt@gmail.com",
        password: "123456"
    }
]

var tbody = document.querySelector("tbody")
var infoUser = document.querySelector(".info")
var addNewUser = document.querySelector(".addNewUser")
var update = document.querySelector(".updateNewUser")
var nameUser = document.querySelector("#nameUser")
var emailUser = document.querySelector("#emailUser")
var PasswordUser = document.querySelector("#PasswordUser")
var nameUser1 = document.querySelector("#nameUser1")
var emailUser1 = document.querySelector("#emailUser1")
var PasswordUser1 = document.querySelector("#PasswordUser1")
var erro = document.querySelector(".erro")

console.log(erro)


function showUser() {
    tbody.innerHTML = users.map(function (item) {

        return `
        <tr>
             <td>${item.name}</td>
             <td>${item.email}</td>
             <td>${item.password}</td>
             <td><button onclick="info(${item.id})">chi tiết</button></td>
             <td><button onclick="deleteUser(${item.id})">delete</button></td>
             <td><button onclick="updateUser(${item.id})"> cập nhật</button></td>
         </tr>
        `
    }).join("")
}
showUser();


function info(id) {

    for (var index of users) {

        if (index.id == id) {
            infoUser.innerHTML = `
        <p>${index.name}</p>
        <p>${index.email}</p>
        <p>${index.password}</p>
   `

        }
    }

}

function deleteUser(id) {
    for (var index of users) {

        if (index.id == id) {
            users.splice(id, 1);
            showUser();
        }
    }
}


function showAddUser() {
    addNewUser.style.display = "block"

}
function AddUser() {
    var flag = true;
    var count = 0;
    
    for (var index of users) {
        if (index.email == emailUser.value) {
            flag = false;
           
        }
        count++;
    }

    var user = {id: count + 1, name: nameUser.value, email: emailUser.value, password: PasswordUser.value}
    if (flag == false) {
        erro.innerHTML += "email đã tồn tai"
    } else {
        users.push(user);
    }
    showUser();
}

function updateUser(id){
    update.style.display ="block"
    for(var index of users){
        if(index.id == id){
         index.name = nameUser1.value
         index.password = PasswordUser1.value
         index.email = emailUser1.value
         break;
        }
        
    }
    showUser()
   
}

