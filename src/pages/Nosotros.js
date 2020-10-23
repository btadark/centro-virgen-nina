import React from 'react';
import img1 from '../img/2.jpeg';

const Nosotros = () => {
    return (
        <div className="container mt-5 pt-5">
            <h2 className="guindo text-center mt-4 font-weight-bold">Quienes Somos</h2>
            <hr/>
            <p className="descripcion mt-5 mb-5">La Asociación Centro Virgen Niña – epdb es una Obra de la iglesia Católica sin fines de lucro, con Personería Jurídica  Canónica. Fundada en agosto de 1993, por la Hna. Grazia Micaelli junto a un grupo de personas laicas bolivianas,  Hasta ahora es nuestra principal benefactora además de la ayuda muy comprometida de familiares y amigos de la comunidad a través de donaciones y apoyos solidarios que siempre llegan.</p>
            <div className="row">
                <div className="col-md-5 mb-5 mb-md-0">
                    <img className="w-100" src={img1} alt=""/>
                </div>
                <div className="col-md-7">
                    <p>Un 6 de abril de 1993, la Hna. Grazia abre las puertas de lo que será, el Centro Virgen Niña, habiendo recogido de sus casas a 6 niños con discapacidad, para que ellos fueran apoyados por un equipo naciente de terapeutas y educadoras. La visión de la Hermana, ver a niños y niñas con discapacidad, leve y severa, vivir una vida digna gracias a los cuidados, las terapias rehabilitadoras, el apoyo en su nutrición, el derecho a la educación, la inclusión familiar, social y educativa y, sobre todo, la calidez humana con que se los recibe día a día en el Centro. </p> 
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-7">
                    <p>Hoy, 27 años después, la obra ha crecido, más de 200 niños/as con discapacidad de 6 meses a 15 años, llegan al Centro cada día de la mano de sus padres. Con una atención innovadora, en la que con los niños más pequeños, se inician con un Hogar de día, donde se enfoca la independencia personal. De igual manera el apoyo en salud, protección y nutrición, se realiza a casi 200 niños y niñas sin discapacidad en las edades comprendidas entre 1 a 5 años. Dentro de la población que nos necesita están también nuestras familias y nuestros abuelitos y abuelitas.</p> 
                </div>
                <div className="col-md-5 mb-5 mb-md-0">
                    <img className="w-100" src={img1} alt=""/>
                </div>
            </div>
            <p className="mt-md-5 mb-5">La atención a personas con necesidades en salud, económicas y sociales debe ser responsabilidad de nuestra Sociedad, de ahí que, el concurso de Actores gubernamentales, tanto a Nivel Central del Estado, como la Gobernación, el Municipio, Universidades, publicas y privadas y cada ciudadano dentro de su vida diaria, están comprometidos a llegar a una inclusión en la familia, en la sociedad, a nivel educativo y laboral, de quienes son más  vulnerables.</p>
        </div>
    )
}

export default Nosotros
