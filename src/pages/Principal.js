import React from 'react';
import ReactPlayer from 'react-player';
import { Map, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {IconLocation} from '../components/IconLocation';

const Principal = () => {

    return (
        <>
            <header className="site-header">
                <div className="container h-100 d-flex align-items-center">
                    <div className="text-center header-contenido">
                        <h1>Centro Virgen Niña <br/> <span>EPDB</span></h1>
                        <p className="texto-inicial text-center text-white mt-4 d-none d-lg-block">Atención integral a niños y niñas con y sin discapacidad, familias en estado de pobreza y personas adultas mayores en estado de abandono.</p>
                    </div>
                </div>
            </header>

            <main className="container mb-3">
                <h2 className="text-center font-weight-bold mt-4 mb-2">Evaluación Multidiciplinaria</h2>
                <hr className="mb-4"/>
                <div className="row d-flex justify-content-between align-items-center pt-3 pb-2">
                    <div className="col-12 col-lg-4 pb-4">
                        <p className="pr-md-4">Antes de iniciar la Evaluación Multidisciplinaria es necesario reunir algunos requisitos, nuestra enfermera le proporcionará una pequeña lista donde se muestra la documentación necesaria para la evaluación.</p>

                        <p className="pr-4">Cuando reúna los requisitos será citado para comenzar con el recorrido como se muestra en este video.</p>
                    </div>
                    <div className="col-12 col-lg-8 embed-responsive">
                        <ReactPlayer url="https://youtu.be/75mwC4y0EHE" />
                    </div>
                </div>
            </main>

            <section className="anuncio mb-4">
            </section>

            <section className="seccion">
                <div className="container">
                    
                    <div className="row">
                        <div className="col-md-7 mb-5">
                            <div className="contenedor-mapa mb-4 mb-md-0">
                                <h2 className="text-center font-weight-bold">Encuentranos en:</h2>
                                <hr className="mb-3 mb-md-5"/>
                                <p className="text-center">El Alto, Z. Los Andes, final Calle Balboa No. 10</p>
                                <Map
                                    center={{lat: '-16.4937555', lng: '-68.1890016'}}
                                    zoom="16"
                                    scrollWheelZoom={false}
                                >
                                    <TileLayer
                                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <Marker 
                                        position={{lat: '-16.4937555', lng: '-68.1890016'}}
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
        </>
    )
}

export default Principal
