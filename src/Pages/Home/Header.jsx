import React from 'react'

const Header = () => {
  return (
    <section id='inicio' className='min-vh-100 d-flex align-items-center text-center mb-5'>
            <div className='container'>
                <div className='row flex-column justify-content-center align-items-center'>
                    <div className="col-10 col-md-6 mb-5">
                        <h1 className='display-1 d-none d-sm-block mt-5'>LOGO</h1>
                    </div>
                    <div className="col-10 col-md-6 mt-5" >
                        <a href="#nosotros" className='btn btn-principal px-6 py-3'>Más Info</a>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Header