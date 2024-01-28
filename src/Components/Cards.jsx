import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ id, img, nombre, precio, km, modelo }) => {
    const detalleAdicional = km ? `${km} km` : modelo ? `${modelo} ` : '';

    return (
        <Link to={`/producto/${id}`} className="card mb-4 me-2">
            <img src={img} className="card-img-top" alt={nombre} />
            <div className="card-body">
                <h5 className="card-title text-center">{nombre}</h5>
                <p className="card-text">{precio} $</p>
                {detalleAdicional && <p className="card-text">{detalleAdicional}</p>}
            </div>
        </Link>
    );
}

export default Cards;
