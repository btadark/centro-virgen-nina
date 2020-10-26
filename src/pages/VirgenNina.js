import React from 'react'
import ContenidoProg from '../components/programas/ContenidoProg';
import imagen from '../img/2.jpeg';

const VirgenNina = () => {

    const titulo = `Escuela Fiscal de Convenio Inicial`;
    const descripcion = `Es un proyecto que alberga a 100 niños y niñas del pre Kínder y Kínder. En sus aulas además de trabajar una educación que va dirigida a reforzar las actividades de la vida diaria con una calidad de vida, enfocada en la independencia personal, fortalece la inclusión educativa, Cada año de 3 a 4 niños siguen un proceso de inclusión a aulas del primero de primaria del sistema regular, con muy buenas expectativas. El horario de asistencia es de 8:30 a 12:30, de lunes a viernes.`


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

export default VirgenNina
