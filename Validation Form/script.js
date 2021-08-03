const form = document.getElementById('form');
const userName = document.getElementById('user-name');
const email = document.getElementById('e-mail');
const pass1 = document.getElementById('pass1');
const pass2 = document.getElementById('pass2');

form.addEventListener('submit', (e) => {

  e.preventDefault();

  chickInputs()
})

function chickInputs (){

  // Get Inputs Value
  userNameValue = userName.value.trim();
  emailValue = email.value.trim();
  pass1Value = pass1.value.trim();
  pass2Value = pass2.value.trim();

  if (userNameValue === ""){
    //Add Error class
    setErrorFor(userName, "Username can not be Blank")
  }else{
    //Add Success Class
    setSuccessFor(userName)
  }

  if (emailValue === ""){

    setErrorFor(email, "E-Mail can not be Blank")
  }else if (!isEmail(emailValue)){
    setErrorFor(email, "Not a Valid E-Mail")
  }else{
    setSuccessFor(email)
  }

  if(pass1Value === '') {
		setErrorFor(pass1, 'Password cannot be blank');
	} else {
		setSuccessFor(pass1);
	}

  if(pass2Value === '') {
		setErrorFor(pass2, 'Password2 cannot be blank');
	} else if(pass1Value !== pass2Value) {
		setErrorFor(pass2, 'Passwords does not match');
	} else{
		setSuccessFor(pass2);
	}
}

function setErrorFor(input, message){

  const formControl = input.parentElement;
  const spann = formControl.querySelector("span");

  //Add Error Message
  spann.innerText = message;

  //Add Error Class
  formControl.className = "form-control error"
}

function setSuccessFor(input){

  const formControl = input.parentElement;

  //Add Success Message
  formControl.className = "form-control success";
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

//

const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const darkModeBtn = document.getElementById('dark-mode');
window.addEventListener("onload", () =>{

  sun.style.display = "inline";
})
