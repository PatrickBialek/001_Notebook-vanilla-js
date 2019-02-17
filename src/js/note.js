import { storage, titleField, textField, notebookField, selectImportance } from "./app.js";

class Note {
	addNote() {
		const title = titleField.value,
			note = textField.value,
			importance = selectImportance.value,
			dateID = Date.now();

		if (note != "" && title != "" && importance != "") {
			const newNote = `
				<div class="added-note added-note--${importance}" id="${dateID}">
					<h3 class="added-note__heading">${title}</h3>
					<p class="added-note__content">${note}</p>
					<span class="added-note__remove">&#10007;</span>
				</div>
			`;

			notebookField.innerHTML += newNote;
			storage.addNoteToTheStorage(title, note, importance, dateID);
		} else {
			alert("You have to fill title and text fields!");
		}
	}

	removeNote(e) {
		if (e.target.classList.contains("added-note__remove")) {
			const r = confirm("Are you sure?");

			if (r === true) {
				const note = e.target.parentElement,
					dataID = Number(note.id);

				note.remove();
				storage.removeFromLocalStorage(dataID);
			}
		}
	}
}

export { Note };
