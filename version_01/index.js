let selectField = document.getElementById("selectField");
let selectText = document.getElementById("selectText");
let options = document.getElementsByClassName("options");
let list = document.getElementById("list");
let rotateIcon = document.getElementById("rotateIcon");

selectField.onclick = function () {
  list.classList.toggle("hide");
};

for (let option of options) {
  option.onclick = function () {
    selectText.innerHTML = this.textContent;
    list.classList.toggle("hide");
  };
}
