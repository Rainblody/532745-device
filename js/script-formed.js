var search = document.querySelector(".search-form");
var searchField = search.querySelector(".search");
var formLink = document.querySelector(".write-us-button");
var formPopup = document.querySelector(".modal-1");
var mapPopup = document.querySelector(".modal-2");
var mapLink = document.querySelector(".contacts-map");

if (formPopup !== null) {
  var formClose = formPopup.querySelector(".modal-close");
  var formName = formPopup.querySelector("[name=name]");
  var email = formPopup.querySelector("[name=email]");
  var form = formPopup.querySelector("[name=letterForm]");
  var letter = formPopup.querySelector("[name=letter]");

  formLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    formPopup.classList.add("modal-letter");
  });

  formClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    formPopup.classList.remove("modal-letter");
    formPopup.classList.remove("modal-error");
  });

  form.addEventListener("submit", function (evt) {
    if (!formName.value || !email.value || !letter.value) {
      evt.preventDefault();
      formPopup.classList.remove("modal-error");
      formPopup.offsetWidth = formPopup.offsetWidth;
      formPopup.classList.add("modal-error");
    }
  });
}

if (mapPopup !== null) {
  var mapClose = mapPopup.querySelector(".modal-close");

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-map");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-map");
  });
}

searchField.addEventListener("focus", function (evt) {
  search.classList.add("bottom-line");
});

searchField.addEventListener("blur", function (evt) {
  search.classList.remove("bottom-line");
});
