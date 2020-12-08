describe("NoteListView", () => {
  let listy = {
    notes: [
      {
        readNote() {
          return "I love notes";
        },
      },
      {
        readNote() {
          return "I really hate notes";
        },
      },
    ],
  };

  let notelistview = new noteListView(listy);

  it("should instantiate with a note list", () => {
    isEqual(notelistview.list.notes[0].readNote(), "I love notes");
  });

  it("should return a string of HTML of the note list", () => {
    let htmlString =
      "<ul><li><div>I love notes...</div></li><li><div>I really hate notes...</div></li></ul>";
    isEqual(notelistview.getHTML(), htmlString);
  });

  it("should only display 20 characters", () => {
    let longListy = {
      notes: [
        {
          readNote() {
            return "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal. Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.";
          },
        },
      ],
    };
    let brevity =
      "<ul><li><div>" +
      longListy.notes[0].readNote().slice(0, 20) +
      "..." +
      "</div></li></ul>";
    let longBoiHolder = new noteListView(longListy);
    isEqual(longBoiHolder.getHTML(), brevity);
  });
});
