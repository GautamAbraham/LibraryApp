let fname = document.getElementById("firstname");
let lname = document.getElementById("lastname");

let numm = document.getElementById("ph");

let belowfname = document.getElementById("f1");
let belowlname = document.getElementById("l1");

let email = document.getElementById("inputEmail4");
let pwd = document.getElementById("inputPassword4");
let pwd2 = document.getElementById("inputPassword5");

let phno = document.getElementById("phone");
let belowpwd = document.getElementById("err");
let belowpwd2 = document.getElementById("err2");

var phonecheck = false;
var fcheck = false;
var lcheck = false;

var pacheck = false;
var pavali = false;

function validate() {
	if (email.value.trim() == "") {
		alert("Field cannot be empty");
		return false;
	} else if (pwd.value.trim() == "") {
		alert("Field cannot be empty");
		return false;
	} else {
		return true;
	}
}

function fnamevali() {
	if (fname.value.trim() == "") {
		belowfname.innerHTML = "First name cannot be empty";
		belowfname.style.color = "red";
		fcheck = false;
		return false;
	} else {
		fcheck = true;
		return true;
	}
}

function lnamevali() {
	if (lname.value.trim() == "") {
		belowlname.innerHTML = "Last name cannot be empty";
		belowlname.style.color = "red";
		lcheck = false;
		return false;
	} else {
		lcheck = true;
		return true;
	}
}

function phonenumber() {
	var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
	if (phno.value.match(phoneno)) {
		numm.innerHTML = "Valid number";
		numm.style.color = "green";
		phonecheck = true;
		return true;
	} else {
		numm.innerHTML = "Invalid number";
		numm.style.color = "red";
		phonecheck = false;
		return false;
	}
}

function passvali() {
	var passexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$/;
	if (passexp.test(pwd.value)) {
		err.innerHTML = "Valid Password";
		err.style.color = "green";
		pavali = true;
		return true;
	} else {
		err.innerHTML = "Weak Password";
		err.style.color = "red";
		pavali = false;
		return false;
	}
}

function passcheck() {
	if (pwd.value == pwd2.value) {
		belowpwd2.innerHTML = "Password Matches";
		belowpwd2.style.color = "green";
		pacheck = true;
	} else {
		pacheck = false;
		belowpwd2.innerHTML = "Password doesn't match";
		belowpwd2.style.color = "red";
	}
}

function fvali() {
	if ((lcheck && fcheck && phonecheck && pavali) == true) {
		return true;
	} else {
		return false;
	}
}
