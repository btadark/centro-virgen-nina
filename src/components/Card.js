import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Card = ({titulo, enlace, img}) => {
    return (

        <div className="programa col-md-6 col-lg-4 mb-5">
            <Link to={enlace}>
                <div className="card shadow">
                    <div className="card-image">
                        <img src={img} className="card-img-top" alt={titulo} />
                    </div>
                    <div className="card-body">
                        <div className="content">
                            <p className="text-center font-weight-bold">{titulo}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card
