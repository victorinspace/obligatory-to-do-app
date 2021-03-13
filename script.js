// TO-DO: 
// - add 'delete' class to the delete button
// - successfully listen to delete button click
// - successfully delete task item from list



function saveAndPrintTaskItem(e) {
    // e.preventDefault();
    newTaskID++;

    // grab the new task item from the input field
    let taskItem = document.getElementById("new-task-item").value;

    // check to see if the input is blank
    if (taskItem == "") {
        alert("I need orders!");
        return false;
    }

    // store the item
    if (typeof Storage !== "undefined") {
        localStorage.setItem(newTaskID, taskItem);
    }

    // grab the list container ID
    let taskContainer = document.getElementById("list-tasks");

    // create new list element to place tasks within the taskContainer
    let li = document.createElement("li");

    // append the new task item to the list element
    li.appendChild(document.createTextNode(localStorage.getItem(newTaskID)));

    createDeleteButton();

    taskContainer.appendChild(deleteItem);

    taskContainer.appendChild(li);
}

function removeTaskItem(e) {
    console.log(e);
}



// listen for newly added task
let addTaskItemButton = document
    .getElementById("add-task-button")
    .addEventListener("click", saveAndPrintTaskItem);
    
// create an ID for each task item
let newTaskID = 0;
    
// create the delete button to add to task items
let deleteItem = document.createElement("button");
const createDeleteButton = function() {
    // append the "X" for the delete button
    deleteItem.appendChild(document.createTextNode("X"));
    deleteItem.classList.add("remove-item");
}


let letThemDelete = document
    .getElementsByClassName("remove-item")
    .addEventListener("click", removeTaskItem);




// to delete the localstorage String
// localStorage.removeItem("name");

