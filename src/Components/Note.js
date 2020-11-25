import { Card, Button } from "react-bootstrap/";
import "./Note.css";

function Note(props) {
  const dateCreated = props.dateCreated;
  const note = props.value;
  const index = props.index;

  return (
    <Card key={index} className="card w-auto h-auto justify-content-center p-3">
      <Card.Title className="card-title">Note</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{dateCreated}</Card.Subtitle>
      <Card.Text className="card-text">{note}</Card.Text>
      <Button
        variant="danger"
        className="card-button w-auto mx-5"
        onClick={() => props.handleDeleteNote(index)}
      >
        Delete <i className="far fa-trash-alt ml-1"></i>
      </Button>
    </Card>
  );
}
export default Note;
