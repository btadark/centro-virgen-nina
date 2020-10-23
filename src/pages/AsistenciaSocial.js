import React from 'react';
import imagen from '../img/2.jpeg';
import ContenidoProg from '../components/programas/ContenidoProg';

const AsistenciaSocial = () => {
    
    const titulo = `Area de Asistencia Social`;
    const descripcion = `Dentro de nuestra misión solidaria, el Área de Asistencia Social apoya a 125 abuelitos y abuelitas, que asisten a la que es su casa, a recibir apoyo médico, alimentos y sobre todo cariño y casi 100 familias que llegan al Centro en busca de socorro, de afecto y sobre todo de un trato digno. Alrededor de 500 paquetes alimenticios que constan de arroz, harina, azúcar, aceite, algún cereal, huevos y fruta, se entregan cada 15 días. El derecho a la familia para nuestros abuelitos es fortalecido con el pequeño apoyo que nosotros les damos. Algunas veces también reciben asistencia médica primaria, enfermería, terapias de psicomotricidad geriátrica para adultos y algunas actividades de distracción.`

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

export default AsistenciaSocial
