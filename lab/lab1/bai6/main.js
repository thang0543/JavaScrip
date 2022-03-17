var userName = prompt(" nhap ten cua ban")
var poin = prompt("nhap diem cua ban")

console.log(userName)

switch (poin) {
    case "A":
        console.log("Good job")
        break;
    case "B":
        console.log("Pretty good")
        break;
    case "C":
        console.log("Passed")
        break;
    case "D":
        console.log("Not so good")
        break;
    case "F":
        console.log("Failed")
        break;
    default:
        console.log("Diem nhap vao khong hop le")
}