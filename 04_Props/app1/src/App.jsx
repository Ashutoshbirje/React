import './App.css'
import Usercard from './Components/Usercard'

function App() {
  return (
      <div>
        <Usercard name="Shriram Walwalkar" style={{"background-color":"blue"}}></Usercard>
        <Usercard name="Sarthak Mahadik"></Usercard>
        <Usercard name="Ashutosh Birje"></Usercard>
      </div>
  )
}

export default App
