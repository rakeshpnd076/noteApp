const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll('.input-box');


// to show the data on browser reopening the browser from localStorage
// function showNotes() {
//     notesContainer.innerHTML = localStorage.getItem('notes');
// }
// showNotes();


function updateStorage() {
    localStorage.setItem('notes', notesContainer.innerHTML);
}

// to create text box on click of createnotes.
createBtn.addEventListener('click', ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement('img');
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', 'true'); //due to content editable, delete btn also captures deletion
    img.src = 'images/delete.png';
    notesContainer.appendChild(inputBox).appendChild(img);
})

// to remove text box when user clicks on delete button
notesContainer.addEventListener('click', function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    // to update the data in broswer's localStorage if user changes data 
    else if (e.target.tagName === "P"){
        notes = document.querySelectorAll('.input-box');
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

//when we press Enter key, p tag will introduce linebreak escaping from its default behaiviour
document.addEventListener('keydown', e => {
    if (e.key === "ENTER") {
        document.execCommand("insertLineBreak");
        e.preventDefault();        
    }
})

