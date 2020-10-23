import React from 'react';

const ContenidoProg = ({titulo,descripcion,imagen}) => {
    return (
        <>
            <h2 className="text-center mt-4 font-weight-bold">{titulo}</h2>
                <hr className="mb-5"/>
                <div className="row">
                    <div className="col-md-7">
                        <p>{descripcion}</p> 
                    </div>
                    <div className="col-md-5 mb-5 mb-md-0">
                        <img className="w-100" src={imagen} alt=""/>
                    </div>
            </div>     
        </>
    )
}

export default ContenidoProg
