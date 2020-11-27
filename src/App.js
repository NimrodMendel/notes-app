import React from "react";
import "./App.css";
import NoteForm from "./Components/NoteForm/NoteForm";
import Title from "./Components/Title/Title";
import Note from "./Components/Note/Note";
import { Grid } from "@material-ui/core";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }

  /**
   * The function adds a new note to the array by changing the state of the application
   * @param {note object} newNote
   */
  handleOnAddNote(newNote) {
    this.setState((state) => {
      return { notes: [newNote, ...state.notes] }; //  Add new nothe to list
    });
  }

  /**
   * The function handles deletion of notes by searching for the index of the required note the user wishes to delete.
   * Upon deletion, the function raises a warning message (window.confirm)
   * @param {number} noteToDelete
   */
  handleDeleteNote(noteToDelete) {
    const decision = window.confirm(
      "Are you sure you want to delete this note?"
    );
    if (decision) {
      this.setState((state) => ({
        // Search for the note the user wishes to delete and change the state
        ...state,
        notes: this.state.notes.filter((item, index) => index !== noteToDelete),
      }));
    }
  }

  onUpdateNote(updatedNote) {
    let temp = [...this.state.notes];
    if (updatedNote.newTitle) {
      temp[updatedNote.index].title = updatedNote.newTitle;
    }
    if (updatedNote.newText) {
      temp[updatedNote.index].value = updatedNote.newText;
    }
    temp[updatedNote.index].updatedAt = updatedNote.updatedAt;
    this.setState({ notes: temp });
  }

  render() {
    return (
      <div>
        <Title />
        <NoteForm
          onAddNote={(newNote) => this.handleOnAddNote(newNote)}
        ></NoteForm>
        <Grid row container justify="space-evenly" className="notes-container">
          {this.state.notes.map((note, index) => (
            <Grid item xs={12} sm={6} md={4}>
              <Note
                title={note.title}
                value={note.value}
                index={index}
                dateCreated={note.dateCreated}
                onUpdateNote={(updatedNote) => this.onUpdateNote(updatedNote)}
                handleDeleteNote={() => this.handleDeleteNote(index)}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}
export default App;
