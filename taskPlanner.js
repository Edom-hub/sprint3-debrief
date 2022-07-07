class TaskPlanner {
  constructor(currentId = 0) {
    this.currentId = currentId
    this.tasks = []
  }

  // Method for making a task and pushing it into the "tasks" array
  addTask(taskName, taskDesc, taskAssignee, taskDate) {
    const task = {
      id: this.currentId++,
      name: taskName,
      description: taskDesc,
      assignee: taskAssignee,
      date: taskDate
    }
    this.tasks.push(task)
    console.log(this.tasks)
    console.debug(this.tasks)
    this.render(task)
  }

  // Method that renders the tasks in the array onto the DOM
  render(task) {
    const div = createHTMLTask(task)
    const deleteBtn = document.createElement("button")
    deleteBtn.innerText = "Delete Task"
    deleteBtn.addEventListener("click", (e) => {
      this.deleteTask(task.id)
      div.remove()
    })
    div.appendChild(deleteBtn)
    document.getElementById("card-holder").appendChild(div)
  }

  // Explicitly splices out the selected task from the 'tasks' array
  deleteTask(id) {
    this.tasks.splice(id, 1)
    console.log(this.tasks)
  }
}

//display the data
