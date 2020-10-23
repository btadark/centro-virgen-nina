import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="site-footer pt-5 pb-3 mt-4 bg-primary text-white">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-md-6">
                                <h4 className="mb-3">Contáctanos</h4>
                                <div className="d-flex flex-column align-items-center">
                                    <p>Telf: 22841126</p>
                                    <p>Correo: virgenninaepdb@gmail.com</p>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <h4 className="mb-3">Siguenos en:</h4>
                                <div className="d-flex justify-content-center">
                                    <p className="mr-5">Facebook</p>
                                    <p>YouTube</p>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <p className="text-center">Todos los Dechos Reservados &copy; 2020</p>
                    </div>
            </footer>            
        </>
    )
}

export default Footer
