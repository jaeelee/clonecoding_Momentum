const TODOS_KEY = "todos"

const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

let todos = [];

function saveTodos()
{
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos)); // JSON.stringify : array를 string으로 변환
}

function deleteTodo(event)
{
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodos();
}

function paintTodo(newTodo)
{
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.id = newTodo.id;
    span.innerText = newTodo.text;
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    const nnewTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    todoInput.value = "";
    todos.push(nnewTodoObj);
    paintTodo(nnewTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null)
{
    const parsedTodos = JSON.parse(savedTodos); // JSON.parse : string을 javascript object로 변환
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}