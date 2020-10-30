import React from 'react';
import logoCentro from '../img/logo.png';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
    return (

        <>
        <div id="principal" className="rectangulo"></div>
        <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
            <div className="container">
                <Link to={'/#principal'}>
                    <img src={logoCentro} width="50"  alt="" loading="lazy"/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="enlaces collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mr-4">
                            <Link className="nav-link"  to={'/#principal'}>Inicio</Link>
                        </li>
                        <li className="nav-item dropdown mr-4">
                            <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to={'/'} role="button" aria-haspopup="true" aria-expanded="false">Programas</Link>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" to={'/desarrollo-infantil#principal'}>Desarrollo Infantil</Link>
                                <Link className="dropdown-item" to={'/equipo-multidisciplinario#principal'}>Equipo Multidisciplinario</Link>
                                <Link className="dropdown-item" to={'/asistencia-social#principal'}>Area de Asistencia Social</Link>
                                <Link className="dropdown-item" to={'/escuela-inicial#principal'}>Escuela Inicial en Familia Comunitaria</Link>
                                <Link className="dropdown-item" to={'/escuela-especial#principal'}>Escuela de Educación Especial</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown mr-4">
                            <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to={'/'} role="button" aria-haspopup="true" aria-expanded="false">Nosotros</Link>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" to={'/nosotros#principal'}>¿Quiénes Somos?</Link>
                                <Link className="dropdown-item" to={'/directorio#principal'}>Directorio</Link>
                                <Link className="dropdown-item" to={'/administracion#principal'}>Plantel Administrativo</Link>
                            </div>
                        </li>
                        {/* <li className="nav-item mr-4">
                            <Link className="nav-link" to={'/nosotros#titulo'}>Nosotros</Link>
                        </li> */}
                        
                    </ul>
                </div>
            </div>
        </nav>
        
    </>        
    )
}

export default Navbar
