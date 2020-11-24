import { Row, Col, Card } from "react-bootstrap/";

function Note(props) {
  const dateCreated = props.dateCreated;
  const note = props.value;
  return (
    <div>
      <Card style={{ width: "15rem", height: "10rem" }} className="ml-5 mt-5">
        <Card.Title>Note</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{dateCreated}</Card.Subtitle>
        <Card.Text>{note}</Card.Text>
      </Card>
    </div>
  );
}
export default Note;
