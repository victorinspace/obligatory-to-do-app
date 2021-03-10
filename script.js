// TO-DO: 
// - Figure out how they can press 'Enter' to add item

let addTaskItemButton = document
    .getElementById("add-task-button")
    .addEventListener("click", storeTaskItem);

function storeTaskItem(e) {
    
    let taskItem = document.getElementById('task-item').value;
    
    if (taskItem == '') {
        alert('I need orders!');
        return false;
    }
    
    let output = document.getElementById("list-tasks");
    output.innerHTML = `<li>${taskItem}</li>`;
}







// display the persons added tasks
// let taskItemDisplay = document.createElement('li');
// document.getElementById('list-tasks').append(taskItem)
