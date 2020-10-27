import React from 'react'
import ReactPlayer from 'react-player';
import ContenidoProg from '../components/programas/ContenidoProg';
import imagen from '../img/virgen/02_virgen.jpeg';

const VirgenNina = () => {

    const titulo = `Virgen Niña`;
    const descripcion = `Es un proyecto que alberga a 100 niños y niñas del pre Kínder y Kínder. En sus aulas además de trabajar una educación que va dirigida a reforzar las actividades de la vida diaria con una calidad de vida, enfocada en la independencia personal, fortalece la inclusión educativa, Cada año de 3 a 4 niños siguen un proceso de inclusión a aulas del primero de primaria del sistema regular, con muy buenas expectativas. El horario de asistencia es de 8:30 a 12:30, de lunes a viernes. `

    
    return (
        <div className="container mt-5">
            <ContenidoProg
                titulo={titulo}
                descripcion={descripcion}
                imagen={imagen}
            />

            <p className="mt-md-5 mb-5 mb-md-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus accusantium in enim similique, totam repudiandae, voluptate voluptas aliquid placeat veniam eaque, maiores quidem est culpa numquam itaque dignissimos modi qui sequi! Rerum pariatur itaque eveniet, et adipisci asperiores ut recusandae voluptatibus, ducimus illo suscipit dolorum commodi cumque, magnam dicta ab.</p>

            <div className="row mt-md-5 align-items-center mb-5">
                <div className="col-12 col-lg-7 embed-responsive">
                    <ReactPlayer url="https://m.youtube.com/watch?v=zMkyhGrrXeQ" />
                </div>
                <div className="col-lg-5">
                    <p className="mt-5 mt-md-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptatum reiciendis nobis qui doloremque mollitia suscipit quisquam nisi beatae, id nemo officiis repellendus ut? Voluptatum quaerat iste architecto natus excepturi?</p>
                </div>
            </div>
        </div>        
    )
}

export default VirgenNina
