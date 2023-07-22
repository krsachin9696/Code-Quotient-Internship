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

    fetch("/todo", {       // The fetch function is a modern way to make network requests, 
        method: "POST",    // and in this case, it's used to send the todo object to the server.
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
    
        // Update checked status in local storage
        const isChecked = checkboxNode.checked;
        updateCheckedStatusInLocalStorage(todo.todoText, isChecked);
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
        deleteTodoOnServer(todo); // Call the function to delete the task on the server
        todoItemNode.remove(); // Remove the task from the UI
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

    // Add the custom data attribute to the task container
  todoItemNode.dataset.todo = todo.todoText;

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

function deleteTodoOnServer(todo) {
    fetch("/delete-todo", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
    })
    .then(function (response) {
        if (response.status === 200) {
            // Task deleted successfully on the server, do any additional handling if needed
        } else {
            alert("Failed to delete the task.");
        }
    });
}


fetch("/todo-data")
.then(function (response) {
    if (response.status === 200) {
        return response.json();
    } else {
        alert("Something went wrong");
    }
})
.then(function (todos) {
    // Clear the existing tasks before adding them again
    todoListNode.innerHTML = "";

    todos.forEach(function (todo) {
        showTodoInUI(todo);
        // Update checked status based on local storage
        const isChecked = getCheckedStatusFromLocalStorage(todo.todoText);
        if (isChecked) {
            const todoItemNode = document.querySelector(`[data-todo="${todo.todoText}"]`);
            const checkboxNode = todoItemNode.querySelector(".checkbox");
            todoItemNode.classList.add("done");
            checkboxNode.checked = true;
        }
    });
});



function updateCheckedStatusInLocalStorage(todoText, isChecked) {
    // Retrieve existing data from local storage or initialize an empty object
    const storedData = JSON.parse(localStorage.getItem("todoCheckedStatus")) || {};

    // Update the checked status for the specific task
    storedData[todoText] = isChecked;

    // Save the updated data back to local storage
    localStorage.setItem("todoCheckedStatus", JSON.stringify(storedData));
}

function getCheckedStatusFromLocalStorage(todoText) {
    const storedData = JSON.parse(localStorage.getItem("todoCheckedStatus")) || {};
    return storedData[todoText] || false; // Default to false if the task is not found in the local storage
}
