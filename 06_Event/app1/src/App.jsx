
import './App.css'

function App() {

   
  function handleClick(){
     alert("I am clicked");
  }

  function handleMousehover(){
    alert("Mouse is on Para");
  }

  
  function handleInputChange(){
       console.log("Input is filled");
  }

  function handleInputChange1(e){
    console.log("Input is filled", e.target.value);
 }

 function handleSubmit(e){
  e.preventDefault();
  // custom behavioir
  alert("Final Submission");
}

  return (
    <>
    <div className="button-container">
      {/* Immediate Invocation */}
      {/* <button className="custom-button" onClick={alert("I am clicked")}>
        Click Me
      </button> */}
      <button className="custom-button" onClick={handleClick}>
        Click Me
      </button>
      <button className="custom-button" style={{backgroundColor:"red"}} onMouseOver={handleMousehover}>
        Para
      </button>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} />
        <br></br>
        <input type="text" onChange={(e)=>handleInputChange1(e)} />
        <button  className="custom-button" type="submit">Submit</button>
      </form>
    </div>
    </>
  )
}

export default App
