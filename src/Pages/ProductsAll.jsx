import React from 'react'
import Navbar from '../Components/Navbar'
import Filtros from './Productos/Filtros'
import Productos from './Productos/Productos'

const ProductsAll = () => {
    return (
        <>
            <Navbar />
            <section className='mt-4'>
                <h2 className='text-center mb-4'>Productos</h2>
                <Productos />
            </section>
        </>
    )
}

export default ProductsAll