import React from "react";
import { Grid, Button, CardContent, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import MyModal from "../Modal/Modal";
import "./Note.css";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      updatedTitle: "",
      updatedText: "",
      updatedAt: "",
    };
    this.index = props.index;
  }

  showModal() {
    this.setState({ isOpen: true });
  }

  closeModal() {
    this.setState({ isOpen: false });
  }

  handleOnUpdatedTitle(event) {
    this.setState({ updatedTitle: event.target.value });
  }

  handleOnUpdatedText(event) {
    this.setState({ updatedText: event.target.value });
  }

  handleSubmitUpdate() {
    this.setState((state) => {
      return { updatedAt: new Date().toLocaleString() };
    });
    const index = this.index;
    const newTitle = this.state.updatedTitle;
    const newText = this.state.updatedText;
    const updatedAt = this.state.updatedAt;

    const noteToChange = {
      index,
      newTitle,
      newText,
      updatedAt,
    };

    this.props.onUpdateNote(noteToChange);
    this.setState({ isOpen: false });
  }

  render() {
    const dateCreated = this.props.dateCreated;
    const noteText = this.props.value; //  note text
    const index = this.props.index; // used for indexation of the notes
    const title = this.props.title === "" ? "New Note" : this.props.title; // Add a note title if available

    return (
      <div className="card" key={index}>
        <CardContent>
          <h2 className="card-title">{title}</h2>
          <Typography color="textSecondary" variant="subtitle1">
            {!this.state.updatedAt
              ? dateCreated
              : this.state.updatedAt + ` (Updated)`}
          </Typography>
          <p className="card-text">{noteText}</p>
        </CardContent>

        <Grid row container justify="space-around">
          <Grid item>
            <Button
              className="card-button"
              variant="contained"
              color="primary"
              onClick={() => this.showModal(true)}
              startIcon={<EditIcon />}
            >
              Edit
            </Button>
          </Grid>
          <Grid item>
            <Button
              className="card-button"
              variant="contained"
              color="secondary"
              startIcon={<DeleteIcon />}
              onClick={() => this.props.handleDeleteNote(index)}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
        <MyModal
          open={this.state.isOpen}
          title={title}
          text={noteText}
          handleClose={() => this.closeModal()}
          handleSubmitUpdate={() => this.handleSubmitUpdate()}
          onUpdateText={(event) => this.handleOnUpdatedText(event)}
          onUpdateTitle={(event) => this.handleOnUpdatedTitle(event)}
        />
      </div>
    );
  }
}
export default Note;
