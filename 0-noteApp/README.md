# Note App

**This is a simple note-taking application built with Node.js. It allows users to create, read, update, and delete notes through a command-line interface.**

![Note](./Notes.png)

---

### Features:

- Create a new note with a title and body.
- View a list of all existing notes.
- Read the content of a specificed note.
- Update the content of a note.
- Delete a note.

---

### Installation:

1. Make sure you have [Node.js](https://nodejs.org/) installed on your machine.
2. Clone this repository or download the source code.
3. Open your terminal or command prompt and navigate to the project directory.
4. Run the following command to install the required dependencies:

   ```sh
   npm install
   ```

### Usage:

1. Open your terminal or command prompt and navigate to the project directory.
2. Run this command for help:
   ```sh
   node app.js --help
   ```
3. To add a new note, use the following command:

   ```sh
   node app.js a --title="Note Title" --body="Note Body"
   ```

   or

   ```sh
   node app.js a -t="Note Title" -b="Note Body"
   ```

4. To list all existing notes, use the command:

   ```sh
   node app.js list
   ```

5. To view the read of a specific note, use the following command:

   ```sh
   node app.js r --title="Note Title"
   ```

   or

   ```sh
   node app.js r -t="Note Title"
   ```

6. To update the content of a note, use the following command:

   ```sh
   node app.js a --title="Note Title" --body="Updated Note Body"
   ```

   or

   ```sh
   node app.js a -t="Note Title" -b="Updated Note Body"
   ```

7. To delete a note, use the following command:

   ```sh
   node app.js r --title="Note Title"
   ```

   or

   ```sh
   node app.js r -t="Note Title"
   ```

---

### Contributing:

If you have any suggestions, improvements, or bug fixes, please submit a pull request. Ensure that your code follows the existing code style and includes appropriate comments. Your contributions are greatly appreciated!

---

### Contact:

If you have any questions or issues regarding this project, please feel free to contact me at [Twitter](https://twitter.com/ezeibekweemma) | [LinkedIn](https://linkedin.com/in/ezeibekweemma).
