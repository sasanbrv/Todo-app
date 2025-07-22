

//change Theme ----------------
function changeTheme(btn){
    document.querySelector("body").classList.toggle("dark")
    if(btn.innerHTML === `<img src="./images/icon-sun.svg" alt="">`){
        btn.innerHTML = `<img src="./images/icon-moon.svg" alt="">`
    }else if ( btn.innerHTML === `<img src="./images/icon-moon.svg" alt="">`){
        btn.innerHTML = `<img src="./images/icon-sun.svg" alt="">`
    }
}
//-----------------------------

//add todo --------------------
function addTodo(btn){
    const error = document.getElementById("error")
    if (btn.closest("#addTodoBox").querySelector("#newTodoText").value.trim() === "") {
      error.style.display = "inline";
      return
    } else {
      error.style.display = "none";
    }
    const newTodo = btn.closest("#addTodoBox").querySelector("#newTodoText").value
    const newLi = document.createElement("li")
    newLi.classList = "relative group flex px-4 py-3 border-bottom active"
    newLi.innerHTML = `<button onclick="completeTodo(this)" class="circle mt-1"></button>
                <p class="w-full pl-4 todoText"></p>
                <button onclick="deleteTodo(this)" class="absolute top-4 right-3 hidden group-hover:block"><img src="./images/icon-cross.svg" alt=""></button>`
    newLi.querySelector(".todoText").textContent = newTodo
    document.querySelector("#todoList").appendChild(newLi)
    updateCount()
    
}
//---------------------------------

//delete todo ---------------------
function deleteTodo(btn){
    btn.closest("li").remove()
    updateCount()
}
//--------------------------------

//drag and drop ------------------------------
new Sortable(document.getElementById('todoList'), {
    animation: 150
  });
  //---------------------------------------------

//update count
function updateCount(){
  const List = document.getElementById("todoList");
  const items = List.getElementsByTagName("li");
  const itemsCount = items.length;
  document.getElementById("countInf").textContent = ("count of all items: ") + itemsCount 
}
updateCount()
//-----------------------------------------------------------

//filter All/Active/Complete---------------------------
function todoFilter(filter,selectBtn){
    const items = document.getElementById("todoList").querySelectorAll("li")

    items.forEach(e => {
        e.style.display = "flex"

        if(filter === "active" && !e.classList.contains("active")){
            e.style.display = "none"
        }
        else if (filter === "complete" && !e.classList.contains("complete")){
            e.style.display = "none"
        }
    });

    const btns = document.querySelectorAll(".filter-btn")

    btns.forEach(e => {
        e.classList.remove("activebtn")
    });
    selectBtn.classList.add("activebtn")
}
//------------------------------------------------------------

//clear All of Todo--------------------------------------------
function clearAll(){
    document.getElementById("todoList").innerHTML = ""
    updateCount()
}
//---------------------------------------------

//complete todo 

function completeTodo(btn){
    if(btn.classList.contains("complete-circle")){
        btn.innerHTML = ""
    }else if (btn.classList.contains("circle")){
        btn.innerHTML = `<img src="./images/icon-check.svg" alt="" class="pl-1">`
    }
    btn.classList.toggle("complete-circle")
    btn.classList.toggle("circle")
    const todoLi = btn.closest("li")
    todoLi.classList.toggle("complete")
    todoLi.classList.toggle("active")
    todoLi.querySelector("p").classList.toggle("complete-text")

}

