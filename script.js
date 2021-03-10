// TO-DO: 
// - Figure out how they can press 'Enter' to add item

let addTaskItemButton = document
    .getElementById("add-task-button")
    .addEventListener("click", storeTaskItem);
let incrementerObject = 0;

let taskItemContainer = {};

function storeTaskItem(e) {
    incrementerObject++;
    
    let taskItem = document.getElementById('task-item').value;
    
    if (typeof(Storage) !== 'undefined') {
        localStorage.setItem(incrementerObject, taskItem);
        console.log('local storage:' + localStorage.getItem(incrementerObject) + incrementerObject);
    }

    if (taskItem == '') {
        alert('I need orders!');
        return false;
    }
    
    let showListContainer = document.getElementById("list-tasks");
    let li = document.createElement('li');
    li.appendChild(
        document.createTextNode(localStorage.getItem(incrementerObject))
    );
    showListContainer.appendChild(li);

    // let displayNewItem = showListContainer.innerHTML = `
    //     <li>${localStorage.getItem(incrementerObject)}</li>
    // `;


}



// to delete the localstorage String
// localStorage.removeItem("name");




// display the persons added tasks
// let taskItemDisplay = document.createElement('li');
// document.getElementById('list-tasks').append(taskItem)
