"use strict";
function Task(text) {

    this.sayInput = function () {
        alert(text);
    }
}

var newTask = new Task("my input value");

newTask.sayInput();