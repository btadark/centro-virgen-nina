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
        {titulo: 'Virgen Niña', enlace: '/virgen-nina#titulo', img: card1},
        {titulo: 'Equipo Multidisciplinario', enlace: '/equipo-multidisciplinario#titulo', img: card2},
        {titulo: 'Escuela de Educacion Especial', enlace: '/escuela-especial#titulo', img: card3},
        {titulo: 'Escuela Inicial en Familia Comunitaria', enlace: '/escuela-inicial#titulo', img: card4},
        {titulo: 'Desarrollo Infantil', enlace: '/desarrollo-infantil#titulo', img: card5},
        {titulo: 'Asistencia Social', enlace: '/asistencia-social#titulo', img: card6},    
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
