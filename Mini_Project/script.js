// Event Bubbling ✅ 
/*
let div = document.querySelector('div');
let ul = document.querySelector('ul');
let li = document.querySelectorAll('li');

div.addEventListener('click', () => {
    console.log('div was clicked');
});

ul.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('ul was clicked');
});

li.forEach(item => {
    item.addEventListener('click', (event) => {
        event.stopPropagation();
        console.log('li was clicked');
    });
});
*/

// Building To-Do with DOM ✅ 

function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
      ${taskText}
      <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}
