import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css'
import Admin from './Pages/Admin';
import Home from './Pages/Home';
import Error404 from './Pages/Error404';

function App() {

  return (
    <div>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='*' element={<Error404 />} />
        {/* <Route path='*' element={<Navigate to="/" />} /> */}
    </Routes>

  </div>
  )

}

export default App
