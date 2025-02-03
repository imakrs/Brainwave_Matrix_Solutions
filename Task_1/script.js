document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
  
    // Add Task
    addTaskBtn.addEventListener("click", () => {
      const taskText = taskInput.value.trim();
      if (!taskText) return alert("Please enter a task!");
  
      createTask(taskText);
      taskInput.value = "";
    });
  
    // Create Task
    function createTask(taskText) {
      const li = document.createElement("li");
      li.className = "task";
  
      const span = document.createElement("span");
      span.textContent = taskText;
  
      const buttonsDiv = document.createElement("div");
      buttonsDiv.className = "buttons";
  
      const completeBtn = document.createElement("button");
      completeBtn.className = "complete";
      completeBtn.textContent = "Complete";
      completeBtn.addEventListener("click", () => {
        li.classList.toggle("complete");
      });
  
      const editBtn = document.createElement("button");
      editBtn.className = "edit";
      editBtn.textContent = "Edit";
      editBtn.addEventListener("click", () => {
        const newText = prompt("Edit task:", span.textContent);
        if (newText) span.textContent = newText.trim();
      });
  
      const deleteBtn = document.createElement("button");
      deleteBtn.className = "delete";
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => {
        taskList.removeChild(li);
      });
  
      buttonsDiv.append(completeBtn, editBtn, deleteBtn);
      li.append(span, buttonsDiv);
      taskList.appendChild(li);
    }
  });
  