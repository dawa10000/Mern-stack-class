// 1. Initialize todos array
let todos = [
  { id: 1, title: "Complete homework", completed: false, priority: "high" },
  { id: 2, title: "Read JavaScript book", completed: true, priority: "medium" }
];

// 2. Function to display all todos
function displayTodos() {
  console.log("ID | Title                | Completed | Priority");
  console.log("------------------------------------------------");
  todos.forEach(todo => {
    console.log(
      `${todo.id}  | ${todo.title.padEnd(20)} | ${todo.completed}     | ${todo.priority}`
    );
  });
}

// 3. Function to add a new todo
function addTodo(title, priority) {
  let newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
  todos.push({ id: newId, title, completed: false, priority });
  console.log(`✅ Added: "${title}"`);
}

// 4. Function to mark a todo as completed
function markCompleted(id) {
  let todo = todos.find(t => t.id === id);
  if (todo) {
    todo.completed = true;
    console.log(`✅ Task "${todo.title}" marked as completed.`);
  } else {
    console.log("❌ Todo not found.");
  }
}

// 5. Function to delete a todo
function deleteTodo(id) {
  let index = todos.findIndex(t => t.id === id);
  if (index !== -1) {
    let removed = todos.splice(index, 1);
    console.log(`🗑️ Deleted: "${removed[0].title}"`);
  } else {
    console.log("❌ Todo not found.");
  }
}

// 6. Function to filter todos by priority
function filterByPriority(priority) {
  let filtered = todos.filter(t => t.priority === priority);
  console.log(`📌 ${priority.toUpperCase()} priority tasks:`);
  filtered.forEach(todo => {
    console.log(`- ${todo.title} (Completed: ${todo.completed})`);
  });
}

// 7. Advanced: Count completed vs pending
function taskSummary() {
  let completedCount = todos.filter(t => t.completed).length;
  let pendingCount = todos.length - completedCount;
  console.log(`📊 Summary: ${completedCount} completed, ${pendingCount} pending.`);
}

// ------------------- Demo -------------------
displayTodos();
addTodo("Go for a walk", "low");
markCompleted(1);
deleteTodo(2);
filterByPriority("high");
taskSummary();
displayTodos();
