// console.log(document)
// // lay phan tu theo id
// var title = document.getElementById("helloWord")

// // lay phan tu theo class
// var subTitle = document.getElementsByClassName("helloWord2");
// console.log(subTitle)
// // HTMLCollection [so phan tu co chung class]

// // tim phan tu theo the
// var h2Element = document.getElementsByTagName("h2")
// console.log(h2Element)
// // HTMLCollection [tat ca the h2]
// // lấy 1 phần tử                      tuong tu css
// var titleQuery = document.querySelector("#helloWord")
// // tất cả các phần tử
// var titleQuery2 = document.querySelectorAll(".helloWord")

// console.log(titleQuery)

// tim kiem tat ca ca phan tu chua class box
var boxClass = document.querySelectorAll(".box")
console.log(boxClass.innerHTML)

// tim kiem tat ca ca phan tu chua id box
var boxID = document.querySelectorAll("#box")
console.log(boxID)

// tim kiem tat ca ca phan tu  class box trong class news 
// c1
var box = document.querySelector(".news")
var box1 = box.querySelector(".box")
console.log(box1.innerHTML)

box1.innerHTML = "hello"

console.log(box1.classList)


// c2 

var box2 =  document.querySelector(".news .box")
console.log(box2)

