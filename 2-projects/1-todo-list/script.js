let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // list.textContent = "";

  for (let todo of todos) {
    let liElement = document.createElement("li");
    liElement.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    liElement.innerText = todo.task;
    list.appendChild(liElement);
    let spanItem = document.createElement("span");
    let doneIcon = document.createElement("i");
    let deleteIcon = document.createElement("i");
    spanItem.classList.add("badge", "bg-primary", "rounded-pill");
    doneIcon.classList.add("fa", "fa-check");
    deleteIcon.classList.add("fa", "fa-trash");
    doneIcon.setAttribute("aria-hidden", "true");
    deleteIcon.setAttribute("aria-hidden", "true");
    liElement.appendChild(spanItem);
    spanItem.appendChild(doneIcon);
    spanItem.appendChild(deleteIcon);

    doneIcon.addEventListener("click", function () {
      liElement.classList.toggle("line-through");
    });
    deleteIcon.addEventListener("click", function () {
      ullist.removeChild(liElement);
    });
  }
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript

populateTodoList(todos);
function addNewTodo(event) {
  let inputEl = document.getElementById("todoInput").value;
  //  buttonToDo.addEventListener("click",function() {
  populateTodoList([{ task: inputEl, completed: false }]);

  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
