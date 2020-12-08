class NoteController {
    constructor(noteList) {
        this.noteList = noteList;
    }

    insertHTML(element) {
        element.innerHTML += this.noteList.getHTML();
    }
}