const submit = document.getElementById("sub")
let todoArray = [];
let formToReset = document.querySelector("form")
submit.addEventListener("click",function(event){
    event.preventDefault();
    let newLi = document.createElement("p");
    let text = document.getElementById("newTodo").value;
    todoArray.push(text);
    localStorage.setItem("todos", JSON.stringify(todoArray));
    newLi.innerText= text;
    const memeDiv = document.createElement("div")
    let removeButton = document.createElement("button")
    let completedButton = document.createElement("button")
    completedButton.innerText = "Complete"
    removeButton.innerText = "Remove"
    removeButton.addEventListener("click", function(e){
        e.preventDefault()
        let removedText = e.target.parentNode.querySelector("p").innerText
        let dummyArray = todoArray
        for (let i =0; i < todoArray.length; i++){
            if (todoArray[i]==removedText){
                dummyArray.splice(i,1)
            }
        }
        todoArray = dummyArray
        localStorage.setItem("todos", JSON.stringify(todoArray));
        e.target.parentNode.remove()

    })
    completedButton.addEventListener("click",function(e){
        e.preventDefault()
        console.log(e.target.parentNode.childNodes[0].className)
        if (!e.target.parentNode.childNodes[0].classList.contains("completed")){
            e.target.parentNode.childNodes[0].className = "completed"
        }
        else{
            e.target.parentNode.childNodes[0].classList.remove("completed")
        }
    })
    const memeContainer = document.querySelector("#meme-container");
    
    memeDiv.append(newLi)
    memeDiv.append(removeButton)
    memeDiv.append(completedButton)
    memeContainer.append(memeDiv)
    formToReset.reset()
})
function MakeTodos(){
    const todosJSON = localStorage.getItem('todos');
    let todosArray;
    if (todosJSON == ""){
        todosArray = []
    }
    else{
        todosArray = JSON.parse(todosJSON);
    }
    for (let todo of todosArray) {
        console.log(todo)
        const div = document.createElement("div")
        let p = document.createElement("p")
        p.innerText = todo
        div.appendChild(p)
        let removeButton = document.createElement("button")
        let completedButton = document.createElement("button")
        completedButton.innerText = "Complete"
        removeButton.innerText = "Remove"
        removeButton.addEventListener("click", function(e){
            todoArray = JSON.parse(localStorage.getItem("todos"))
            e.preventDefault()
            let removedText = e.target.parentNode.querySelector("p").innerText
            let dummyArray = todoArray
            console.log(todoArray)
            for (let i =0; i < todoArray.length; i++){
                if (todoArray[i]==removedText){
                    dummyArray.splice(i,1)
            }
        }
            todoArray = dummyArray
            localStorage.setItem("todos", JSON.stringify(todoArray));
            console.log(e.target.parentNode)
            e.target.parentNode.remove()
        })
        completedButton.addEventListener("click",function(e){
            e.preventDefault()
            if (!e.target.parentNode.childNodes[0].classList.contains("completed")){
                e.target.parentNode.childNodes[0].className = "completed"
            }
            else{
                e.target.parentNode.childNodes[0].classList.remove("completed")
            }
        })
        div.appendChild(removeButton)
        div.appendChild(completedButton)
        let body = document.querySelector("body")
        body.appendChild(div)
        console.log(div)
}
}

window.addEventListener("load", (event) => {
    MakeTodos()
  })
  


