import React from 'react';
import logoCentro from '../img/logo.png';
// import logoEpdb from '../img/epdb1.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
            <div className="container">
                <Link to={'/'}>
                    <img src={logoCentro} width="50"  alt="" loading="lazy"/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="enlaces collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mr-4">
                            <Link className="nav-link"  to={'/'} >Inicio</Link>
                        </li>
                        <li className="nav-item dropdown mr-4">
                            <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to={'/'} role="button" aria-haspopup="true" aria-expanded="false">Programas</Link>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" to={'/desarrollo-infantil'}>Desarrollo Infantil</Link>
                                <Link className="dropdown-item" to={'/equipo-multidisciplinario'}>Equipo Multidisciplinario</Link>
                                <Link className="dropdown-item" to={'/asistencia-social'}>Area de Asistencia Social</Link>
                                <Link className="dropdown-item" to={'/escuela-inicial'}>Escuela Fiscal de Convenio Inicial</Link>
                                <Link className="dropdown-item" to={'/escuela-especial'}>Escuela Especial Fiscal de Convenio EPDB</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to={''}></Link>
                            </div>
                        </li>
                        <li className="nav-item mr-4">
                            <Link className="nav-link" to={'/nosotros'}>Nosotros</Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
        
    )
}

export default Navbar
