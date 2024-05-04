import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './views/Home'
import Create from './views/Create'
import Edit from './views/Edit'
import Info from './views/Info'
function App() {

  return (
    <>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/character/:id/edit' element={<Edit/>}/>
      <Route path='/character/:id/details' element={<Info/>}/>
    </Routes>
    </>
  )
}

export default App
