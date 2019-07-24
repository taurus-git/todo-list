"use strict";
var tasksHolder = document.getElementById("tasks-holder"); //get holder for all tasks
var newTaskButton = document.getElementById("new-task-button"); //create button for creation new task
var taskInput = document.getElementById("new-task-content");

function addNewTask(){
    var task = document.createElement("li"); //create holder for <li>
    task.className = "list-item";

    var todoText = taskInput.value; //get input value

    if(!todoText){
        return;
    }

    task.innerHTML = todoText; // insert into <li> input value
    taskInput.value = ""; // insert into <li> input an empty value
    tasksHolder.appendChild(task); // insert tew element
}

//Add new task on mouse or button click
newTaskButton.addEventListener("click", addNewTask);
taskInput.addEventListener("keyup", function (e) {
    if(e.keyCode === 13){
        addNewTask();
    }
});

//add "done" action and style
task.addEventListener("click", addTextStyle);
function addTextStyle() {
    if(task.classList){
        task.classList.toggle("line-through")
    };
}
