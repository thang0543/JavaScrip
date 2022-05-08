var nameTor = document.querySelector("#nameTor")
var idTor = document.querySelector("#idTor")
var donVi = document.querySelector("#donVi")
var male = document.querySelector("#male")
var female = document.querySelector("#female")
var quantityTor = document.querySelector("#quantity")
var erro = document.querySelectorAll(".erro")
var SingUp = document.querySelector("#SingUp")
var tbody = document.querySelector("tbody")

function checkForm() {
    var count = 0;

    if (nameTor.value.trim() == "") {
        erro[0].innerHTML = " vui long nhap ten"
        count++;
    } else if (nameTor.value < 8) {
        erro[0].innerHTML = " vui long nhap ten > 8 kí tự"
        count++;
    }
    if (idTor.value.trim() == "") {
        erro[1].innerHTML = " vui long nhap ma"
        count++;
    } else if (idTor.value < 5) {
        erro[1].innerHTML = " vui long nhap ma > 5 kí tự"
        count++;
    }
    if (!male.checked && !female.checked) {
        erro[3].innerHTML = " vui long chọn giới tính"
        count++;
    }
    if (quantityTor.value.trim() == "") {
        erro[4].innerHTML = " vui long nhap so luong"
        count++;
    } else if (isNaN(quantityTor.value)) {
        erro[4].innerHTML = " vui long nhap so "
        count++
    } else if (quantityTor.value < 0) {
        erro[4].innerHTML = " vui long nhap so duong"
        count++
    }

    if (count == 0) {
        return true
    } else {
        return false
    }
}

var tors = [
    {
        stt: 0,
        name: "",
        id: "",
        supper: "",
        gender: "",
        quantity: ""
    }
]
function showTor() {
    tbody.innerHTML = tors.map(function(index) {
        
        return `
        <tr>
                <td>${index.name}</td>
                <td>${index.id}</td>
                <td>${index.supper}</td>
                <td>${index.gender}</td>
                <td>${index.quantity}</td>
                <td><button onclick="deleteTor(${index.stt})">xóa</button></td>
            </tr>
        `
    }).join("")
}
showTor()

function addTor(e) {
    e.preventDefault()
    checkForm()
    var choose = true;
    var tor = {
        stt: tors.length +1,
        name: nameTor.value,
        id: idTor.value,
        supper: donVi.value,
        gender: male.checked ? "nam" : "nữ",
        quantity: quantityTor.value
    }
    for (var index of tors) {
        if (index.id == idTor.value) {
            choose = false
        }else{
            if(index.name == ""){
                tors.splice(0,1);
            }
        }
    }
    if (choose == true && checkForm()) {
        tors.push(tor)
    } else if (choose == false && checkForm()) {
        alert("id đã tồn tại")
    }
    console.log(tors)
    showTor()
}
SingUp.addEventListener("click", addTor)

function deleteTor(stt) {
    if(confirm("ban co muon xoa khong")){
        for(var index of tors){
            if(index.stt == stt){
                var i = tors.indexOf(index)
                tors.splice(i,1)
                break
            }
            
        }
    }
    showTor()
}

