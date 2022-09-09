/*
	"Meet friends" personal project
*/
if (typeof(Storage) !== "undefined") {
  if (localStorage.getItem("lang") == "en") {
    document.getElementById("lang-switch").checked = true;
  } else {
    document.getElementById("lang-switch").checked = false;
  }
}

$('#lang-switch').change(function () {
    var lang = document.getElementById("lang-switch").checked;
    switch (lang) {
        case true:
            $('[lang]').hide();
            $('[lang="en"]').show();
            if (typeof(Storage) !== "undefined") {
              localStorage.setItem("lang", "en");
            };
        break;
        case false:
            $('[lang]').hide();
            $('[lang="ru"]').show();
            if (typeof(Storage) !== "undefined") {
              localStorage.setItem("lang", "ru");
            };
        break;
        default:
            $('[lang]').hide();
            $('[lang="ru"]').show();
        }});
