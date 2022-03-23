var arr = document.getElementsByTagName('input')
var regExp = /^[A-Za-z][\w$.]+@[\w]+\.\w+$/;
// var username = arr[0].value;
var id = arr[1].value;
var email = arr[2].value;
var male = arr[3].checked
var female = arr[4].checked
var check1 = arr[5].checked
var check2 = arr[6].checked
var check3 = arr[7].checked
var check4 = arr[10].value

var username = document.getElementById("username");
var usernameValue = username.value.trim();


function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;
  formControl.className = "form-control error";
}
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
function hi() {
  
  if (usernameValue === " ") {
    //show and add error class
    setErrorFor(username, "Username cannot be blank");
  } else {
    //add success class
    setSuccessFor(username);
  }

  if (regExp.test(email)){}
  else
    {console.log('email không hợp lệ!');
    setErrorFor(email, 'Not a valid email');
}

  if (!male && !female) {
   
  }else{
    console.log('vui long chon gioi tinh!');

  }
  if (!check1 || !check2 || !check3) {

  }else{
    console.log('vui long chon so thich!');

  }
  // if (check4.length< 200){
  //   ////////////////////////////
  // }
}