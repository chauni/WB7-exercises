const idInput = document.getElementById('idInput')

const updateDivEl = document.getElementById('updateDiv')

const titleInput = document.getElementById('title')
const statusInput = document.getElementById('completed')

const editBtn = document.getElementById('editBtn')
const updateBtn = document.getElementById('updateBtn')
const cancelBtn = document.getElementById('cancelBtn')

const updatedToDoEl = document.getElementById('updatedToDo')
const updateMessageDiv = document.getElementById('updateMessageDiv')

editBtn.addEventListener('click', () => {

    if (idInput.value > 0) {
        updateDivEl.style.display = 'block'
        updateMessageDiv.style.display = 'block'
        idInput.setAttribute('disabled', true);
    } else {
        alert('invalid id input (must be a positive # greater than 0)')
    }

    fetch(`http://localhost:3000/todos/${idInput.value}`)
    .then(response => response.json())
    .then(todo => {
        titleInput.value = todo.title;
        statusInput.checked = todo.completed;
    })
})

updateBtn.addEventListener('click', () => {
    fetch(`http://localhost:3000/todos/${idInput.value}`, {
        method: 'PUT',
        body: JSON.stringify({
            title: titleInput.value,
            completed: statusInput.checked
        }),
        headers: {
            "Content-type": "application/json; charset=utf-8"
        }
    })
    .then(response => response.json())
    .then(updatedToDo => {
        updatedToDoEl.innerHTML = `Updated to do #${updatedToDo.id} <p> New title: ${updatedToDo.title}</p> <p>Updated status: ${updatedToDo.completed}`
    })
})

cancelBtn.addEventListener('click', () => {
    window.location.href = './index.html'
})


