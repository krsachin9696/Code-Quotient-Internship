const submitTodoNode = document.getElementById("submitTodo");
const userInputNode = document.getElementById("userInput");
const prioritySelectorNode = document.getElementById("prioritySelector");
const todoListNode = document.getElementById("todo-item");

submitTodoNode.addEventListener("click", function () {

    const todoText = userInputNode.value;
    // debugger;
    const priority = prioritySelectorNode.value;
    
    if(!todoText || !priority){
        alert("please enter a todo & select its priority");
        return;
    }

    const todo = {
        todoText,   // it is actually written as todoText: todoText, but 
        priority,   // if the key & value name is same then it can also be written as it is written 
    };

    fetch("/todo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
    }).then(function (response) {
        if(response.status === 200){
            showTodoInUI(todo);
        }
        else{
            alert("something went wrong");
        }
    });
});

// function showTodoInUI(todo) {
//     const todoTextNode = document.createElement("div");
//     todoTextNode.innerText = todo.todoText;

//     const priorityNode = document.createElement("span");
//     priorityNode.innerText = todo.priority;

//     todoListNode.appendChild(todoTextNode);
//     todoListNode.appendChild(priorityNode);
// }
function showTodoInUI(todo) {
    const todoItemNode = document.createElement("div");
    todoItemNode.classList.add("todo-item");
  
    const checkboxNode = document.createElement("input");
    checkboxNode.type = "checkbox";
    checkboxNode.classList.add("checkbox");
    checkboxNode.addEventListener("change", function () {
      // Mark the task as done when the checkbox is checked
      todoItemNode.classList.toggle("done", checkboxNode.checked);
    });
  
    const todoTextNode = document.createElement("div");
    todoTextNode.innerText = todo.todoText;
    todoTextNode.classList.add("task");
  
    const priorityNode = document.createElement("div");
    priorityNode.innerText = todo.priority;
    priorityNode.classList.add("priority");
  
    const deleteButtonNode = document.createElement("div");
    deleteButtonNode.innerText = "Delete";
    deleteButtonNode.classList.add("delete-button");
    deleteButtonNode.addEventListener("click", function () {
      // Remove the task when the delete button is clicked
      todoItemNode.remove();
    });
  
    todoItemNode.appendChild(checkboxNode);
    todoItemNode.appendChild(todoTextNode);
    todoItemNode.appendChild(priorityNode);
    todoItemNode.appendChild(deleteButtonNode);

    checkboxNode.classList.add("todo-checkbox");
    todoTextNode.classList.add("todo-task");
    priorityNode.classList.add("todo-priority");
    deleteButtonNode.classList.add("todo-delete");

    todoListNode.appendChild(todoItemNode);
  }
  

fetch("/todo-data")
.then(function (response) {
    if(response.status === 200) {
        return response.json();
    }
    else{
        alert("something went wrong");
    }
})
.then(function(todos){
    todos.forEach(function(todo){
        showTodoInUI(todo);
    });
});