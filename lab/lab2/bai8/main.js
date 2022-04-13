var users =  ["sontv", "thienth", "datlt", "minhdq"]

function show(){
    for( var item of users){
        console.log(item)
    }
}

function addUser(){
    var user = prompt("nhap user: ")
    users.push(user)
}

function deleteUsers(){
    users = [];
}
