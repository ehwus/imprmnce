describe("NoteList", () => {
    it("initialises with an empty array", () => {
        let listy = new NoteList;
        isSameType(listy.notes, []);
    });

    describe("addNote()", () => {
        it("adds notes", () => {
            class fakeNotey {
                constructor(note) {
                    this.note = note;
                }

                readNote() {
                    return this.note;
                }
            }

            let listy = new NoteList(fakeNotey);
            let lovelyNote = "Boy do I love notes";
            listy.addNote(lovelyNote);
            isEqual(listy.notes[0].readNote(), lovelyNote);
        });
    });
});