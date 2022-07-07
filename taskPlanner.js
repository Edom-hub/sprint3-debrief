class TaskPlanner {
  constructor(currentId = 0) {
    this.currentId = currentId
    this.tasks = []
    this.checkCache()
  }
  
  checkCache() {
    console.log("Checking if anything is in the cache")
    let cache = localStorage.getItem("storedTasks")
    console.log(cache)
    if (cache) {
      let tasks = JSON.parse(cache)
      console.log(tasks)
      tasks.forEach((task) => {
        this.addTask(task.name, task.description, task.assignee, task.date)
      })
    }
  }

  updateCache() {
    localStorage.setItem("storedTasks", JSON.stringify(this.tasks))
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
    this.render(task)
    this.updateCache()
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
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id  === id) {
        console.log("Found the index of the task wanted: ", i)
        this.tasks.splice(i, 1)
        this.updateCache()
      }
    }
    console.log(this.tasks)
  }
}

//display the data
