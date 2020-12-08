class NoteList {
    constructor(noteClass = Note) {
        this.noteClass = noteClass;
        this.notes = [];
    }

    addNote(note) {
        this.notes.push(new this.noteClass(note))
    }
}