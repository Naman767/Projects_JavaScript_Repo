function addTask(){

    const input  = document.getElementById('inputTask')
    const taskValue = input.value.trim()

    if(taskValue === ""){
        alert("Please Enter a task")
        return
    }

    const newTask = document.createElement('li')
    const taskList = document.getElementById('taskList')

    newTask.textContent = taskValue

    taskList.appendChild(newTask)

    input.value = ""
    deleteTask(newTask)
}

function deleteTask(newTask){

    const deleteBtn = document.createElement('button')

    deleteBtn.textContent = "Delete"

    newTask.appendChild(deleteBtn)
    
    deleteBtn.onclick = function(){
        newTask.remove()
    }
}
