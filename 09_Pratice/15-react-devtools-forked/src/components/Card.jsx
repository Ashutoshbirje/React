import React from "react";
import Avtar from "./Avtar";
import Detail from "./detail";
// App > Card > Avtar
function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avtar img={props.img}></Avtar>
      </div>

      <div className="bottom">
        <Detail detailInfo={props.tel} />
        <Detail detailInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
