const container = document.querySelector(".container");
var inputValue = document.querySelector(".input");
const add = document.querySelector(".add");

if (window.localStorage.getItem("watchf") == undefined) {
  var watchf = [];
  window.localStorage.setItem("watchf", JSON.stringify(watchf));
}

var todosEX = window.localStorage.getItem("watchf");
var watchf = JSON.parse(todosEX);

class item {
  constructor(movieName) {
    this.createItem(movieName);
  }
  createItem(movieName) {
    var itemBox = document.createElement("div");
    itemBox.classList.add("item");

    var input = document.createElement("input");
    input.type = "text";
    input.disabled = true;
    input.value = movieName;
    input.classList.add("item_input");

    var edit = document.createElement("button");
    edit.classList.add("edit");
    edit.innerHTML = "EDIT";
    edit.addEventListener("click", () => this.edit(input, movieName));

    var watched = document.createElement("button");
    watched.classList.add("watched");
    watched.innerHTML = "WATCHED";
    watched.addEventListener("click", () => this.watched(itemBox, movieName));

    container.appendChild(itemBox);

    itemBox.appendChild(input);
    itemBox.appendChild(edit);
    itemBox.appendChild(watched);
  }

  edit(input, movieName) {
    if (input.disabled == true) {
      input.disabled = !input.disabled;
    } else {
      input.disabled = !input.disabled;
      let indexof = watchf.indexOf(movieName);
      watchf[indexof] = input.value;
      window.localStorage.setItem("watchf", JSON.stringify(watchf));
    }
  }

  watched(itemBox, movieName) {
    itemBox.parentNode.removeChild(itemBox);
    let index = watchf.indexOf(movieName);
    watchf.splice(index, 1);
    window.localStorage.setItem("watchf", JSON.stringify(watchf));
  }
}

add.addEventListener("click", check);
window.addEventListener("keydown", (e) => {
  if (e.which == 13) {
    check();
  }
});

function check() {
  if (inputValue.value != "") {
    new item(inputValue.value);
    watchf.push(inputValue.value);
    window.localStorage.setItem("watchf", JSON.stringify(watchf));
    inputValue.value = "";
  }
}

for (var v = 0; v < watchf.length; v++) {
  new item(watchf[v]);
}

// DEFAULT MOVIE

new item("Sherlock");
