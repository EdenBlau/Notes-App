const addBtn = document.getElementById('add');

addBtn.addEventListener('click', addNewNote);

function addNewNote(text = '') {
    const newNote = document.createElement('div');
    newNote.classList.add('note');

    newNote.innerHTML = `
        <div class="note-buttons">
            <button class="edit" alt="edit">
                <img src="/images/edit-icon.jpg" width="25px" height="20px">
            </button>
            <button class="delete" alt="delete>
                <img src="/images/delete-icon.jpg" alt="delete" width="35px" height="20px">
            </button>
        </div>
        <div class="main ${text ? "" : "hidden"}></div>
        <textarea class="${text ? "hidden" : ""}></textarea>
        `;

    document.body.appendChild(newNote);

    const editBtn = newNote.querySelector('.edit');
    const deleteBtn = newNote.querySelector('.delete');
    const main = newNote.querySelector('.main');
    const textArea = newNote.querySelector('textarea');

    deleteBtn.addEventListener('click', () => {
        newNote.remove()
    });

    // editBtn.addEventListener('click', () => {
    //     main.classList.toggle('hidden');
    //     textArea.classList.toggle('hidden');
    // });



}
