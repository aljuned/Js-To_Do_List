let root = document.querySelector("#root");

let jumbortonDiv = document.createElement("div");

jumbortonDiv.className = "jumbotron text-center fix my-5"
jumbortonDiv.setAttribute("id", "my-jmb")
root.appendChild(jumbortonDiv)

let h1 = document.createElement("h1")
h1.className = "display-4 py-1"
h1.innerText = "To Do List"
jumbortonDiv.appendChild(h1)


let inputText = document.querySelector("#inputText");
let ul = document.querySelector("#nameList");

inputText.style.borderColor = "red";
ul.style.color = "red";

inputText.addEventListener("keypress", (event) => {

    if (event.keyCode === 13) {
        let name = event.target.value
        createLi(ul, name)
        event.target.value = ""
    }
});

function createLi(ul, name) {
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.style.background = "rgb(193, 200, 241)";
    li.style.color = "black";
    li.style.fontWeight = "bold";
    li.innerHTML = name;

    let edit = document.createElement("button")
    edit.innerHTML = "Edit"
    edit.className = "ml-2 btn"
    edit.style.color = "#222"
    edit.style.float = "right"
    edit.style.cursor = "pointer"

    edit.addEventListener("click", () => {
        let editable = document.createElement("input")
        li.appendChild(editable)

        editable.addEventListener("keypress", (event) => {
            if (event.keyCode === 13) {
                let editName = event.target.value
                li.innerHTML = editName;
                li.appendChild(edit)
                li.appendChild(span);
                event.target.value = ""
            }
        });

    });

    let span = document.createElement("button")
    span.innerHTML = "Close"
    span.className = "ml-auto btn"
    span.style.color = "#222"
    span.style.float = "right"
    span.style.cursor = "pointer"

    span.addEventListener("click", () => {
        ul.removeChild(li)
    })

    li.appendChild(edit)
    li.appendChild(span);
    ul.appendChild(li);

}