const taskList = [];

// displays tasklilst in formatted string
const displayTaskList = () => {

    const priorityCount = {
        low: 0,
        medium: 0,
        high: 0
    }

    // string template for tasklist
    console.log(`ID | Task Name | completed | priority\n`)

    // printing indivisual task
    for (let i = 0; i < taskList.length; i++) {

        if (taskList[i].priority === "low") {
            priorityCount.low += 1
        } else if (taskList[i].priority === "medium") {
            priorityCount.medium += 1

        } else if (taskList[i].priority === "high") {
            priorityCount.high += 1
        }

        console.log(`${taskList[i].id} | ${taskList[i].title} | ${taskList[i].completed} | ${taskList[i].priority}\n`)
    }


    // total task list
    console.log(`Total Task count: ${taskList.length}\nHigh Periority Task Count:  ${priorityCount.high}\nMedium Periority Task Count:  ${priorityCount.medium}\nLow Periority Task Count:  ${priorityCount.low}\n`)
}

// complete the task status by id
const taskComplete = (id) => {

    taskList.forEach((item, ind) => {
        item.id == id ? taskList[ind].completed = true : null
    })

}

// delete the task by id
const taskDelete = (id) => {

    taskList.forEach((item, ind) => {
        item.id == id ? taskList.splice(ind, 1) : null
    })

}

// add task to the task list
const addTask = (taskName, priority = "low") => {

    // mandate task name
    if (!taskName) return "provide tasknames"

    // checks for valid priority
    if (priority === "low" || priority === "medium" || priority === "high") {
        const taskObj = {
            id: taskList.length + 1,
            title: taskName,
            completed: false,
            priority,
        }

        // add task object to the task array
        taskList.push(taskObj)

        // return task object that has been added
        return taskObj;
    }
}

// adding tasks
addTask("Clean Room")
addTask("Read book", "high")
addTask("Read Documentation", "medium")

// complete the task by its id
taskComplete(3)

// delete the task by its id
taskDelete(1)

//display all the task
displayTaskList()