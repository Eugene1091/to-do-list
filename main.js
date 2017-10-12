var ul = document.getElementById('insertBlock');
ul.addEventListener('click', function (e) {
    if( e.target.classList == 'closed'){
        e.target.parentNode.style.display = 'none';
    }else{
        e.target.classList.toggle('selected');
    }
});
var inputEl = document.getElementById('addTask').addEventListener('click',function (e) {
    var listGroup = document.getElementById('insertBlock');
    var newTask = document.createElement('LI');
    var inputValue = document.getElementById('exampleText').value;
    var inputText = document.createTextNode(inputValue);
    var span = document.createElement('SPAN');
        span.classList.add('closed');
    var spanText = document.createTextNode('x');
    if(!inputValue == ''){
        span.appendChild(spanText);
        newTask.appendChild(span);
        newTask.classList.add('list-group-item');
        newTask.appendChild(inputText);
        listGroup.appendChild(newTask);
    }else{
        alert(' The field required!');
    }
});