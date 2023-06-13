"use strict";

const usersDivEl = document.getElementById('usersDiv');
const tbody = document.querySelector('#usersTable tbody');

fetch('http://jsonplaceholder.typicode.com/users/').then(response => response.json()).then(data => {
    data.forEach((user) => {
        const row = tbody.insertRow();

        const nameCell = row.insertCell();
        nameCell.innerHTML = user.name

        const userNameCell = row.insertCell();
        userNameCell.innerHTML = user.username

        const emailCell = row.insertCell();
        emailCell.innerHTML = user.email
        
        const phoneCell = row.insertCell();
        phoneCell.innerHTML = user.phone

        const websiteCell = row.insertCell();
        websiteCell.innerHTML = user.website

        const companyCell = row.insertCell();
        companyCell.innerHTML = user.company.name
    })
})