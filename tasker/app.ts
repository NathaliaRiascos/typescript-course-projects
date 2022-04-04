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

class HTMLHelper {
  static createTaskItem(task:TodoItem):HTMLLIElement {
    const listItem = document.createElement('li')
    const checkBox = document.createElement('input');

    checkBox.addEventListener('change', () => {
      if(checkBox.checked) {
        task.isCompleted = true        
        displayTasks()
      }
    })
    const label =  document.createElement('label')
    checkBox.type = 'checkbox'
    label.innerText = task.task

    !task.isCompleted? listItem.appendChild(checkBox) : null
    listItem.appendChild(label)

    return listItem
  }
}

const taskInput = <HTMLInputElement>document.querySelector('#new-task')
const addButton = document.querySelector('#add-task')!

const incompleteTasksHolder = document.querySelector('#incomplete-tasks')!
const completedTasksHolder = document.querySelector('#completed-tasks')!
const taskManager = new TaskManager

addButton.addEventListener('click', () => {
  taskManager.addTask(taskInput.value)
  displayTasks()
  clear()
})


function displayTasks() {
  completedTasksHolder.innerHTML = ''
  incompleteTasksHolder.innerHTML = ''
  
  taskManager.tasks.forEach(task => {
    let listItem = HTMLHelper.createTaskItem(task)

    task.isCompleted? 
      completedTasksHolder.appendChild(listItem)
    : incompleteTasksHolder.appendChild(listItem)
  })
}

function clear(){
  taskInput.value = ''
}