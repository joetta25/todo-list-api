//Once the page loads 
window.onload = function(){

}
// I am selecting where i want the data to be rendered to 
 const todos = document.querySelector('.js-todos');

 //Once the I recieve the data i want to render it to the page 

function render(data) { 
    todos.innerHTML = ''; // set the innerhtml property
    data.forEach(todo => {
        const html = getTodoHTML(todo); // call it HMTL 
        todos.innerHTML += html; // add each item into the empty string 
    });
}

$.get("/api/todos", function(data){
    console.log(data);
})


