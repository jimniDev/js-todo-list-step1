window.onload = pageLoad;

function pageLoad() {
    var input = document.getElementById('new-todo-title')
    input.onkeydown = pressEnter
}


function pressEnter(e){

    if(e.code == "Enter"){ // Enter key
        // console.log('pushed key ' + e.key)
        var inputText = document.getElementById('new-todo-title').value
        var ulElement = document.getElementById('todo-list')
        ulElement.appendChild(createNewTodo(inputText))
    }
}

function createNewTodo(text) {
    var checkInput = document.createElement('input')
    checkInput.className = 'toggle'
    checkInput.type = 'checkbox'
    var label =  document.createElement('label')
    label.className = 'label'
    label.appendChild(document.createTextNode(text))
    var button = document.createElement('button')
    button.className = 'destroy'

    var div = document.createElement('div')
    div.className = "view"
    div.appendChild(checkInput)
    div.appendChild(label)
    div.appendChild(button)

    var input = document.createElement('input')
    input.className = "edit"
    input.value = text

    var li = document.createElement('li')
    li.appendChild(div)
    li.appendChild(input)

    return li 
}