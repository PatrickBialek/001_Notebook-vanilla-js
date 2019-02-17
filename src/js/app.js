import { Note } from "./note.js";
import { Storage } from "./storage.js";

// Variables
const titleField = document.querySelector("#note-title"),
	textField = document.querySelector("#note-content"),
	addNew = document.querySelector("#note-add"),
	notebookField = document.querySelector("#notes-container"),
	selectImportance = document.querySelector("#select-importance");

const note = new Note();
const storage = new Storage();

// Listeners
addNew.addEventListener("click", note.addNote);
notebookField.addEventListener("click", note.removeNote);
document.addEventListener("DOMContentLoaded", storage.totalStorageOnLoad);

export { note, storage, titleField, textField, notebookField, selectImportance };
