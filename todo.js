  // Define an array to store the tasks
  let tasks = [];

  // Function to add a task to the list
  function addTask() {
      // Get the input value
      let taskInput = document.getElementById('taskInput');
      let task = taskInput.value;
  
      if (task.trim() !== ' ') {
          // Add the task to the array
          tasks.push(task);
  
          // Clear the input field
          taskInput.value = ' ';
  
          // Update the task list
          updateTaskList();
      }
  }
  
  // Function to update the task list
  function updateTaskList() {
      // Get the task list element
      let taskList = document.getElementById('taskList');
  
      // Clear the task list
      taskList.innerHTML = ' ';
  
      // Loop through the tasks array and create list items
      for (let i = 0; i < tasks.length; i++) {
          let taskItem = document.createElement('li');
          taskItem.textContent = tasks[i];
  
          // Create a delete button for each task
          let deleteButton = document.createElement('button');
          deleteButton.textContent = 'Delete';
          deleteButton.setAttribute('onclick', `deleteTask(${i})`);
          taskItem.appendChild(deleteButton);
  
          taskList.appendChild(taskItem);
      }
  }
  
  // Function to delete a task from the list
  function deleteTask(index) {
      // Remove the task from the array by index
      tasks.splice(index, 1);
  
      // Update the task list
      updateTaskList();
  }
  