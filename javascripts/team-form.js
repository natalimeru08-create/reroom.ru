document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("teamForm");

  if (!form) return;

  const nameInput = document.getElementById("name");
  const surnameInput = document.getElementById("surname");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");

  const submitBtn = document.querySelector(".submit-btn");

  let formSubmitted = false;


  phoneInput.addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, "");

    if (value.startsWith("8")) {
      value = "7" + value.slice(1);
    }

    if (!value.startsWith("7")) {
      value = "7" + value;
    }

    value = value.substring(0, 11);

    let result = "+7";

    if (value.length > 1) {
      result += " (" + value.substring(1, 4);
    }

    if (value.length >= 4) {
      result += ")";
    }

    if (value.length > 4) {
      result += " " + value.substring(4, 7);
    }

    if (value.length > 7) {
      result += "-" + value.substring(7, 9);
    }

    if (value.length > 9) {
      result += "-" + value.substring(9, 11);
    }

    e.target.value = result;

    validateForm();
  });

  phoneInput.addEventListener("keydown", function (e) {
    const allowedKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "Tab",
    ];

    if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) {
      e.preventDefault();
    }
  });



  [nameInput, surnameInput, emailInput].forEach((input) => {
    input.addEventListener("input", validateForm);
  });



  function validateForm() {
    let valid = true;

    checkField(nameInput, nameInput.value.trim().length >= 2);

    checkField(surnameInput, surnameInput.value.trim().length >= 2);

    checkField(
      emailInput,
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim()),
    );

    checkField(
      phoneInput,
      /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/.test(phoneInput.value),
    );

    function checkField(input, condition) {
      if (!condition) {
        valid = false;

        if (formSubmitted || input.value.trim().length > 0) {
          setError(input);
        } else {
          removeError(input);
        }
      } else {
        removeError(input);
      }
    }

    submitBtn.disabled = !valid;
  }


  function setError(input) {
    input.parentElement.classList.add("error");
  }

  function removeError(input) {
    input.parentElement.classList.remove("error");
  }


  form.addEventListener("submit", function (e) {
    e.preventDefault();

    formSubmitted = true;

    validateForm();

    if (!submitBtn.disabled) {
      window.location.href = "404.html";
    }
  });


});
