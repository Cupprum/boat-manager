function addItem(section) {
    const input = document.getElementById(`${section}-input`);
    const list = document.getElementById(`${section}-list`);
    
    if (input.value.trim() === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${input.value}</span>
        <button onclick="deleteItem(this)">Delete</button>
    `;
    
    list.appendChild(li);
    input.value = '';
}

function deleteItem(button) {
    button.parentElement.remove();
}