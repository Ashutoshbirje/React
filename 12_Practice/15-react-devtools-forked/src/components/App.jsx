import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avtar from "./Avtar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avtar img="https://www.dynamitenews.com/images/2020/11/05/virat-kohli-turns-32-cricket-fraternity-extends-birthday-wishes/5fa375512b459.jpeg" />
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
