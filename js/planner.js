// Load saved tasks or start with an empty array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Display saved tasks when page loads
displayTasks();

addTaskBtn.addEventListener("click", addTask);

// Add Task
function addTask(){

    const task = taskInput.value.trim();

    if(task===""){

        alert("Please enter a task.");

        return;

    }

    tasks.push({

        name:task,

        completed:false

    });

    saveTasks();

    taskInput.value="";

    displayTasks();

}

// Display Tasks
function displayTasks(){

    taskList.innerHTML="";

    tasks.forEach((task,index)=>{

        const li=document.createElement("li");

        if(task.completed){

            li.classList.add("completed");

        }

        li.innerHTML=`

        <span>${task.name}</span>

        <div>

        <button onclick="completeTask(${index})">

        ✓

        </button>

        <button onclick="deleteTask(${index})">

        Delete

        </button>

        </div>

        `;

        taskList.appendChild(li);

    });

}

// Complete Task
function completeTask(index){

    tasks[index].completed=!tasks[index].completed;

    saveTasks();

    displayTasks();

}

// Delete Task
function deleteTask(index){

    tasks.splice(index,1);

    saveTasks();

    displayTasks();

}

// Save to Local Storage
function saveTasks(){

    localStorage.setItem("tasks", JSON.stringify(tasks));

}