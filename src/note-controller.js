class NoteController {
  constructor(noteListView, singleViewClass = SingleNoteView) {
    this.noteListView = noteListView;
    this.singleViewClass = singleViewClass;
  }

  insertListHTML(element = document.getElementById("app")) {
    element.innerHTML += this.noteListView.getHTML();
  }

  insertNoteHTML(noteID, element = document.getElementById("app")) {
    for (let note of this.noteListView.list.notes) {
      if (noteID === note.id) {
        let view = new this.singleViewClass(note);
        element.innerHTML = view.getHTML();
        return;
      };
    };
    throw new Error("Note not found");
  };
};

let list = new NoteList;
list.addNote("Hello World");
list.addNote("This is a test");

let listView = new noteListView(list);
let controller = new NoteController(listView);

controller.insertListHTML();
window.addEventListener('hashchange', (e) => {
    let hash = window.location.hash
    controller.insertNoteHTML(parseInt(hash.substring(1)))
});