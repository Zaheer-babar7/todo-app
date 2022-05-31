var input = document.getElementById ("input");
var addTodo = document.getElementById ("addTodo");
var list = document.getElementById ("list");


function addList() {

 if (input.value.length >= 5) {
     
    li = document.createElement('li')
    var delBtn = document.createElement ("button")
    delBtn.append ("Delete")
    delBtn.setAttribute ("onclick", "del(this)")
    delBtn.setAttribute ("class", "btn btn-danger my-button")
    var editBtn = document.createElement ("button")
    editBtn.append("Edit")
    editBtn.setAttribute ("onclick", "edit(this)")
    editBtn.setAttribute ("class", "btn btn-primary my-button")
    list.append(li);
    li.append(input.value);
    li.append(editBtn)
    li.append(delBtn)
    input.value = "";
    li.setAttribute ("class", "lists")
 } else {
     alert = ("correct todo")
 }



}

function del(e){
    e.parentNode.remove()
}

function delAll(){
    li.parentNode.innerHTML = ""
}

function edit(e){
    var val = prompt("edit your value", e.parentNode.firstChild.nodeValue )
    e.parentNode.firstChild.nodeValue = val
   
}
