
import './App.css'
import Card from './components/Card'

function App() {
  // we can pass object as props
  // let myObj = {
  //   username: "hitesh",
  //   age: 21
  // }
  // we can pass array as props 
  // let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="Shriram" btnText="click me" />
      <Card username="Ashutosh" />
    </>
  )
}

export default App
