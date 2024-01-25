import React from 'react';

const Cards = ({ link, img, nombre, precio, km }) => {
    return (
        <a href={link} className="card col-10 col-md-3 mb-4" style={{ width: '18rem' }}>
            <img src={img} className="card-img-top" alt={nombre} />
            <div className="card-body">
                <h5 className="card-title text-center">{nombre}</h5>
                <p className="card-text">{precio} $</p>
                <p className="card-text">{km} km</p>
            </div>
        </a>
    );
}

export default Cards;
