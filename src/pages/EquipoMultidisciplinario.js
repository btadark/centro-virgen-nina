import React from 'react';
import ContenidoProg from '../components/programas/ContenidoProg';
import imagen from '../img/2.jpeg';

const EquipoMultidisciplinario = () => {

    const titulo = `Equipo Multidisciplinario`;
    const descripcion = `El trabajo que desarrolla el Equipo Multidisciplinario en las áreas de Fisioterapia, Hidroterapia, Fonoaudiología, Psicomotricidad, Psicología, Terapia Ocupacional, Nutrición, Psicopedagogía, Trabajo Social, atención médica primaria, enfermería y atención odontológica, es reconocido no solo por la población sino también por Autoridades Competentes. Este equipo apoya a cada uno de los programas que desarrolla la Asociación.`

    const datos = {
        nombre: 'imagen1',
        img: imagen
    };

    return (
        <div className="container mt-5 pt-5">
            <ContenidoProg 
                titulo={titulo}
                descripcion={descripcion}
                imagen={datos.img}
            />
        </div>
    )
}

export default EquipoMultidisciplinario
