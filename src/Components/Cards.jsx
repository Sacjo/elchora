import React from 'react';

const Cards = ({ link, img, nombre, precio, km, modelo }) => {
    // Determinar qué detalle adicional mostrar
    const detalleAdicional = km ? `${km} km` : modelo ? `Modelo: ${modelo}` : '';

    return (
        <a href={link} className="card col-10 col-md-3 mb-4" style={{ width: '18rem' }}>
            <img src={img} className="card-img-top" alt={nombre} />
            <div className="card-body">
                <h5 className="card-title text-center">{nombre}</h5>
                <p className="card-text">{precio} $</p>
                {/* Mostrar el detalle adicional si está disponible */}
                {detalleAdicional && <p className="card-text">{detalleAdicional}</p>}
            </div>
        </a>
    );
}

export default Cards;
