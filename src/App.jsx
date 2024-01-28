import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css'
import Admin from './Pages/Admin';
import Home from './Pages/Home';
import ProductsAll from './Pages/ProductsAll';
import Error404 from './Pages/Error404';
import DetalleProducto from './Pages/DetalleProducto';


function App() {

  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productos' element={<ProductsAll />} />
        <Route path="/producto/:id" element={<DetalleProducto />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='*' element={<Error404 />} />
        {/* <Route path='*' element={<Navigate to="/" />} /> */}
      </Routes>
    </main>
  )

}

export default App
