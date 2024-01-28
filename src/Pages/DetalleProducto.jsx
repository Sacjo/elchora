import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const productosIniciales = [
    { id: 1, link: "https://www.google.com", img: "https://www.compulandia.com.py/wp-content/uploads/2023/06/APPLE-IPHONE-14-PRO-MAX-256GB-Imagen-trasera-y-frontal-color-purpura.jpg", nombre: "Celular 1", precio: "2.000", modelo: "Iphone 14", categoria: "Celulares", descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit dolorum eveniet nostrum dolor excepturi. Placeat distinctio voluptas dicta recusandae ipsam deserunt? Dolor quasi eligendi vero delectus quidem error, tenetur pariatur." },
    { id: 2, link: "https://www.google.com", img: "https://www.compulandia.com.py/wp-content/uploads/2023/06/APPLE-IPHONE-14-PRO-MAX-256GB-Imagen-trasera-y-frontal-color-purpura.jpg", nombre: "Celular 2", precio: "3.000", modelo: "Iphone 14 b", categoria: "Celulares" },
    { id: 3, link: "https://www.google.com", img: "https://www.compulandia.com.py/wp-content/uploads/2023/06/APPLE-IPHONE-14-PRO-MAX-256GB-Imagen-trasera-y-frontal-color-purpura.jpg", nombre: "Celular 2", precio: "3.000", modelo: "Iphone 14 a", categoria: "Celulares" },
    { id: 4, link: "https://www.google.com", img: "https://www.compulandia.com.py/wp-content/uploads/2023/06/APPLE-IPHONE-14-PRO-MAX-256GB-Imagen-trasera-y-frontal-color-purpura.jpg", nombre: "Celular 2", precio: "3.000", modelo: "Iphone 14 mx", categoria: "Celulares" },
    { id: 5, link: "https://www.google.com", img: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/bdc/dc/fotos/KIA_Niro_01_0.jpg?tf=1080x", nombre: "Auto 1", precio: "20.000", km: "10.000", categoria: "Autos" },
    { id: 6, link: "https://www.google.com", img: "https://www.alemaniacell.com/uploads/ximagen-principal863-1-1609765679.jpg.pagespeed.ic.BLhWDYc8BY.webp", nombre: "Pendrive", precio: "5", categoria: "Otros" },
];

const DetalleProducto = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        const productoID = parseInt(id, 10);
        const productoEncontrado = productosIniciales.find(p => p.id === productoID);
        setProducto(productoEncontrado);
    }, [id]);

    if (!producto) {
        return <div>Producto Inexistente</div>;
    }
    return (
        <>
            <Navbar />
            <section className="container mt-5 mb-3" id='detallesProducos'>
                <div className="row justify-content-center detallesProducos" >
                    <div className="col-12 col-md-6 mt-5 mb-5 text-center">
                        <img src={producto.img} alt={producto.nombre} className="img-detallesProducos" />
                    </div>
                    <div className="col-11 col-md-6 mt-5 mb-5">
                        <h2>{producto.nombre}</h2>
                        <p>{producto.precio} $</p>
                        {producto.modelo && <p>{producto.modelo}</p>}
                        {producto.km && <p>{producto.km}</p>}
                        <p>{producto.descripcion} </p>
                        <div className="col-10" >
                            <a href="#" className='btn btn-principal px-6 py-3'>Comprar</a>
                        </div>

                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 text-center">
                        <h2>Detalles</h2>
                    </div>
                    <div class="text-center">
                        <hr class="linea" />
                    </div>
                    <div className="col-12 d-flex justify-content-center mt-2 mb-2">
                        <table>
                            <tr>
                                <td className='linea-derecha text-end pe-2 pb-2'><strong>Marca</strong>:</td>
                                <td className='text-start ps-2 pb-2'>{producto.nombre}</td>
                            </tr>
                            <tr>
                                <td className='linea-derecha text-end pe-2 pb-2'><strong>Precio</strong>:</td>
                                <td className='text-start ps-2 pb-2'>{producto.precio}</td>
                            </tr>
                            <tr>
                                {producto.modelo &&
                                <td className='linea-derecha text-end pe-2 '><strong>Modelo</strong></td>}
                                {producto.modelo &&
                                <td className='text-start ps-2 '>{producto.modelo}</td>}

                                {producto.km &&
                                <td className='linea-derecha text-end pe-2 '><strong>km</strong></td>}
                                {producto.km &&
                                <td className='text-start ps-2 '>{producto.km}</td>}
                            </tr>

                        </table>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DetalleProducto;
