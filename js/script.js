var formLink = document.querySelector(".write-us-button");

var formPopup = document.querySelector(".modal-1");
var formClose = formPopup.querySelector(".modal-close");
var formName = formPopup.querySelector("[name=name]");
var email = formPopup.querySelector("[name=email]");
var form = formPopup.querySelector("[name=letterForm]");
var letter = formPopup.querySelector("[name=letter]");

var mapLink = document.querySelector(".contacts-map");

var mapPopup = document.querySelector(".modal-2");
var mapClose = mapPopup.querySelector(".modal-close");
  
formLink.addEventListener("click", function (evt) {
  
  evt.preventDefault();
  formPopup.classList.add("modal-letter");
  formName.focus();
});

formClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  formPopup.classList.remove("modal-letter");
  formPopup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!formName.value || !email.value || !letter.value) {
    evt.preventDefault();
    formPopup.classList.add("modal-error");
  }
});

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-map");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-map");
});



