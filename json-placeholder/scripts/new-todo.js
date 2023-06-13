// new-todo page javascript

const userIdInput = document.getElementById('userIdInput')
const titleInput = document.getElementById('titleInput')
const statusInput = document.getElementById('statusInput')

const addButton = document.getElementById('addBtn')

const outputSection = document.getElementById('outputSection')

addButton.addEventListener('click', () => {
    const params = {
        userId: userIdInput.value,
        title: titleInput.value,
        completed: statusInput.value
    }

    fetch('http://localhost:3000/todos', {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            "Content-type": "application/json; charset=utf-8"
        }
    })
    .then(response => response.json())
    .then(newTodo => {
        console.log(newTodo)
        outputSection.innerHTML = `<h5><b>New To-Do item added!</b></h5> <hr> <p>User Id: ${newTodo.userId}</p> <p>Title: ${newTodo.title}</p> <p>Completed: ${newTodo.completed}</p>`
    })
})