"use strict";
var tasksHolder = document.getElementById('tasks-holder'); //get holder for all tasks
var newTaskButton = document.getElementById('new-task-button'); //create button for creation new task
var taskInput = document.getElementById('new-task-content');

function addNewTask(){
    var newTask = document.createElement('li'); //create holder for <li>
    newTask.className = "list-item";
    var todoText = document.getElementById('new-task-content').value; //get input value
    newTask.innerHTML = todoText; // insert into <li> input value
    tasksHolder.appendChild(newTask); // insert tew element
};

newTaskButton.addEventListener("click", addNewTask);
taskInput.addEventListener('keyup', function (e) {
    if(e.keyCode === 13){
        addNewTask();
    }
});
