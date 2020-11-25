import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./NoteForm.css";

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      noteTitle: "",
    };
  }

  onSubmit(event) {
    event.preventDefault(); // prevent page refreshing
    const newNote = { //  Create new note with title, value and date 
      title: this.state.title,
      value: this.state.value,
      dateCreated: new Date().toLocaleString(),
    };
    this.setState((state) => {  //  Delete content after submitting form
      return { value: "", noteTitle: "" };
    });
    this.props.onAddNote(newNote);  //  Add note to note container
  }

  handleChangeNote(event) {
    this.setState({ value: event.target.value });
  }

  handleChangeTitle(event) {
    this.setState({ noteTitle: event.target.value });
  }

  render() {
    return (
      <Container fluid>
        <Form onSubmit={(event) => this.onSubmit(event)}>
          <Row className="justify-content-center">
            <Form.Label>Title: </Form.Label>
            <Form.Group controlId="note-title">
              <Form.Control
                value={this.state.noteTitle}
                onChange={(event) => this.handleChangeTitle(event)}
                as="input"
                cols={50}
                placeholder="Title"
              />
            </Form.Group>
          </Row>
          <Row className="justify-content-center">
            <Form.Group controlId="note-text">
              <Form.Control
                value={this.state.value}
                onChange={(event) => this.handleChangeNote(event)}
                className="text-area mt-3"
                as="textarea"
                placeholder="Write your note..."
                rows={5}
                cols={50}
              />
            </Form.Group>
          </Row>
          <Row className="justify-content-center">
            <Button variant="outline-dark" type="submit" className="w-auto">
              Add a note <i className="fas fa-plus-square fa-1x"></i>
            </Button>
          </Row>
        </Form>
      </Container>
    );
  }
}
export default NoteForm;
