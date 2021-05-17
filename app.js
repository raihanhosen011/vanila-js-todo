var form = document.querySelector("form") ;
var todoLi = document.querySelector("#todo-li") ;
var todoButton = document.querySelector("#btn") ;
var todoDiv = document.querySelector("#todo-div") ;
// var todoLi =   document.querySelector("li") ;

todoButton.addEventListener("click",(e) => {
  e.preventDefault() ;

  var todoDive = todoDiv.appendChild(document.createElement("div")) ;
  todoDive.classList.add("todo")

  var todoItem = todoDive.appendChild(document.createElement("li")) ;
  todoItem.innerHTML = todoLi.value ;
  todoItem.classList.add("list-item") ;

  var deleTe = todoDive.appendChild(document.createElement("button")) ;
  deleTe.classList.add("deletBtn") ;
  deleTe.innerHTML = 'del'

  todoLi.value = ""

});

todoDiv.addEventListener("click",function(ed){
    var it = ed.target ;

    if(it.classList[0] == 'deletBtn'){
      const todo = it.parentElement
        todo.remove() ;
    }

})

