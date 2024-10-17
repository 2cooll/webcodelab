const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
let todos = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();
    addTodo();
});

function addTodo() {
    const todoText = input.value.trim();
    if (todoText) {
        const todo = {
            id: Date.now(),
            text: todoText,
            completed: false
        };
        todos.push(todo);
        renderTodo(todo);
        input.value = '';
    }
}

function renderTodo(todo) {
    const li = document.createElement('li');
    li.setAttribute('class', 'todo-item');
    li.setAttribute('data-id', todo.id);
    li.innerHTML = `
        <span>${todo.text}</span>
        <div>
            <button class="edit-button">Edit</button>
            <button class="delete-button">Delete</button>
        </div>
    `;
todoList.appendChild(li);

    li.querySelector('.edit-button').addEventListener('click', () => editTodo(todo.id));
    li.querySelector('.delete-button').addEventListener('click', () => deleteTodo(todo.id));
}

function editTodo(id) {
    const todoItem = document.querySelector(`[data-id="${id}"]`);
    const todoText = todoItem.querySelector('span').textContent;
    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.value = todoText;
    editInput.classList.add('edit-input');
    
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.classList.add('edit-button');
    
    todoItem.innerHTML = '';
    todoItem.appendChild(editInput);
    todoItem.appendChild(saveButton);
    
    editInput.focus();
    
    saveButton.addEventListener('click', function() {
        const newText = editInput.value.trim();
        if (newText) {
            todos = todos.map(todo => todo.id === id ? {...todo, text: newText} : todo);
            todoItem.innerHTML = `
                <span>${newText}</span>
                <div>
                    <button class="edit-button">Edit</button>
                    <button class="delete-button">Delete</button>
                </div>
            `;
            todoItem.querySelector('.edit-button').addEventListener('click', () => editTodo(id));
            todoItem.querySelector('.delete-button').addEventListener('click', () => deleteTodo(id));
        }
    });
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    document.querySelector(`[data-id="${id}"]`).remove();
}