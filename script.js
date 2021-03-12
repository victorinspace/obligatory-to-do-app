// TO-DO: 
// - ability to delete added items
// - create delete button on new task item elements
// - create 'done' button on new task item elements

const testOutput = function (name, out) {
    console.log(`${name}: ${out}`);
};

// listen for new task that's added
let addTaskItemButton = document
    .getElementById("add-task-button")
    .addEventListener("click", storeTaskItem);

// listen for the delete button to be clicked
// let deleteButton = document
//     .getElementsByClassName("delete")
//     .addEventListener("click", deleteTaskItem);

let incrementerObject = 0;

function storeTaskItem(e) {
    e.preventDefault();
    incrementerObject++;
    
    // grab the new item
    let taskItem = document.getElementById('new-task-item').value;
    
    // check if input is blank
    if (taskItem == "") {
        alert('I need orders!');
        return false;
    }

    // store the item
    if (typeof(Storage) !== 'undefined') {
        localStorage.setItem(incrementerObject, taskItem);
    }
    
    // grab the list container
    let taskContainer = document.getElementById("list-tasks");

    // create new list item element
    let li = document.createElement('li');

    li.appendChild(
        document.createTextNode(localStorage.getItem(incrementerObject))
    );

    // create delete button
    let deleteItem = document.createElement('button');

    // add delete button
    deleteItem.appendChild(document.createTextNode('X'));

    deleteItem.classList.add('delete');

    taskContainer.appendChild(deleteItem);

    taskContainer.appendChild(li);

    console.log(taskContainer.appendChild(li));
}

function deleteTaskItem(e) {
    console.log(e);
}

// to delete the localstorage String
// localStorage.removeItem("name");

