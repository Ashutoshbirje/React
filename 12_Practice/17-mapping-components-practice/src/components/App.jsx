import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";

function create(data) {
  return (
    <Card
      id={data.id}
      img={data.emoji}
      name={data.name}
      meaning={data.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(create)}</dl>
    </div>
  );
}

export default App;
