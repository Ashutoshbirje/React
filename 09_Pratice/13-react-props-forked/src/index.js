import React from "react";
import ReactDOM from "react-dom";

// Custum attirbute to HTML element : React Props

function Card(Props) {
  console.log(Props);
  return (
    <div className="MY-STYLE ">
      <h2>{Props.name}</h2>
      <img src={Props.img} alt="avatar_img" />
      <p>{Props.tel}</p>
      <p>{Props.email}</p>
    </div>
  );
}

// Every thing in custom tag is reffer as custum props
ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    ></Card>
    <Card
      name="Beyonce"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    ></Card>
    <Card
      name="Beyonce"
      img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      tel="+123 456 789"
      email="b@beyonce.com"
    ></Card>
  </div>,
  document.getElementById("root")
);

// HTML Attributes
// <Html_tag attribute="value"/>
// (select_element) . (attribute_name)

// React Props
// <Cust_tag Cust_attribute="value"/>
// function Cust_tag(props){
// return <htmp_tag>
//   {props.Cust_attribute}
//  <html_tag>
// }
