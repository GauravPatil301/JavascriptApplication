const notesContainer = document.querySelector(".notes-container")
const createBtn = document.querySelector(".btn")
let notes = document.querySelectorAll(".input-box")

function showNotes() {
    // notesContainer.innerHTML = localStorage.getItem("notes")
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
        notesContainer.innerHTML = storedNotes;
    }
}
showNotes()
function updateStorage() {
    let data = localStorage.setItem("notes",notesContainer.innerHTML)
    console.log(data)
}

createBtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box"
    inputBox.setAttribute("contenteditable","true")
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img)
    notes = document.querySelectorAll(".input-box");
})
notesContainer.addEventListener("click",function (e) {
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        updateStorage();
    }else if(e.target.tagName.toLowerCase() == 'p'){
        notes = document.querySelectorAll(".input-box")
        notes.forEach(note =>{
            note.onkeyup = function () {
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown",event=>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak")
        event.preventDefault()
    }
})

