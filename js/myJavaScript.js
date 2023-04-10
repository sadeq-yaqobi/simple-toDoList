var enterButton = document.getElementById("btn-pencil");
var input = document.getElementById("todo-input");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength() {
  return input.value.length;
}
function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
  input.focus();

  function crossOut() {
    li.classList.toggle("done");
  }
  li.addEventListener("click", crossOut);

  var dBtn = document.createElement("button");
  dBtn.classList.add("delete-btn");
  dBtn.innerHTML = "<i class='fa fa-close'></i>";
  li.appendChild(dBtn);

  dBtn.addEventListener("click", deleteListItem);
  function deleteListItem(){
    li.classList.add("delete-item")
  }
}
function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}
function addListAfterClickKeyPress(event) {
  if (inputLength() > 0 && event.which === 13) {
    createListElement();
  }
}
enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keydown", addListAfterClickKeyPress);
