document.getElementById("task-form").addEventListener("submit", displayTask);

function displayTask(e) {
  e.preventDefault();

  const taskInput = document.getElementById("new-task-item");
  const text = taskInput.value;

  if (text === "") {
    alert("I need orders!");
    return;
  }

  // ** print the task item to the page and the delete button
  const taskContainer = document.getElementById("task-list");
  const taskListItem = document.createElement("li");

  const textParagraph = createTextParagraph(text);
  taskListItem.appendChild(textParagraph);

  const deleteButton = createDeleteButton(taskListItem);
  taskListItem.appendChild(deleteButton);

  taskContainer.appendChild(taskListItem);
  taskInput.value = "";
}

function createTextParagraph(text) {
  const taskParagraph = document.createElement("p");
  taskParagraph.textContent = text;

  taskParagraph.addEventListener("click", () => {
    taskParagraph.classList.toggle("task-complete");
  });

  return taskParagraph;
}

function createDeleteButton(task) {
  const deleteButton = document.createElement("button");
  deleteButton.appendChild(document.createTextNode("X"));
  deleteButton.classList.add("delete-button");

  deleteButton.addEventListener("click", () => {
    task.remove();
  });

  return deleteButton;
}
