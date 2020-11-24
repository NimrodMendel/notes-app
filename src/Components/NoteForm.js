import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Note from "./NotesList";
import "./NoteForm.css";

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  onSubmit(event) {
    event.preventDefault();
    const newNote = {
      value: this.state.value,
      dateCreated: new Date().toLocaleString(),
    };
    this.setState((state) => {
      return { value: "" };
    });
    this.props.onAddNote(newNote);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <Container fluid>
        <Form onSubmit={(event) => this.onSubmit(event)}>
          <Row className="justify-content-center">
            <Form.Group controlId="note-text">
              <Form.Label>Add a Note: </Form.Label>
              <Form.Control
                value={this.state.value}
                onChange={(event) => this.handleChange(event)}
                className="text-area"
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
