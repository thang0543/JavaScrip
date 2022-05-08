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
var idUser = document.querySelector("#idUser")
var nameUser = document.querySelector("#nameUser")
var emailUser = document.querySelector("#emailUser")
var PasswordUser = document.querySelector("#PasswordUser")
var btnAdd = document.querySelector(".btnAdd")
var btnSave = document.querySelector(".btnSave")
var btnAdd = document.querySelector(".btnAdd")


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
             <td><button onclick="showInfoUser(${item.id})"> cập nhật</button></td>
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
            var itemIndex = users.indexOf(index);
            users.splice(itemIndex, 1);
            showUser();
        }
    }
}


function showAddUser() {
    addNewUser.style.display = "block"

}
function AddUser() {

    var flag = true;
    
    for (var index of users) {
        if (index.email == emailUser.value) {
            flag = false;
           
        }
      
    }

    var user = {id: users.length+1, name: nameUser.value, email: emailUser.value, password: PasswordUser.value}
    if (flag == false ) {
        erro.innerHTML += "email đã tồn tai"
    } else if(flag == true ){
        users.push(user);
    }
    showUser();
    setForm()
}

function showInfoUser(id){
    btnSave.style.display = "block"
    btnAdd.style.display = "none"
    addNewUser.style.display = "block"
    for(var index of users){
        if(index.id == id){
         idUser.value = index.id
         nameUser.value = index.name
         PasswordUser.value = index.password
         emailUser.value = index.email
         break;
        }
        
    }
    
   
}

function updateUser(){
        for(var index of users){
            if(index.id == idUser.value){
             index.name = nameUser.value
             index.password = PasswordUser.value
             index.email = emailUser.value
             break;
            }
            
        }
    
    showUser()
    setForm()
}

function setForm(){
    btnSave.style.display = "none"
    btnAdd.style.display = "block"
    addNewUser.style.display = "none"
    nameUser.value = ""
    PasswordUser.value = ""
    emailUser.value = ""
}