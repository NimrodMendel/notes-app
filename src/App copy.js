import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Title from "./Components/Title.js";
import NoteForm from "./Components/NoteForm";
import NotesList from "./Components/NotesList";

function App() {
  return (
    <div className="App">
      <Title />
      <NoteForm /> 
    </div>
  );
}

export default App;
