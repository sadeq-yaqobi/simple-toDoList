// Get the enter button, input field, and the unordered list
var enterButton = document.getElementById("btn-pencil");
var input = document.getElementById("todo-input");
var ul = document.querySelector("ul");

// Get all the list items
var item = document.getElementsByTagName("li");

// Function to return the length of the input value
function inputLength() {
  return input.value.length;
}

// Function to create a new list element
function createListElement() {
  // Create a new list item
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
  input.focus();

  // Function to cross out a list item when clicked
  function crossOut() {
    li.classList.toggle("done");
  }

  // Add a click event listener to the list item
  li.addEventListener("click", crossOut);

  // Create a delete button
  var dBtn = document.createElement("button");
  dBtn.classList.add("delete-btn");
  dBtn.innerHTML = "<i class='fa fa-close'></i>";
  li.appendChild(dBtn);

  // Add a click event listener to the delete button
  dBtn.addEventListener("click", deleteListItem);

  // Function to delete the list item
  function deleteListItem() {
    li.classList.add("delete-item");
  }
}

// Function to add a new list item after clicking the enter button
function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

// Function to add a new list item after pressing the enter key
function addListAfterClickKeyPress(event) {
  if (inputLength() > 0 && event.which === 13) {
    createListElement();
  }
}

// Add click event listener to the enter button
enterButton.addEventListener("click", addListAfterClick);

// Add keydown event listener to the input field
input.addEventListener("keydown", addListAfterClickKeyPress);
