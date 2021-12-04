const toDoForm = document.querySelector("#todo-form");
const toDOInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-List");
let toDos = [];
const TODOS_KEY = "toDos";


function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDoObj){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = newToDoObj.text;
    li.id = newToDoObj.id;
    button.innerText = "❌"
    button.addEventListener("click",deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDOInput.value;
    const newToDoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDOInput.value = "";
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
} 

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    
}