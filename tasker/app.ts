// Clase que representa una tarea
// Nombre de la tarea
// Se ha completado

class TodoItem {
  constructor(public task:string, public isCompleted:boolean){

  }
}

// Administrador de las tareas
// 1. Lista de las tareas
// 2. Defina las operaciones a ejecutar con las tareas

class TaskManager {
  tasks:TodoItem[] = [];

  addTask(task:string):void {
    const newItem = new TodoItem(task, false)
    this.tasks.push(newItem)
  }
}

const taskInput = <HTMLInputElement>document.querySelector('#new-task')
const addButton = document.querySelector('#add-task')!
const completedTask = document.querySelector('#completed-task')

const taskManager = new TaskManager

addButton.addEventListener('click', () => {
  console.log(taskInput.value)
})