import { Row, Col } from "react-bootstrap";
import Note from "./Note";

function NotesList(props) {
  return (
    <div className="justify-content-between">
      <Row>
        {props.notes.map((note) => (
          <Col className="col-3 mx-auto justify-content-center">
            <Note
              key={note.dateCreated}
              dateCreated={note.dateCreated}
              value={note.value}
            />
          </Col>
        ))}
        ;
      </Row>
    </div>
  );
}

export default NotesList;
