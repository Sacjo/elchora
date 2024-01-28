import React, { useState } from 'react';

const Filtros = ({ onFilterChange, categoriaFiltrada }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleCategoriaClick = (categoria) => {
        onFilterChange(categoria);
        setIsDropdownOpen(false); 
    };

    return (
        <div>
            {/* Dropdown solo para dispositivos móviles */}
            <div className="d-block d-md-none">
                <button 
                    className="btn btn-principal dropdown-toggle mb-2" 
                    type="button" 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    Categorías
                </button>
                {isDropdownOpen && (
                    <div className="dropdown-menu menu-producto show mb-2">
                        {['Todos', 'Autos', 'Celulares', 'Otros'].map((categoria) => (
                            <a 
                                key={categoria}
                                className={`dropdown-item ${categoria === categoriaFiltrada ? 'active' : ''}`}
                                href="#!" 
                                onClick={() => handleCategoriaClick(categoria)}
                            >
                                {categoria}
                            </a>
                        ))}
                    </div>
                )}
            </div>

            {/* Lista Normal para pantallas más grandes */}
            <div className="list-group list-group-flush d-none d-md-block">
            <h5 >Categorías</h5>
                {['Todos', 'Autos', 'Celulares', 'Otros'].map((categoria) => (
                    <button
                        key={categoria}
                        className={`list-group-item list-group-item-action ${categoria === categoriaFiltrada ? 'active' : ''}`}
                        onClick={() => onFilterChange(categoria)}
                    >
                        {categoria}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Filtros;
