let noteList = new NoteList
noteList.addNote("Hello World")
noteList.addNote("Test part two")
let listOfNotes = new noteListView(noteList)

const app = document.getElementById('app');
app.innerHTML = listOfNotes.getHTML();

