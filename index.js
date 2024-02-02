const addBtn = document.getElementById('add');
addBtn.addEventListener('click', () => addNewNote());

function addNewNote(text = '') {
    const note = document.getElementById('note');
    note.style.display = 'block';
}



