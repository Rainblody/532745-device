var formLink = document.querySelector(".write-us-button");

var formPopup = document.querySelector(".modal-1");
var formClose = document.querySelector(".modal-letter-close");
var formLogin = formPopup.querySelector("[name=name]");

var mapLink = document.querySelector(".contacts-map");

var mapPopup = document.querySelector(".modal-2");
var mapClose = document.querySelector(".modal-map-close");
  
formLink.addEventListener("click", function (evt) {
  "use strict";
  evt.preventDefault();
  formPopup.classList.add("modal-letter");
  formLogin.focus();
});

formClose.addEventListener("click", function (evt) {
  "use strict";
  evt.preventDefault();
  formPopup.classList.remove("modal-letter");
});

mapLink.addEventListener("click", function (evt) {
  "use strict";
  evt.preventDefault();
  mapPopup.classList.add("modal-map");
});

mapClose.addEventListener("click", function (evt) {
  "use strict";
  evt.preventDefault();
  mapPopup.classList.remove("modal-map");
});



