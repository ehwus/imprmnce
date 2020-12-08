describe("SingleNoteView", () => {
  let fakeNote = {
    readNote() {
      return "I'm a note";
    },
  };
  let singlenote = new SingleNoteView(fakeNote);

  it("takes a single note as a parameter", () => {
    isEqual(singlenote.note.readNote(), fakeNote.readNote());
  });

  describe("getHTML()", () => {
    it("returns formatted HTML", () => {
      let expectedHTML = "<div>I'm a note</div>";
      isEqual(expectedHTML, singlenote.getHTML());
    });
  });
});
