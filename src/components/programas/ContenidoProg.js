import React from 'react';

const ContenidoProg = ({titulo,descripcion,imagen}) => {
    return (
        <> 
            <h2 className="text-center font-weight-bold">{titulo}</h2>
            <hr className="mb-5"/>
            <div className="row align-items-center">
                <div className="col-md-5">
                    <p className="mb-5 mb-md-0">{descripcion}</p> 
                </div>
                <div className="col-md-7 mb-5 mb-md-0">
                    <img className="imagen-descripcion shadow w-100" src={imagen} alt=""/>
                </div>
            </div>  
        </>
    )
}

export default ContenidoProg
