import { Row, Col, Card, Button } from "react-bootstrap/";
import "./Note.css";

function Note(props) {
  const dateCreated = props.dateCreated;
  const note = props.value;
  return (
    <div>
      <Card className="card w-auto mt-5 justify-content-center p-3">
        <Card.Title>Note</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{dateCreated}</Card.Subtitle>
        <Card.Text>{note}</Card.Text>
        <Button variant="danger" className="card-button w-50">
          Delete Note
        </Button>
      </Card>
    </div>
  );
}
export default Note;
