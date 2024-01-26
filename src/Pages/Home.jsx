import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Home/Header'
import Autos from '../Components/Home/Autos'
import Formulario from '../Components/Formulario'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Autos />
            <div className='col-6'>
                <Formulario />
            </div>
        </div>
    )
}

export default Home