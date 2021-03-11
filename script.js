// TO-DO: 
// - ability to delete added items
// - create delete button on new task item elements
// - create 'done' button on new task item elements

const testOutput = function (name, out) {
    console.log(`${name}: ${out}`);
};

let addTaskItemButton = document
    .getElementById("add-task-button")
    .addEventListener("click", storeTaskItem);

let incrementerObject = 0;

function storeTaskItem(e) {
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
    
    // print out the task item
    let taskItemListView = document.getElementById("list-tasks");

    let li = document.createElement('li');

    li.appendChild(
        document.createTextNode(localStorage.getItem(incrementerObject))
    );

    testOutput('event', li);

    taskItemListView.appendChild(li);
}

// to delete the localstorage String
// localStorage.removeItem("name");

