//your code here
let list_item = document.getElementById('newTodoInput');
let btn = document.getElementById('addTodoBtn');
let input  = document.getElementById('todoList');

function toDoList(){
    if(list_item.value != ""){
        let createdLi = document.createElement('li');
        createdLi.innerHTML= list_item.value;
        input.appendChild(createdLi);
        list_item.value = "";
    }
    else {
        alert("Please enter something in the input box");
    }
}

