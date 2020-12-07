describe("Note", () => {
    it("creates a note with a body of text", () => {
        let sampleInput = "hello I'm a test"
        let testNote = new Note(sampleInput);
    
        isEqual(testNote.readNote(), sampleInput)
    });
});
