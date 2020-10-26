import React from 'react';
import { Link } from 'react-router-dom';
import card1 from '../img/imagenes/20.jpg';
import card2 from '../img/imagenes/21.jpg';
import card3 from '../img/imagenes/22.jpg';
import card4 from '../img/imagenes/19.jpg';
import card5 from '../img/imagenes/18.jpg';
import card6 from '../img/imagenes/17.jpg';

const Main = () => {
    return (
        <main className="container">
            <h2 className="text-center font-weight-bold mt-4 mb-5">"Por una vida digna, toda la vida"</h2>
        
            <div className="row">
                <div className="col-md-4 mb-5">
                    <Link to="/virgen-nina">
                        <div className="card shadow">
                            <img src={card1} className="card-img-top" alt="..." />
                            <div className="card-body card-color1">
                                <p className="card-text text-center font-weight-bold">Virgen Niña</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-md-4 mb-5">
                    <div className="card shadow">
                        <img src={card2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text text-center font-weight-bold">Equipo Multidisciplinario</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-5">
                    <div className="card shadow">
                        <img src={card3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text text-center font-weight-bold">Escuela Especial</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-5">
                    <div className="card shadow">
                        <img src={card4} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text text-center font-weight-bold">Escuela Fiscal Inicial</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-5">
                    <div className="card shadow">
                        <img src={card5} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text text-center font-weight-bold">Desarrollo Infantil</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-5">
                    <div className="card shadow">
                        <img src={card6} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text text-center font-weight-bold">Asistencia Social</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </main>
    )
}

export default Main
