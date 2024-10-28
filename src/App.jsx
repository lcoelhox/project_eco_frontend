import Login from './pages/login'
import Map from './pages/Map'
import Register from './pages/Register'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/map' element={<Map />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
