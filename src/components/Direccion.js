import React from 'react';
import 'leaflet/dist/leaflet.css';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { IconLocation } from './IconLocation';

const Direccion = () => {
    return (
        <section className="seccion">
            <div className="container">
                
                <div className="row">
                    <div className="col-md-7 mb-5">
                        <div className="contenedor-mapa mb-4 mb-md-0">
                            <h2 className="text-center font-weight-bold">Encuentranos en:</h2>
                            <hr className="mb-3 mb-md-5"/>
                            <p className="text-center">El Alto, Zona Los Andes, Calle Balboa No. 10</p>
                            <Map
                                center={{lat: '-16.4943692', lng: '-68.1877145'}}
                                zoom="16"
                                scrollWheelZoom={false}
                            >
                                <TileLayer
                                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker 
                                    position={{lat: '-16.4943692', lng: '-68.1877145'}}
                                    icon={IconLocation}
                                />
                            </Map>
                        </div>
                    </div>
                    <div className="col-md-5 pr-md-5 mt-5 mt-md-0 pt-5 pt-md-0">
                        <h2 className="text-center font-weight-bold mb-3">Centro Virgen Niña</h2>
                        <hr className="mb-3 mb-md-5"/>
                        <p>El Centro “Virgen Niña, EPDB” tiene como Misión promover la formación, la atención, y el desarrollo integral y espiritual de niños y niñas, jóvenes, mujeres, adultos mayores y familias en situación de pobreza y marginalidad, que tuvieron menos oportunidades en la vida. </p>
                        <p className="mensaje">"Por una vida digna, toda la vida"</p>
                    </div>
                </div>
                
            </div>
        </section>

    )
}

export default Direccion
