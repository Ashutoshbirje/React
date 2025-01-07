import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function create(notedata) {
  return (
    <Note
      key={notedata.key}
      title={notedata.title}
      content={notedata.content}
    />
  );
}

function App() {
  return (
    <div>
      <Header />
      <Note title="d" content="x" />
      {notes.map(create)}
      <Footer />
    </div>
  );
}

export default App;
