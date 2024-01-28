import React from 'react'
import Cards from '../../Components/Cards';

const Celulares = () => {
    const celulares = [
        { link: "https://www.google.com", img: "https://www.compulandia.com.py/wp-content/uploads/2023/06/APPLE-IPHONE-14-PRO-MAX-256GB-Imagen-trasera-y-frontal-color-purpura.jpg", nombre: "Celular 1", precio: "2.000", modelo: "Iphone 14" },
        { link: "https://www.google.com", img: "https://www.compulandia.com.py/wp-content/uploads/2023/06/APPLE-IPHONE-14-PRO-MAX-256GB-Imagen-trasera-y-frontal-color-purpura.jpg", nombre: "Celular 2", precio: "3.000", modelo: "Iphone 14 b" },
        { link: "https://www.google.com", img: "https://www.compulandia.com.py/wp-content/uploads/2023/06/APPLE-IPHONE-14-PRO-MAX-256GB-Imagen-trasera-y-frontal-color-purpura.jpg", nombre: "Celular 2", precio: "3.000", modelo: "Iphone 14 a" },
        { link: "https://www.google.com", img: "https://www.compulandia.com.py/wp-content/uploads/2023/06/APPLE-IPHONE-14-PRO-MAX-256GB-Imagen-trasera-y-frontal-color-purpura.jpg", nombre: "Celular 2", precio: "3.000", modelo: "Iphone 14 mx" },
        { link: "https://www.google.com", img: "https://www.compulandia.com.py/wp-content/uploads/2023/06/APPLE-IPHONE-14-PRO-MAX-256GB-Imagen-trasera-y-frontal-color-purpura.jpg", nombre: "Celular 2", precio: "3.000", modelo: "Iphone 14 pro" },
        { link: "https://www.google.com", img: "https://www.compulandia.com.py/wp-content/uploads/2023/06/APPLE-IPHONE-14-PRO-MAX-256GB-Imagen-trasera-y-frontal-color-purpura.jpg", nombre: "Celular 2", precio: "3.000", modelo: "Iphone 12" },
        { link: "https://www.google.com", img: "https://www.compulandia.com.py/wp-content/uploads/2023/06/APPLE-IPHONE-14-PRO-MAX-256GB-Imagen-trasera-y-frontal-color-purpura.jpg", nombre: "Celular 2", precio: "3.000", modelo: "Iphone 13" },
        { link: "https://www.google.com", img: "https://www.compulandia.com.py/wp-content/uploads/2023/06/APPLE-IPHONE-14-PRO-MAX-256GB-Imagen-trasera-y-frontal-color-purpura.jpg", nombre: "Celular 2", precio: "2.000", modelo: "Iphone 15" },
    ];
    return (
        <section id='celulares' className='mb-5'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-10 col-md-6 mb-3 mt-2'>
                        <h2 className='text-center'>Celulares</h2>
                    </div>
                    <div className='row justify-content-center justify-content-md-between'>
                        {celulares.map((celular, index) => (
                            <Cards
                                key={index}
                                link={celular.link}
                                img={celular.img}
                                nombre={celular.nombre}
                                precio={celular.precio}
                                modelo={celular.modelo}
                            />
                        ))}
                    </div>
                    <div className="col-10 d-flex justify-content-center" >
                        <a href="#" className='btn btn-principal px-6 py-3'>Ver Más</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Celulares