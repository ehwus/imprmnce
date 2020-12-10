describe("NoteController", () => {
  it("Initialises with a noteListView", () => {
    let fakeNoteListView = {};
    let fakeElement;
    let controller = new NoteController(fakeNoteListView, fakeElement);
    isSameType(controller.noteListView, fakeNoteListView);
  });

  it("inserts noteList HTML into given element", () => {
    let fakeNoteListView = {
      getHTML: () => {
        return `<h1>TestHTML</h1>`;
      },
    };
    let fakeElement = {
      innerHTML: "",
    };
    let controller = new NoteController(fakeNoteListView, fakeElement);
    controller.insertListHTML(fakeElement);
    isEqual(fakeElement.innerHTML, "<h1>TestHTML</h1>");
  });

  it("inserts HTML of element with correct ID", () => {
    let fakeNoteListView = {
      list: {
        notes: [
          {
            id: 1,
            readNote: () => {
              return "Hello World";
            },
          },
        ],
      },
    };

    let fakeElement = {
      innerHTML: "",
    };

    class fakeSingleView {
      constructor(note) {
        this.note = note;
      }

      getHTML() {
        return `<div>${this.note.readNote()}</div>`;
      }
    }

    let controller = new NoteController(fakeNoteListView, fakeSingleView);
    controller.insertNoteHTML(1, fakeElement);
    isEqual(fakeElement.innerHTML, "<div>Hello World</div><a href="/">Back</a>");
  });
});
