import React from 'react';
import ContenidoProg from '../components/programas/ContenidoProg';
import imagen from '../img/2.jpeg';

const EscuelaEspecial = () => {

    const titulo = `La Escuela Especial Fiscal de Convenio EPDB`;
    const descripcion = `Brinda apoyo nutricional, educativo y terapéutico, a casi 200 niños y niñas en sus distintas modalidades. En cada una de sus aulas, se tiene un apoyo constante, innovador, ya que se realiza el acompañamiento a los Docentes, con el Equipo Multidisciplinaria, mediante terapias grupales, en aula. Esta metodología hace que el docente este siempre acompañado con un Equipo de Profesionales atento a cada una de las necesidades y/o dificultades de nuestros niños y niñas. La Institucion también apoya al Centro de Educación Especial con la atención constante de un Médico General, una enfermera, una Trabajadora Social y todo el Equipo terapéutico. La Asociación vela por dotar al Centro de aulas adecuadas, con calefacción y material y equipamiento necesario para una atención de calidad a cada uno de sus estudiantes.`

    return (
        <div className="container mt-5 pt-5">
            <ContenidoProg 
                titulo={titulo}
                descripcion={descripcion}
                imagen={imagen}
            />
            
        </div>
    )
}

export default EscuelaEspecial
