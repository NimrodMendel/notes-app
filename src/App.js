import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NoteForm from "./Components/NoteForm";
import NotesList from "./Components/NotesList";
import Title from "./Components/Title";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }

  handleOnAddNote(newNote) {
    this.setState((state) => {
      return { notes: [newNote, ...state.notes] };
    });
  }

  handleDeleteNote(noteToDelete) {
    this.setState((state) => ({
      ...state,
      notes: this.state.notes.filter((item, index) => index !== noteToDelete),
    }));
  }

  render() {
    return (
      <div className="app px-5">
        <Title />
        <NoteForm
          onAddNote={(newNote) => this.handleOnAddNote(newNote)}
        ></NoteForm>
        <NotesList
          className="justify-content-center"
          notes={this.state.notes}
          handleDeleteNote={(noteToDelete) =>
            this.handleDeleteNote(noteToDelete)
          }
        />
      </div>
    );
  }
}
export default App;
