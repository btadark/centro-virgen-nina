import React from 'react';
import { administrativo, servicio } from '../components/middleware/Administrativo';
import Plantel from '../components/programas/Plantel';

const Administracion = () => {
    return (
        <div className="container">
            <h2 className="text-center font-weight-bold mt-5">Personal Administrativo</h2>
            <hr className="mb-5"/>

            <div className="row">
                {
                    administrativo.map( persona => (
                        <Plantel 
                            key={persona.nombre}
                            nombre={persona.nombre}
                            cargo={persona.cargo}
                            img={persona.img}
                        />
                    ))
                }
            </div>

            <h2 className="text-center font-weight-bold">Personal de Servicio</h2>
            <hr className="mb-5"/>


            <div className="row">
                {
                    servicio.map( persona => (
                        <Plantel 
                            key={persona.nombre}
                            nombre={persona.nombre}
                            cargo={persona.cargo}
                            img={persona.img}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Administracion
