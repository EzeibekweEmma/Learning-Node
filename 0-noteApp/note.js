const { writeFileSync, readFileSync } = require("fs");
const notePath = "./note.json";

const fetchNote = () => {
  // Getting notes from note.json
  let prevNotes = readFileSync(notePath);
  prevNotes = JSON.parse(prevNotes);
  return prevNotes;
};

const fetchTryCatchBlock = (message) => {
  // fetching and catching errors
  let notes;
  try {
    notes = fetchNote();
  } catch (e) {
    notes = [];
    console.log(message);
  }
  return notes;
};

const saveNote = (notes) => {
  // Saving note
  writeFileSync(notePath, JSON.stringify(notes));
};

const addNote = (title, body) => {
  // adding a new note
  let note = {
    title,
    body,
  };
  let notes = fetchTryCatchBlock("Created new file");

  // checking if title exits before
  const duplicateTitle = notes.filter(
    (note) => note.title.toLowerCase() === title.toLowerCase()
  );
  if (duplicateTitle.length === 0) {
    notes.push(note);
    saveNote(notes);
    console.log("Added new note");
  } else console.log(`Error: ${title} already exist`);
};

const getAll = () => {
  // list all note
  let notes = fetchTryCatchBlock(`Error: getting note from ${notePath}`);
  notes.length === 0
    ? console.log("No note found")
    : notes.map((note) => console.log(note.title));
};

const readNote = (title) => {
  // reading a note
  let notes = fetchTryCatchBlock(`Error: getting note from ${notePath}`);

  // getting note body by the title pass
  const checkNote = notes.find(
    (note) => note.title.toLowerCase() === title.toLowerCase()
  );
  checkNote
    ? console.log(`Title: ${checkNote.title}\n${checkNote.body}`)
    : console.log(`${title} does not exist!`);
};

const update = (title, body) => {
  // Updating an existing note
  let isTitle = false;

  let notes = fetchTryCatchBlock(`Error: getting note from ${notePath}`);

  notes = notes.map((note) => {
    // checking if title exits
    const checkTitle = note.title.toLowerCase() === title.toLowerCase();
    if (checkTitle) {
      isTitle = true;
      const noteToUpdate = note;
      // updating the note
      noteToUpdate.body = body;
      return noteToUpdate;
    } else return note;
  });

  if (isTitle) {
    saveNote(notes);
    console.log(`Updated ${title} note`);
  } else console.log(`Error: ${title} doesn't exist`);
};

const deleteNote = (title) => {
  // deleting note by title name
  let notes = fetchTryCatchBlock(`Error: getting note from ${notePath}`);

  // checking if title exist
  const checkNote = notes.find(
    (note) => note.title.toLowerCase() === title.toLowerCase()
  );
  if (checkNote) {
    notes = notes.filter(
      (note) => note.title.toLowerCase() !== title.toLowerCase()
    );
    saveNote(notes);
    console.log(`${title} deleted`);
  } else console.log(`${title} does not exist!`);
};

module.exports = {
  addNote,
  getAll,
  readNote,
  update,
  deleteNote,
};
