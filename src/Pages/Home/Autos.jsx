import React from 'react'
import Cards from '../../Components/Cards';

const Autos = () => {
    const autos = [
        { link:"https://www.google.com", img: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/bdc/dc/fotos/KIA_Niro_01_0.jpg?tf=1080x", nombre: "Auto 1", precio: "20.000", km: "10.000" },
        { link:"https://www.google.com", img: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/bdc/dc/fotos/KIA_Niro_01_0.jpg?tf=1080x", nombre: "Auto 2", precio: "30.000", km: "5.000" },
        { link:"https://www.google.com", img: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/bdc/dc/fotos/KIA_Niro_01_0.jpg?tf=1080x", nombre: "Auto 2", precio: "30.000", km: "5.000" },
        { link:"https://www.google.com", img: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/bdc/dc/fotos/KIA_Niro_01_0.jpg?tf=1080x", nombre: "Auto 2", precio: "30.000", km: "5.000" },
        { link:"https://www.google.com", img: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/bdc/dc/fotos/KIA_Niro_01_0.jpg?tf=1080x", nombre: "Auto 2", precio: "30.000", km: "5.000" },
        { link:"https://www.google.com", img: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/bdc/dc/fotos/KIA_Niro_01_0.jpg?tf=1080x", nombre: "Auto 2", precio: "30.000", km: "5.000" },
        { link:"https://www.google.com", img: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/bdc/dc/fotos/KIA_Niro_01_0.jpg?tf=1080x", nombre: "Auto 2", precio: "30.000", km: "5.000" },
        { link:"https://www.google.com", img: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/bdc/dc/fotos/KIA_Niro_01_0.jpg?tf=1080x", nombre: "Auto 2", precio: "30.000", km: "5.000" },
    ];
    return (
        <section id='autos' className='mb-5'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-10 col-md-6 mb-3 mt-2'>
                        <h2 className='text-center'>Autos</h2>
                    </div>
                    <div className='row justify-content-center justify-content-md-between'>
                        {autos.map((auto, index) => (
                            <Cards
                                key={index}
                                link={auto.link}
                                img={auto.img}
                                nombre={auto.nombre}
                                precio={auto.precio}
                                km={auto.km}
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

export default Autos