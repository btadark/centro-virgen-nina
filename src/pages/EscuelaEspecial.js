import React from 'react';
import ContenidoProg from '../components/programas/ContenidoProg';
import imagen from '../img/EscuelaEspecial/0_especial.jpeg';
import { escuelaEspecial } from '../components/middleware/EscuelaEspecial';
import Plantel from '../components/programas/Plantel';

const EscuelaEspecial = () => {

    const titulo = `La Escuela de Educación Especial`;
    const descripcion = `Da apoyo integral a niños y niñas desde 1 año de edad, con necesidades educativas especiales y/o discapacidad leve, moderada o severa, brinda una atención integral que comprende los ámbitos educativos, nutricional, terapias complementarias y actividades deportivas, sociales y religiosas.`

    return (
        <div className="container mt-5">
            <ContenidoProg 
                titulo={titulo}
                descripcion={descripcion}
                imagen={imagen}
            />

            <p className="mt-md-5">El proyecto tiene la finalidad de fortalecer y lograr la independencia personal y debe ser posible su inclusión en el nivel educativo inicial y primario en la modalidad regular, o como en la mayoría de los casos lograr una integración social en el seno de su familia y/o de la comunidad.</p>

            <h2 className="text-center font-weight-bold mt-5">Nuestro Equipo</h2>
            <hr className="mb-5"/>

            <div className="row">
                {
                    escuelaEspecial.map( persona => (
                        <Plantel 
                            key={persona.nombre}
                            nombre={persona.nombre}
                            cargo={persona.cargo}
                            img={persona.img}
                        />
                    ))
                }
            </div>
            
        </div>
    )
}

export default EscuelaEspecial
