import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function Createcard(contact) {
  return (
    <Card
      id={contact.id}
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(Createcard)}
    </div>
  );
}

export default App;
