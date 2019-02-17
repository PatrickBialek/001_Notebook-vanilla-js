import {
	storage,
	notebookField
} from "./app.js";

class Storage {
	addNoteToTheStorage(title, note, importance, dateID) {
		const singleNote = {
			title: title,
			note: note,
			importance: importance,
			dateID: dateID
		};

		const notes = storage.getNotesFromLocalStorage();
		notes.push(singleNote);
		localStorage.setItem("notes", JSON.stringify(notes));
	}

	getNotesFromLocalStorage() {
		let notes;
		const notesFromLocalStorage = localStorage.getItem("notes");

		if (notesFromLocalStorage === null) {
			notes = [];
		} else {
			notes = JSON.parse(notesFromLocalStorage);
		}

		return notes;
	}

	totalStorageOnLoad() {
		const notes = storage.getNotesFromLocalStorage();
		notes.forEach(note => {
			const newNote = `
				<div class="added-note added-note--${note.importance}" id="${note.dateID}">
					<h3 class="added-note__heading">${note.title}</h3>
					<p class="added-note__content">${note.note}</p>
					<span class="added-note__remove">&#10007;</span>
				</div>
			`;

			notebookField.innerHTML += newNote;
		});
	}

	removeFromLocalStorage(date) {
		let notes = storage.getNotesFromLocalStorage();
		const newArrayOfNotes = notes.filter(note => note.dateID !== date);
		notes = newArrayOfNotes;

		localStorage.setItem("notes", JSON.stringify(newArrayOfNotes));
	}
}

export {
	Storage
};