const AddItem = () => {
  var todoInput = document.getElementById("todoInput");
  var todoText = todoInput.value.trim(); // Trim the input value directly

  if (todoText !== "") {
    var newTodo = document.createElement("li");
    newTodo.textContent = todoText;

    // Add a class to the newTodo element
    newTodo.classList.add("todo-item");

    var todoList = document.getElementById("todoList");
    todoList.appendChild(newTodo);

    todoInput.value = "";
  } else {
    alert("Please enter a todo!");
  }

  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-button"); // Add a class to the delete button

  deleteButton.onclick = function () {
    // Remove the todo item when the delete button is clicked
    newTodo.remove();
  };

  // Append the delete button to the todo item
  newTodo.appendChild(deleteButton);
};
