import React from 'react';

const Cards = ({ link, img, nombre, precio, km, modelo }) => {
    // Determinar qué detalle adicional mostrar
    const detalleAdicional = km ? `${km} km` : modelo ? `${modelo} ` : '';

    return (
        <a href={link} className="card mb-4 me-2">
            <img src={img} className="card-img-top" alt={nombre} />
            <div className="card-body">
                <h5 className="card-title text-center">{nombre}</h5>
                <p className="card-text">{precio} $</p>
                {detalleAdicional && <p className="card-text">{detalleAdicional}</p>}
            </div>
        </a>
    );
    
}

export default Cards;
