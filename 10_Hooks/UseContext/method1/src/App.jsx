import { createContext ,useState} from 'react'
import './App.css'
import ChildA from './components/childA';

const UserContext = createContext();

// step 1: Create context

// step 2: Wrap all the child inside a provider

// step 3: Pass value

// step 4: Consume inside the consumer

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
