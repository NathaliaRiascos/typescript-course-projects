"use strict";
// Clase que representa una tarea
// Nombre de la tarea
// Se ha completado
class TodoItem {
    constructor(task, isCompleted) {
        this.task = task;
        this.isCompleted = isCompleted;
    }
}
// Administrador de las tareas
// 1. Lista de las tareas
// 2. Defina las operaciones a ejecutar con las tareas
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        const newItem = new TodoItem(task, false);
        this.tasks.push(newItem);
    }
}
const taskInput = document.querySelector('#new-task');
const addButton = document.querySelector('#add-task');
const completedTask = document.querySelector('#completed-task');
const taskManager = new TaskManager;
addButton.addEventListener('click', () => {
    console.log(taskInput.value);
});
