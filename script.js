const planner = new TaskPlanner()
console.log(planner)

function grabFormInfo() {
    const taskToBeAdded = document.getElementById("taskname").value
    const taskDescToBeAdded = document.getElementById("taskdescription").value
    const assigneeToBeAdded = document.getElementById("assignee").value
    const dateToBeAdded = document.getElementById("taskdate").value

    planner.addTask(taskToBeAdded, taskDescToBeAdded, assigneeToBeAdded, dateToBeAdded)
}

const submitBtn = document.getElementById("task-submit")
submitBtn.addEventListener("click", function(event){
    console.log(event)
    console.log(globalThis)
    grabFormInfo()
})

function createHTMLTask(task) {
    const taskDiv = document.createElement("div")
    taskDiv.className = "card"
    taskDiv.id = task.id
  
    const taskBody = document.createElement("div")
    taskBody.className = "card-body"
  
    const taskTitle = document.createElement("h2")
    taskTitle.innerText = task.name
  
    const taskDesc = document.createElement("h5")
    taskDesc.innerText = task.description
  
    const taskAssignee = document.createElement("h5")
    taskAssignee.innerText = task.assignee
  
    const taskDate = document.createElement("p")
    taskDate.innerText = task.date
    
    taskDiv.appendChild(taskBody)
  
    taskBody.appendChild(taskTitle)
    taskBody.appendChild(taskDesc)
    taskBody.appendChild(taskAssignee)
    taskBody.appendChild(taskDate)
    
    return taskDiv
}
