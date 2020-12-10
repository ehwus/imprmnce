class NoteController {
    constructor(noteListView, singleViewClass = SingleNoteView) {
        this.noteListView = noteListView;
        this.singleViewClass = singleViewClass;
    }

    insertListHTML(element = document.getElementById('app')) {
        element.innerHTML += this.noteListView.getHTML();
    }

    insertNoteHTML(noteID, element = document.getElementById('app')) {
        for (let note of this.noteListView.list.notes) {
            if (noteID === note.id) {
                let view = new this.singleViewClass(note);
                element.innerHTML = view.getHTML();
                return;
            }
        }
        throw new Error("Note not found");
    }
}