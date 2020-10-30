import React from 'react';
import Card from './Card';

import card1 from '../img/virgen/01_virgen.jpeg';
import card2 from '../img/EqMultidisciplinario/0_EqMult.jpg';
import card3 from '../img/EscuelaEspecial/especial.jpg';
import card4 from '../img/EscuelaInicial/0_inicial.jpg';
import card5 from '../img/virgen/04_virgen.jpeg';
import card6 from '../img/AsistSocial/social.jpg';

const Main = () => {

    const programas = [
        {titulo: 'Virgen Niña', enlace: '/virgen-nina#principal', img: card1},
        {titulo: 'Equipo Multidisciplinario', enlace: '/equipo-multidisciplinario#principal', img: card2},
        {titulo: 'Escuela de Educacion Especial', enlace: '/escuela-especial#principal', img: card3},
        {titulo: 'Escuela Inicial en Familia Comunitaria', enlace: '/escuela-inicial#principal', img: card4},
        {titulo: 'Desarrollo Infantil', enlace: '/desarrollo-infantil#principal', img: card5},
        {titulo: 'Asistencia Social', enlace: '/asistencia-social#principal', img: card6},    
    ];

    return (
        <main className="container">
            <h2 className="text-center font-weight-bold mt-4 mb-5">"Por una vida digna, toda la vida"</h2>
        
            <div className="row">
                { programas.map( (programa,i) => (
                    <Card
                        key={i}
                        titulo={programa.titulo}
                        enlace={programa.enlace}
                        img={programa.img}
                    />
                ))}
            </div>
        </main>
    )
}

export default Main
