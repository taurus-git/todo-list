"use strict";
var tasksHolder = document.getElementById('tasks-holder');
var newTaskButton = document.getElementById('new-task-button');




function addNewTask(){
    var newTask = document.createElement('li');
    var newTaskContent = document.getElementById('new-task-content').value;
    newTask.innerHTML = newTaskContent;

    tasksHolder.appendChild(newTask);
};

newTaskButton.addEventListener("click", addNewTask);

