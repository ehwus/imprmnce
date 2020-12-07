describe("NoteListView", () => {
    let listy = {
        notes: [
            {
                readNote() {
                    return 'I love notes';
                }
            },
            {
                readNote() {
                    return 'I really hate notes';
                }
            }
        ]
    }

    it('should instantiate with a note list',() => {
        let notelistview = new noteListView(listy);
        console.log(notelistview)
        isEqual(notelistview.list.notes[0].readNote(), 'I love notes')
    });

});