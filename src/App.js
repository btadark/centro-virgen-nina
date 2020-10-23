import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';

import Navbar from './components/Navbar';
import AsistenciaSocial from './pages/AsistenciaSocial';
import DesarrolloInfantil from './pages/DesarrolloInfantil';
import EquipoMultidisciplinario from './pages/EquipoMultidisciplinario';
import EscuelaEspecial from './pages/EscuelaEspecial';
import EscuelaInicial from './pages/EscuelaInicial';
import Nosotros from './pages/Nosotros';
import Principal from './pages/Principal';
import Programas from './pages/Programas';

function App() {
  return (

    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Principal}/>
        <Route exact path='/nosotros' component={Nosotros}/>
        <Route exact path='/programas' component={Programas}/>
        <Route exact path='/escuela-especial' component={EscuelaEspecial}/>
        <Route exact path='/desarrollo-infantil' component={DesarrolloInfantil}/>
        <Route exact path='/equipo-multidisciplinario' component={EquipoMultidisciplinario}/>
        <Route exact path='/asistencia-social' component={AsistenciaSocial}/>
        <Route exact path='/escuela-inicial' component={EscuelaInicial}/>

      </Switch>
      <Footer />
    </Router>
    
  );
}

export default App;
