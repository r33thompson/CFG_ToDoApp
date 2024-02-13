console.log("hello");

const todos = [];

// { title: string, completed: boolean }

// // 0. Add event listener for submit button
// document.querySelector("#submitButton").addEventListener("click", () => {
//     console.log("clicked");
// // 1. Grab the input element
// const inputTodoElemment = document.querySelector("#inputTodo");
//     console.log(inputTodoElemment.value);
// });

function addToDo() {
    // Select input element
    const inputTodoElement = document.querySelector("#inputTodo");
    // Select its value (title)
    const title = inputTodoElement.value;

    todos.push({ title, completed: false});

    renderTodos();

    console.log(todos);
}


function renderTodos() {
    const todoListElement = document.querySelector("#toDoList");

    todoListElement.innerHTML = "";

    todos.forEach((todo, index) => {
        const listElement = document.createElement("li");
        listElement.innerHTML = `
            <p>${todo.title}</p>
            <p>${todo.completed ? "Completed" : "Pending"}</p>
            <button onclick="deleteTodo(${index})">Delete</button>
            <button onclick="toggleTodo(${index})">Toggle</button>
        `;

        todoListElement.appendChild(listElement);
    });

}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

function toggleTodo(index) {
    todos[index].completed=!todos[index].completed;
    renderTodos();
}



// delete todo function

// toggle todo function

// renderTodos();
// 2. Check if there is a value
// 3. If there is a value, create a new task