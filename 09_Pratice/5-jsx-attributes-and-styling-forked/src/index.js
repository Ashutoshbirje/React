import React from "react";
import ReactDOM from "react-dom";

const img1 = "https://picsum.photos/200/300";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true">My Favourite Foods</h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
    <div>
      <img
        className="player-img"
        src="https://1.bp.blogspot.com/-kp_WUVLr6Y8/XmYLHJKI6PI/AAAAAAAADNo/oFSrzb8blTQYrT6VF-WoXHMvUZcyMKrywCLcBGAsYHQ/s1600/51.jpg"
        alt="photo"
      />
      <img src={img1} alt="photo" />
    </div>
  </div>,
  document.getElementById("root")
);
