import React from 'react';
import ReactPlayer from 'react-player';
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

            <div className="row d-flex justify-content-between align-items-center pt-3 pb-2">
                <div className="col-12 col-lg-4 pb-4">
                    <p className="pr-md-4">Antes de iniciar la Evaluación Multidisciplinaria es necesario reunir algunos requisitos, nuestra enfermera le proporcionará una pequeña lista donde se muestra la documentación necesaria para la evaluación.</p>

                    <p className="pr-4">Cuando reúna los requisitos será citado para comenzar con el recorrido como se muestra en este video.</p>
                </div>
                <div className="col-12 col-lg-8 embed-responsive">
                    <ReactPlayer url="https://youtu.be/75mwC4y0EHE" />
                </div>
            </div>
        </div>
    )
}

export default EquipoMultidisciplinario
