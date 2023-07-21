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

function showTodoInUI(todo) {
    const todoTextNode = document.createElement("div");
    todoTextNode.innerText = todo.todoText;

    const priorityNode = document.createElement("span");
    priorityNode.innerText = todo.priority;

    todoListNode.appendChild(todoTextNode);
    todoListNode.appendChild(priorityNode);
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