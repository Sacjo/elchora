import React from 'react'

const Pendrive = () => {
    return (
        <section id='pendrive' className='mb-5'>
            <div className='container'>
                <div className='row'>
                    <div className='mb-5 mt-5 d-flex'>
                        <div className='col-10 col-md-6'>
                            <h2 className='text-white mb-3'>Pendrive</h2>
                            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente consequuntur ipsam at ex nihil? Quod, voluptatem laborum dolore obcaecati totam suscipit, aspernatur laboriosam blanditiis facilis temporibus amet nesciunt? Laboriosam, dolor?</p>
                            <h3 className='text-white mb-3'>Ubicaiones</h3>
                            <p className='text-white'>Franco- Cde - Minga</p>
                        </div>
                        <div className='col-10 col-md-6 text-center d-flex flex-column align-items-center'>

                            <img className='home-img-pendrive mb-3' src="https://firebasestorage.googleapis.com/v0/b/elchora.appspot.com/o/otros%2Fpen.jpg?alt=media&token=cdac2da0-621e-4258-b567-4c4d32f200d7" alt="pendrive el chora" />

                            <a href="#" className='btn btn-principal-blanco px-6 py-3'>Solicitar Ahora</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pendrive