import React from 'react'
import Plantel from '../components/programas/Plantel';
import { directorio } from '../components/middleware/Directorio';

const Directorio = () => {
    return (
        <div className="container">
            <h2 className="text-center font-weight-bold mt-5">Directorio</h2>
            <hr className="mb-5"/>

            <div className="row">
                {
                    directorio.map( persona => (
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

export default Directorio
