

var users =[]
for(var  i = 0; i < 3;i++){
    var user = prompt("nhap ten nguoi dung: ")
    users.push(user);
 }
 console.log(users)

 users.push("huynh")
 for(var  i = 0; i < users.length;i++){
    if(users[i] == "sontv"){
        users.splice(i,1,"tiennh")
    }
 }

for(var  i = 0; i < users.length;i++){
    if(users[i] == "thienth"){
        users.splice(i,1)
    }
 }


console.log(users)


// var users = ["sontv", "datlt", "thienth"]

// for(var name of users){
//     console.log(name)
// }

// users.push("huynh")
// users.splice(0,1,"tiennh")
// users.splice(2,1)

// for(var name of users){
//     console.log(name)
// }