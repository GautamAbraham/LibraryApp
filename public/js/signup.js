var email = document.getElementById("inputEmail");
var mob = document.getElementById("mob");
var pass = document.getElementById("inputPassword");
var confpass = document.getElementById("confirmPassword");
var mobfeedback = document.getElementById("mob-feedback");
var emailfeedback = document.getElementById("email-feedback");
var passfeedback = document.getElementById("pass-feedback");
var confpassfeedback = document.getElementById("confirm-pass-feedback");
var mobRegexp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
var emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var strongRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);
var mediumRegex = new RegExp(
  "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})"
);
var weakRegex = new RegExp("^(?=.*[a-z0-9])(?=.{8,})");
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");

      // check match

      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            // mobile script
            if (!mobRegexp.test(mob.value)) {
              form.classList.add("was-validated");
              mobfeedback.innerText = "Invalid mobile number";
              mobfeedback.className = "invalid-feedback";
              mob.className = "form-control is-invalid";
              event.preventDefault();
              event.stopPropagation();
              // console.log("Mob error");
            } else {
              mobfeedback.className = "valid-feedback";
              mobfeedback.innerText = "Looks Good!";
              form.classList.add("was-validated");
              mob.className = "form-control is-valid";
              // console.log("Mob gud");
            }
            // email script
            if (!emailRegexp.test(email.value)) {
              form.classList.add("was-validated");
              emailfeedback.innerText = "Invalid e-mail format";
              emailfeedback.className = "invalid-feedback";
              email.className = "form-control is-invalid";
              event.preventDefault();
              event.stopPropagation();
              // console.log("Email error");
            } else {
              emailfeedback.className = "valid-feedback";
              emailfeedback.innerText = "Looks Good!";
              form.classList.add("was-validated");
              email.className = "form-control is-valid";
              // console.log("Email gud");
            }
            // password script
            if (strongRegex.test(pass.value)) {
              form.classList.add("was-validated");
              passfeedback.className = "valid-feedback";
              passfeedback.style.color = "green";
              passfeedback.innerText = "Strong Password";
              pass.className = "form-control is-valid";
              // console.log("pwoli password");
            } else if (mediumRegex.test(pass.value)) {
              form.classList.add("was-validated");
              passfeedback.innerText = "Medium Password";
              passfeedback.style.color = "orange";
              pass.className = "form-control is-valid";
              // console.log("mmm ok password");
            } else {
              form.classList.add("was-validated");
              confpassfeedback.innerText = "Weak Password";
              confpassfeedback.className = "invalid-feedback";
              confpass.className = "form-control is-invalid";
              event.preventDefault();
              event.stopPropagation();
              // console.log("pass scene");
            }
            // confirm-password script
            if (!confpass.value) {
              form.classList.add("was-validated");
              confpassfeedback.innerText = "Enter password ";
              confpassfeedback.className = "invalid-feedback";
              confpass.className = "form-control is-invalid";
              event.preventDefault();
              event.stopPropagation();
              // console.log("Password illa");
            } else if (pass.value !== confpass.value) {
              form.classList.add("was-validated");
              confpassfeedback.innerText = "Passwords Should Match";
              confpassfeedback.className = "invalid-feedback";
              confpass.className = "form-control is-invalid";
              event.preventDefault();
              event.stopPropagation();
              // console.log("Password mismatch");
            } else {
              form.classList.add("was-validated");
              confpassfeedback.className = "valid-feedback";
              confpass.className = "form-control is-valid";
              confpassfeedback.innerText = "Passwords Match";
              // console.log("Pass match");
            }
            // end
          },
          false
        );
      });
    },
    false
  );
})();
