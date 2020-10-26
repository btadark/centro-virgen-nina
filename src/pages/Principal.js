import React from 'react';

import Hero from '../components/Hero';
import Main from '../components/Main';
import Direccion from '../components/Direccion';

const Principal = () => {

    return (
        <>
            <Hero />
            <Main />
            <section className="anuncio mb-4">
            </section>
            <Direccion />
         </>
    )
}

export default Principal
