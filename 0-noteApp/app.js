const yargs = require("yargs");

const note = require("./note");

// command line tools
const titleOptions = {
  describe: "Title of the note",
  demand: true,
  alias: "t",
};
const bodyOptions = {
  describe: "Body of the note",
  demand: true,
  alias: "b",
};

const command = yargs
  .command("a", "Add a new note", {
    title: titleOptions,
    body: bodyOptions,
  })
  .command("l", "List all notes")
  .command("r", "Read a note", {
    title: titleOptions,
  })
  .command("u", "Add a new note", {
    title: titleOptions,
    body: bodyOptions,
  })
  .command("d", "Remove a note", {
    title: titleOptions,
  })
  .help().argv;

if (command._[0].toLowerCase() === "a")
  note.addNote(command.title, command.body);
else if (command._[0].toLowerCase() === "l") note.getAll();
else if (command._[0].toLowerCase() === "u") note.update(command.title, command.body);
else if (command._[0].toLowerCase() === "r") note.readNote(command.title);
else if (command._[0].toLowerCase() === "d") note.deleteNote(command.title);
else message = `Command: ${command._[0]} not recognized`;
