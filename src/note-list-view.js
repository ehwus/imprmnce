class noteListView {
    constructor(noteList) {
        this.list = noteList;
    }

    getHTML() {
        let returnString = "<ul>"
        for (let note of this.list.notes) {
            returnString += `<li><div>${note.readNote().slice(0, 20) + '...'}</div></li>`
        }
        returnString += "</ul>"
        return returnString;
    }
}