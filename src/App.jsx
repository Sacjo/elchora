import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css'
import Admin from './Pages/Admin';
import Home from './Pages/Home';
import Error404 from './Pages/Error404';
import { useState } from 'react';

function App() {

  const [usuario, setUsuario] = useState(null)

  return (
    <div>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/admin" element={usuario ? <Admin /> : <Error404 />} />
        <Route path='*' element={<Error404 />} />
        {/* <Route path='*' element={<Navigate to="/" />} /> */}
    </Routes>

  </div>
  )

}

export default App
