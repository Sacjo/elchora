import React, { useState } from 'react';
import Filtros from './Filtros';
import Cards from '../../Components/Cards';


const Productos = () => {
  const productosIniciales  = [
    { link: "https://www.google.com", img: "https://www.compulandia.com.py/wp-content/uploads/2023/06/APPLE-IPHONE-14-PRO-MAX-256GB-Imagen-trasera-y-frontal-color-purpura.jpg", nombre: "Celular 1", precio: "2.000", modelo: "Iphone 14",categoria: "Celulares" },
    { link: "https://www.google.com", img: "https://www.compulandia.com.py/wp-content/uploads/2023/06/APPLE-IPHONE-14-PRO-MAX-256GB-Imagen-trasera-y-frontal-color-purpura.jpg", nombre: "Celular 2", precio: "3.000", modelo: "Iphone 14 b",categoria: "Celulares" },
    { link: "https://www.google.com", img: "https://www.compulandia.com.py/wp-content/uploads/2023/06/APPLE-IPHONE-14-PRO-MAX-256GB-Imagen-trasera-y-frontal-color-purpura.jpg", nombre: "Celular 2", precio: "3.000", modelo: "Iphone 14 a",categoria: "Celulares" },
    { link: "https://www.google.com", img: "https://www.compulandia.com.py/wp-content/uploads/2023/06/APPLE-IPHONE-14-PRO-MAX-256GB-Imagen-trasera-y-frontal-color-purpura.jpg", nombre: "Celular 2", precio: "3.000", modelo: "Iphone 14 mx",categoria: "Celulares" },
    { link: "https://www.google.com", img: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/bdc/dc/fotos/KIA_Niro_01_0.jpg?tf=1080x", nombre: "Auto 1", precio: "20.000", km: "10.000", categoria: "Autos"},
    { link: "https://www.google.com", img: "https://www.alemaniacell.com/uploads/ximagen-principal863-1-1609765679.jpg.pagespeed.ic.BLhWDYc8BY.webp", nombre: "Pendrive", precio: "5", categoria: "Otros"},
  ];

  const [productos, setProductos] = useState(productosIniciales);
  const [categoriaFiltrada, setCategoriaFiltrada] = useState('Todos');

  const handleFilterChange = (categoria) => {
    setCategoriaFiltrada(categoria);
    if (categoria === 'Todos') {
      setProductos(productosIniciales);
    } else {
      const productosFiltrados = productosIniciales.filter((producto) => producto.categoria === categoria);
      setProductos(productosFiltrados);
    }
  };

  return (
    <div className='container'>
        <div className="row">
            <div className='col-12 col-md-2'>
                <Filtros onFilterChange={handleFilterChange} categoriaFiltrada={categoriaFiltrada} />
            </div>
            <div className='col-12 col-md-10'>
                <div className='row'>
                    <div className='productosLis'>
                        {productos.map((producto, index) => (
                            <Cards
                                key={index}
                                link={producto.link}
                                img={producto.img}
                                nombre={producto.nombre}
                                precio={producto.precio}
                                modelo={producto.modelo}
                                km={producto.km}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}

export default Productos