describe("Note", () => {
    it("creates a note with a body of text", () => {
        let sampleInput = "hello I'm a test"
        let testNote = new Note(sampleInput);
    
        isEqual(testNote.readNote(), sampleInput)
    });

    it("initialises with a unique ID", () => {
        let note1 = new Note("foo")
        let note2 = new Note("bar")
        isEqual(note1.id + 1, note2.id)
    })
});
