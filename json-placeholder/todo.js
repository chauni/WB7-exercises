"use strict";

const toDoInputEl = document.getElementById('toDoId');
const toDoBtnEl = document.getElementById('toDoBtn');
const toDoMessageDiv = document.getElementById('toDoMessage')

toDoBtnEl.addEventListener('click', () => {
    toDoMessageDiv.innerHTML = ''
    fetch(`http://jsonplaceholder.typicode.com/todos/${toDoId.value}`).then(response => response.json()).then(data => {
            toDoMessageDiv.innerHTML = `<h5>${data.title}</h5><hr> <p style="display: flex; justify-content: center;">status: ${data.completed}</p>`
        })
})

