import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function crateNote(note){
  return(  
  <Note 
    key={note._id}
    title={note.title}
    noteBody={note.noteBody}
     />
  );
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(crateNote)}
      <Footer />
    </div>
  );
}

export default App;
