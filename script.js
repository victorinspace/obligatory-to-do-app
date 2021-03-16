// ** TO-DO: 
// 1. A user should be able to mark a TO-DO as completed
// 2. When a user mark’s a TO-DO as completed, the text of 
//      the TO-DO should be crossed out (using strikethrough font)
// 3. A user should have the option of deleting TO-DO’s 
//      that have been mark completed

let addTaskItemButton = document
    .getElementById("add-task-button")
    .addEventListener("click", saveAndPrintTaskItem);

let createKey = 0;

function saveAndPrintTaskItem(e) {
    e.preventDefault();
    createKey++;
    
    // ** grab and save the new task item from the input field
    let taskItem = document.getElementById("new-task-item").value;
        // check to see if the input is blank
    if (taskItem == "") {
        alert("I need orders!");
        return false;
    }
    sessionStorage.setItem(createKey, taskItem);
    let grabTaskItem = sessionStorage.getItem(createKey);
    console.log(`added task item! key: ${createKey}, value: ${grabTaskItem}`);

    // ** print the task item to the page and the delete button
    let taskContainer = document.getElementById("list-tasks");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(grabTaskItem));
    taskContainer.appendChild(li);
    let deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("X"));
    deleteButton.setAttribute("id", createKey);
    deleteButton.setAttribute("onclick", "didUserDelete(this.id)")
    deleteButton.classList.add('delete-button');
    li.appendChild(deleteButton);    
}

function didUserDelete(e) {
    let deletedListElement = document.getElementById(e).parentElement;
    deletedListElement.remove();
    sessionStorage.removeItem(e);
}
