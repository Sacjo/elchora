import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Pages/Home/Header'
import Autos from '../Pages/Home/Autos'
import Pendrive from './Home/Pendrive'
import Celulares from './Home/Celulares'

const Home = () => {
    return (
        <>
            <Navbar/>
            <Header/>
            <Autos/>
            <Pendrive/>
            <Celulares/>
        </>
    )
}

export default Home