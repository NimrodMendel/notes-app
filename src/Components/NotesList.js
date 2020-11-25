import React from "react";
import { Row, Col } from "react-bootstrap";
import Note from "./Note";

function NotesList(props) {
  return (
    <div className="justify-content-between">
      <Row>
        {props.notes.map((note, index) => (
          <Col xs={12} sm={6} md={4} className="mx-auto mt-5">
            <Note
              value={note.value}
              index={index}
              dateCreated={note.dateCreated}
              handleDeleteNote={() => props.handleDeleteNote(index)}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default NotesList;
