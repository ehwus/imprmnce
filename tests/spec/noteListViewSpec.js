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

    let notelistview = new noteListView(listy);

    it('should instantiate with a note list',() => {
        isEqual(notelistview.list.notes[0].readNote(), 'I love notes')
    });

    it('should return a string of HTML of the note list',() => {
        let htmlString = "<ul><li><div>I love notes</div></li><li><div>I really hate notes</div></li></ul>";
        isEqual(notelistview.getHTML(), htmlString);
    });

});