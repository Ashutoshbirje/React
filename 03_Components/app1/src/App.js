import React from 'react';
import './App.css';
import Bike from './components/Bike.js';

// Class component Car
class Car extends React.Component {
  constructor() {
    super(); // add parent compoent constructor 
    this.state = {type: "Car"};
  }
  // constructor(props) {
  //   super(props); // add props to parent compoent constructor 
  // }
  render() {
    return <h2>I am a {this.state.type} !</h2>;
  }
}

class Cycle extends React.Component {
  render() {
    return <h2>I am a {this.props.type} !</h2>;
  }
}

function Bus() {
  return <h2>Hi, I am a Bus!</h2>;
}

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Car /> 
      <Bus/>
      <Bike/>
      <Cycle type="cycle"/>
    </div>
  );
}

export default App;
