// I am selecting where i want the data to be rendered to 
 const todos = document.querySelector('.js-todos');

 $.ajax('/api/todos')
    .then(data => {
        render(data);
    });



function render(data) { 
    todos.innerHTML = ''; // set the innerhtml property
    data.forEach(todo => {
        const html = getTodoHTML(todo); // the html variable html well equal to function and have each object as the parameter
        todos.innerHTML += html; // add each item into the empty string and formating it in getTodoHTML function 
    });
}

function getTodoHTML(todo) {
    return `
    <li>
        <div class="container">
            <div class="btn-group">
                <form onsubmit="return updateTodo('${todo.id}')">
                    <input type="text" class="todo-text-${todo.id}"
                    value="${todo.todo}"><button type="button" class="btn btn-success type="button ">Save</button>
                </form>
                <button type="button"  class="btn btn-danger" onclick="deleteTodo('${todo.todo}')">X</button>
                <button type="button" class="btn btn-secondary" onclick="EditTodo('${todo.id})">Edit</button>
            </div>
        </div>
    </li>
    
    `
}