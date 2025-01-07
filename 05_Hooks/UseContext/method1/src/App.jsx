import { createContext ,useState} from 'react'
import './App.css'
import ChildA from './components/childA';

// step 1:  create context
const UserContext = createContext();
// step 2:  wrap all the child inside a provider

// step 3: pass value

// step 4: consume inside the consumer

function App() {
  const [user, setUser] = useState({name: "Light"});

  return (
    <>
    <UserContext.Provider value={{user,setUser}}>
      <div id="container" style={{backgroundColor:(user==="Light")?"beige":"red"}}>
        <ChildA/>
      </div>
    </UserContext.Provider>
    </>
  )
}

export default App
export {UserContext}
