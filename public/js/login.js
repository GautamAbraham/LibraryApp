var emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var emailfeedback = document.getElementById("email-feedback");
var email = document.getElementById("inputEmail");

// Start
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
            // email script
            if (!emailRegexp.test(email.value)) {
              form.classList.add("was-validated");
              emailfeedback.innerText = "Invalid e-mail format";
              emailfeedback.className = "invalid-feedback";
              email.className = "form-control is-invalid";
              event.preventDefault();
              event.stopPropagation();
              //   console.log("Email error");
            } else {
              emailfeedback.className = "valid-feedback";
              emailfeedback.innerText = "Looks Good!";
              form.classList.add("was-validated");
              email.className = "form-control is-valid";
              //   console.log("Email gud");
            }

            //password
            if (strongRegex.test(pass.value) || mediumRegex.test(pass.value)) {
              form.classList.add("was-validated");
              passfeedback.className = "valid-feedback";
              pass.className = "form-control is-valid";
              // console.log("mmm ok password");
            } else {
              form.classList.add("was-validated");
              confpassfeedback.innerText = "Invalid Password";
              confpassfeedback.className = "invalid-feedback";
              confpass.className = "form-control is-invalid";
              event.preventDefault();
              event.stopPropagation();
              // console.log("pass scene");
            }
          },
          false
        );
      });
    },
    false
  );
})();
