import Note from "./Note";

function NotesList(props) {
  return (
    <div className="justify-content-between">
      {props.notes.map((note) => (
        <Note
          key={note.dateCreated}
          dateCreated={note.dateCreated}
          value={note.value}
        />
      ))}
      ;
    </div>
  );
}

export default NotesList;
