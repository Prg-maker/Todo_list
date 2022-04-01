import { Global } from "./styles/Global"

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { ListTasks } from "./pages/ListTasks"
import { CreateTask } from "./pages/CreateTask"


function App() {

  return (
   <>
    <BrowserRouter>
      <Global/>
      <Routes>
        
        <Route path="/create" element={<CreateTask/>}/>
        <Route path="/" element={<ListTasks/>}/>

      </Routes>
    
    </BrowserRouter>
   </>
  )
}

export default App
