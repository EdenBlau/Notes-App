const addBtn = document.getElementById('add');

addBtn.addEventListener('click', addNewNote);

function addNewNote() {
    const newNote = document.createElement('div');
    newNote.classList.add('note');

    newNote.innerHTML = `
        <div class="note-buttons">
            <button class="edit" alt="edit">
                <img src="/images/edit-icon.jpg" width="25px" height="20px">
            </button>
            <button class="delete">
                <img src="images/delete-icon.jpg" alt="delete" width="25px" height="20px">
            </button>
        </div>
        <div class="main hidden"></div>
        <textarea class="hidden"></textarea>
    `

    document.body.appendChild(newNote);
}
