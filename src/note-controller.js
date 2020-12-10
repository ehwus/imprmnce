class NoteController {
    constructor(noteListView) {
        this.noteListView = noteListView;
    }

    insertHTML(element) {
        element.innerHTML += this.noteListView.getHTML();
    }
}