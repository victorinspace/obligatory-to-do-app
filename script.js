// TO-DO: 
// - successfully listen to delete button click
// - successfully delete task item from list


let addTaskItemButton = document
    .getElementById("add-task-button")
    .addEventListener("click", saveAndPrintTaskItem);

function saveAndPrintTaskItem() {
    // ** grab and save the new task item from the input field
    let taskItem = document.getElementById("new-task-item").value;
    // -- check to see if the input is blank
    if (taskItem == "") {
        alert("I need orders!");
        return false;
    }
    localStorage.setItem("taskItem", taskItem);
    let grabTaskItem = localStorage.getItem("taskItem");
    console.log("added task item: ", grabTaskItem);

    // ** print the task item to the page
    let taskContainer = document.getElementById("list-tasks");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(grabTaskItem));
    createDeleteButton();
    taskContainer.appendChild(li);
    taskContainer.appendChild(deleteItem);
}

// ** DELETE BUTTON **
let deleteItem = document.createElement("button");
const createDeleteButton = function() {
    // append the "X" for the delete button
    deleteItem.appendChild(document.createTextNode("X"));
    deleteItem.classList.add("remove-item");
}






// // listen for delete click
// let letThemDelete = document.getElementsByClassName("remove-item");

// letThemDelete[0].addEventListener("click", removeTaskItem);



// to delete the localstorage String
// localStorage.removeItem("name");

