import React from 'react';
import ContenidoProg from '../components/programas/ContenidoProg';
import imagen from '../img/2.jpeg';

const DesarrolloInfantil = () => {

    const titulo = `Desarrollo Infantil`;
    const descripcion = `El programa de Desarrollo Infantil, con el apoyo del GAMEA, atiende a 100 niños/as con y sin discapacidad, de 6 meses a 4 años, niños que podrían estar en las calles acompañando a sus padres en las ferias y talleres, poniendo en riesgo su seguridad. Dentro de este Proyecto, también se tiene 4 aulas de pequeños que ya presentan signos de discapacidad y/o retraso global del desarrollo. Nuestros niños más pequeños reciben 4 tiempos de comidas diarias (Desayuno, merienda, Almuerzo y merienda de la tarde) con el apoyo de donaciones y de los Padres de familia, haciéndolos participes y corresponsables del desarrollo de sus hijos, Por la tarde y completando el apoyo integral asisten a Talleres de esparcimiento, culturales como pintura, danza, deportes.`

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

export default DesarrolloInfantil
