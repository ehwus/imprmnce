class SingleNoteView {
    constructor(note) {
        this.note = note;
    }

    getHTML() {
        return `<div>${this.note.readNote()}</div>`
    }
}