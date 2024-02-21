const addBtn = document.getElementById('add');


const notes = JSON.parse(localStorage.getItem('notes'))

if (notes) {
    notes.forEach(note => addNewNote(note))
}
addBtn.addEventListener('click', () => addNewNote());

function addNewNote(text = '') {
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `
    
        <div class="note-buttons">
            <input type="text" class="title"></input>
            <button class="edit">
                <img src="/images/edit-icon.jpg" width="25px" height="20px">
            </button>
            <button class="delete">
                <img src="/images/delete-icon.jpg" alt="delete" width="35px" height="20px">
            </button>
        </div>
        
        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="${text ? "hidden" : ""}"></textarea>

        `;



    const editBtn = note.querySelector('.edit');
    const deleteBtn = note.querySelector('.delete');
    const main = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    textArea.value = text;
    main.innerHTML = marked(text);

    deleteBtn.addEventListener('click', () => {
        note.remove();

        updateLS();
    });

    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    });

    textArea.addEventListener('input', (e) => {
        const { value } = e.target;
        main.innerHTML = marked(value);

        updateLS()
    });

    document.body.appendChild(note);
}

function updateLS() {
    const notesText = document.querySelectorAll('textarea');
    const notes = [];
    notesText.forEach(note => notes.push(note.value))
    localStorage.setItem('notes', JSON.stringify(notes))
}
