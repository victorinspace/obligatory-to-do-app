// connect and store task item entry field
function storeTaskItem() {
    let taskItem = document.getElementById('task-item').value;
    if (taskItem == '') {
        alert('I need orders!');
        return false;
    }
    console.log(taskItem);
}

// TO-DO: 
// - Figure out how they can press 'Enter' to add item

// display the persons added tasks

