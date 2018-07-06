var link = document.querySelector(".login-link");
var popup1 = document.querySelector(".modal-login");
var close = popup1.querySelector(".modal-close");

var form = popup1.querySelector("form");
var login = popup1.querySelector(".login-user");
var password = popup1.querySelector(".login-password");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup1.classList.toggle("visually-hidden");

  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup1.classList.add("visually-hidden");
  popup1.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    popup1.classList.remove("modal-error");
    popup1.offsetWidth = popup1.offsetWidth;
    popup1.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    popup1.classList.add("visually-hidden");
    popup1.classList.remove("modal-error");
  }
});

