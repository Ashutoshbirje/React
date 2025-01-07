import { useState } from 'react'
import './App.css'
import Logout from './Components/Logout';
import Login from './Components/Login';

function App() {
  const [isLoggedin,setLoggedIn]=useState(true);

  // if(isLoggedin){
  //   return (
  //     <Logout state={isLoggedin} setLoggedIn={setLoggedIn}></Logout>
  //   )
  // } else {
  //   return (
  //     <Login state={isLoggedin} setLoggedIn={setLoggedIn}></Login>
  //   )
  // }

  //  return(
  //    <div>
  //     {isLoggedin ? <Logout/> : <Login/>};
  //    </div>
  //  )

  // return(
  //   <div>
  //    {isLoggedin && <Logout/>}
  //   </div>
  // )

  if(isLoggedin){
    return(
      <Login/>
    )
  }

  return(
    <div>
     {isLoggedin && <Logout/>}
    </div>
  )
  
}

export default App
