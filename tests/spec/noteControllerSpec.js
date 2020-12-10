describe("NoteController", () => {
    it("Initialises with a noteListView", () => {
        let fakeNoteListView = { }
        let fakeElement;
        let controller = new NoteController(fakeNoteListView, fakeElement);
        isSameType(controller.noteListView, fakeNoteListView)
    });

    it("inserts HTML into given element", () => {
        let fakeNoteListView = {
            getHTML: () => {
                return `<h1>TestHTML</h1>`;
            }
        }
        let fakeElement = {
            innerHTML: ""
        }
        let controller = new NoteController(fakeNoteListView, fakeElement);
        controller.insertHTML(fakeElement)
        isEqual(fakeElement.innerHTML, '<h1>TestHTML</h1>')
    });
})