import React from "react";
import "./NoteForm.css";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { Button, Container, TextField, Grid } from "@material-ui/core";

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      noteTitle: "",
    };
  }

  /**
   * Forn submit event
   * @param {Object} event
   */
  onSubmit(event) {
    event.preventDefault(); // prevent page refreshing
    const newNote = {
      //  Create new note with title, value and date
      title: this.state.noteTitle,
      value: this.state.value,
      dateCreated: new Date().toLocaleString(),
    };
    this.setState((state) => {
      return { value: "", noteTitle: "" }; //  Delete content after submitting form
    });
    this.props.onAddNote(newNote); //  Add note to note container
  }

  /**
   * Function that called upon changing of the text of the note
   * @param {Object} event
   */
  handleOnChangeNote(event) {
    this.setState({ value: event.target.value });
  }

  /**
   * Function that called upon changing of the title of the note
   * @param {Object} event
   */
  handleOnChangeTitle(event) {
    this.setState({ noteTitle: event.target.value });
  }

  render() {
    return (
      <Container>
        <form onSubmit={(event) => this.onSubmit(event)}>
          <Grid className="form-container" container justify="center" row>
            <TextField
              value={this.state.noteTitle}
              onChange={(event) => this.handleOnChangeTitle(event)}
              className="note-title"
              placeholder="Title"
              label="Note Title"
              variant="outlined"
            />
          </Grid>
          <Grid className="form-container" container justify="center" row>
            <TextField
              value={this.state.value}
              onChange={(event) => this.handleOnChangeNote(event)}
              className="text-area"
              placeholder="Write your note..."
              label="Note Text"
              variant="outlined"
              required
              multiline
              rows={5}
            />
          </Grid>
          <Grid className="form-container" container justify="center" row>
            <Button
              variant="contained"
              type="submit"
              className="add-note-button"
              size="large"
            >
              Add note
              <AddBoxIcon className="button-icon" />
            </Button>
          </Grid>
        </form>
      </Container>
    );
  }
}
export default NoteForm;
