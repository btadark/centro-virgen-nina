import React from 'react';
import img1 from '../img/2.jpeg';

const Programas = () => {
    return (
        <>
            <div className="container mt-5 pt-5">
                <h2 className="guindo text-center mt-4 font-weight-bold">Programas</h2>
                <hr className="mb-4"/>
                <h2 className="mb-3 mt-4 font-weight-bold">La Escuela Especial Fiscal de Convenio EPDB</h2>
                <div className="row d-flex flex-column-reverse flex-md-row align-items-center mt-3">
                    <div className="col-md-7">
                        <p>Brinda apoyo nutricional, educativo y terapéutico, a casi 200 niños y niñas en sus distintas modalidades. En cada una de sus aulas, se tiene un apoyo constante, innovador, ya que se realiza el acompañamiento a los Docentes, con el Equipo Multidisciplinaria, mediante terapias grupales, en aula. Esta metodología hace que el docente este siempre acompañado con un Equipo de Profesionales atento a cada una de las necesidades y/o dificultades de nuestros niños y niñas. La Institucion también apoya al Centro de Educación Especial con la atención constante de un Médico General, una enfermera, una Trabajadora Social y todo el Equipo terapéutico. La Asociación vela por dotar al Centro de aulas adecuadas, con calefacción y material y equipamiento necesario para una atención de calidad a cada uno de sus estudiantes.</p> 
                    </div>
                    <div className="col-md-5 mb-5 mb-md-0">
                        <img className="w-100" src={img1} alt=""/>
                    </div>
                </div>

                <h2 className="mb-3 font-weight-bold">Desarrollo Infantil</h2>
                <div className="row d-flex align-items-center">
                    <div className="col-md-5 mb-5 mb-md-0">
                        <img className="w-100" src={img1} alt=""/>
                    </div>
                    <div className="col-md-7">
                        <p>El programa de Desarrollo Infantil, con el apoyo del GAMEA, atiende a 100 niños/as con y sin discapacidad, de 6 meses a 4 años, niños que podrían estar en las calles acompañando a sus padres en las ferias y talleres, poniendo en riesgo su seguridad. Dentro de este Proyecto, también se tiene 4 aulas de pequeños que ya presentan signos de discapacidad y/o retraso global del desarrollo. Nuestros niños más pequeños reciben 4 tiempos de comidas diarias (Desayuno, merienda, Almuerzo y merienda de la tarde) con el apoyo de donaciones y de los Padres de familia, haciéndolos participes y corresponsables del desarrollo de sus hijos, Por la tarde y completando el apoyo integral asisten a Talleres de esparcimiento, culturales como pintura, danza, deportes.</p> 
                    </div>
                </div>

                <h2 className="mb-3 font-weight-bold mt-5">Escuela Fiscal de Convenio Inicial</h2>
                <div className="row d-flex flex-column-reverse flex-md-row align-items-center mt-3">
                    <div className="col-md-7">
                        <p>Otro proyecto que alberga a 100 niños y niñas del pre Kínder y Kínder. En sus aulas además de trabajar una educación que va dirigida a reforzar las actividades de la vida diaria con una calidad de vida, enfocada en la independencia personal, fortalece la inclusión educativa, Cada año de 3 a 4 niños siguen un proceso de inclusión a aulas del primero de primaria del sistema regular, con muy buenas expectativas. El horario de asistencia es de 8:30 a 12:30, de lunes a viernes.</p> 
                    </div>
                    <div className="col-md-5 mb-5 mb-md-0">
                        <img className="w-100" src={img1} alt=""/>
                    </div>
                </div>

                <h2 className="mb-3 mt-5 font-weight-bold">Area de Asistencia Social</h2>
                <div className="row d-flex align-items-center">
                    <div className="col-md-5 mb-5 mb-md-0">
                        <img className="w-100" src={img1} alt=""/>
                    </div>
                    <div className="col-md-7">
                        <p>Dentro de nuestra misión solidaria, el Área de Asistencia Social  apoya a 125 abuelitos y abuelitas, que asisten a la que es su casa, a recibir apoyo médico, alimentos y sobre todo cariño y casi 100 familias que llegan al Centro en busca de socorro, de afecto y sobre todo de un trato digno. Alrededor de 500 paquetes alimenticios que constan de arroz, harina, azúcar, aceite, algún cereal, huevos y fruta, se entregan cada 15 días. El derecho a la familia para nuestros abuelitos es fortalecido con el pequeño apoyo que nosotros les damos. Algunas veces también reciben asistencia médica primaria, enfermería, terapias de psicomotricidad geriátrica para adultos y algunas actividades de distracción.</p> 
                    </div>
                </div>

                <h2 className="mb-3 font-weight-bold mt-5">Equipo Multidisciplinario</h2>
                <div className="row d-flex flex-column-reverse flex-md-row align-items-center mt-3">
                    <div className="col-md-7">
                        <p>El trabajo que desarrolla el Equipo Multidisciplinario en las áreas de Fisioterapia, Hidroterapia, Fonoaudiología, Psicomotricidad, Psicología, Terapia Ocupacional, Nutrición, Psicopedagogía, Trabajo Social, atención médica primaria, enfermería y atención odontológica, es reconocido no solo por la población sino también por Autoridades Competentes. Este equipo apoya a cada uno de los programas que desarrolla la Asociación.</p> 
                    </div>
                    <div className="col-md-5 mb-5 mb-md-0">
                        <img className="w-100" src={img1} alt=""/>
                    </div>
                </div>

                <p className="mt-md-5 mb-5">El trabajo frente a la pobreza y a la discapacidad debe ser un trabajo conjunto entre los actores de la Sociedad, La modalidad del centro, trabajar en un hogar de día, sin excluir al niño/a de su derecho a una familia, pero al mismo tiempo dando a los padres la posibilidad de generar un empleo, es innovadora en nuestro medio y ha traído calidad de vida a nuestras familias.</p>
            </div>
        </>

        
    )
}

export default Programas
