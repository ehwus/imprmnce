class noteListView {
    constructor(noteList) {
        this.list = noteList;
    }

    getHTML() {
        let returnString = "<ul>"
        for (let note of this.list.notes) {
            returnString += `<li><a href="./#${note.id}">${note.readNote().slice(0, 20) + '...'}</a></li>`
        }
        returnString += "</ul>"
        return returnString;
    }
}