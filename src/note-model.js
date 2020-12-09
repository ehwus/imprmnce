// In here, I will re-define the note.
// What is a Note?
// Since time immemorial, man has noted things
// We can look at notings from history
// BUT SHOULD WE BE ABLE TO?
// What if note but self destroy?
// like in tom cruise film?

class Note {
    static ID = 1

    constructor(text) {
        this.text = text;
        this.id = Note.ID;
        Note.ID++;
    }

    readNote = function() {
        return this.text;
    }
}