var feedback = document.querySelector(".feedback-button");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");
var overlay = document.querySelector(".modal-overlay");

var form = popup.querySelector("form");
var name = popup.querySelector(".user-name");
var mail = popup.querySelector(".user-email");
var text = popup.querySelector(".user-request");

feedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("visually-hidden");
  overlay.classList.remove("visually-hidden");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("visually-hidden");
  popup.classList.remove("modal-error");
  overlay.classList.add("visually-hidden");
});

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("visually-hidden");
  popup.classList.remove("modal-error");
  overlay.classList.add("visually-hidden");
});

form.addEventListener("submit", function (evt) {
  if (!name.value || !mail.value||!text.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    popup.classList.add("visually-hidden");
    popup.classList.remove("modal-error");
    overlay.classList.add("visually-hidden");
  }
});

var mapLink = document.querySelector(".map-toggle");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("visually-hidden");
  overlay.classList.remove("visually-hidden");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("visually-hidden");
  overlay.classList.add("visually-hidden");
});
overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("visually-hidden");
  overlay.classList.add("visually-hidden");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
      mapPopup.classList.add("visually-hidden");
    overlay.classList.add("visually-hidden");

  }
});
