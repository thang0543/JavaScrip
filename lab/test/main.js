

var users = [ "tiennh@fpt.edu.vn" , "datlt@fpt.edu.vn"]

function showMessage(message){
   console.log(message)
}

function listUser(){
    if(users.length == 0){
        console.log("không có user để hiển thị")
    }else{
        for(var user of users){
            console.log(user)
        }
    }
}


function addUser(){

    do {
        var newUser = prompt("nhap ten tai khoan")
    } while (newUser.length < 5);
  
    for(var i = 0; i< users.length;i++){
        if(users[i] == newUser){
            console.log("ten nguoi dung da ton tai");
            return false;
        }else{
            users.push(newUser)
            break;
        }
    }
}


function removeUser(){
    var removeUser = prompt("nhap user can xoa: ")
    
    if(users.includes(removeUser)){
        for(var item of users){
            if(item == removeUser){
                var index = users.indexOf(removeUser)
                users.splice(index,1)
              showMessage("xoa thanh cong")
              break;
            }
        }
    }else{
        showMessage("không tìm thấy  khoản cần xóa")
    }
    console.log(users)
}



function updateUser(){
    var updateUser = prompt("nhap user can cap nhat: ")
    
    if(users.includes(updateUser)){
        for(var i = 0; i < users.length; i++){
            if(users[i] == updateUser){
                var setUser = prompt("nhap ten user moi: ")
                users.splice(i,1,setUser)
                showMessage("Cập nhật thành công")
            }
        } 
    }else{
        showMessage("không tìm thấy  khoản cần cập nhật")
    }
    console.log(users)
}

function removeAll(){
    users = [];
    showMessage("Đã xoá hết dữ liệu")
}
