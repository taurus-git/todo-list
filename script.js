"use strict";
var tasksHolder = document.getElementById('tasks-holder');
var newTaskButton = document.getElementById('new-task-button');

function addNewTask(){
    var newTask = document.createElement('li'); //создать контейнер для li
    var newTaskContent = document.getElementById('new-task-content').value; //взять значение в инпуте
    tasksHolder.insertAdjacentHTML("afterBegin", "<b>1111</b>");

    //newTask.innerHTML = newTaskContent; // положить в контейнер содержимое инпута

    //tasksHolder.appendChild(newTask); //вставить контейнер с содержимым в документ
};

newTaskButton.addEventListener("click", addNewTask);

