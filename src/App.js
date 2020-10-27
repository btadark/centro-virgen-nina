import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';

import Navbar from './components/Navbar';
import Administracion from './pages/Administracion';
import AsistenciaSocial from './pages/AsistenciaSocial';
import DesarrolloInfantil from './pages/DesarrolloInfantil';
import Directorio from './pages/Directorio';
import EquipoMultidisciplinario from './pages/EquipoMultidisciplinario';
import EscuelaEspecial from './pages/EscuelaEspecial';
import EscuelaInicial from './pages/EscuelaInicial';
import Nosotros from './pages/Nosotros';
import Principal from './pages/Principal';
import VirgenNina from './pages/VirgenNina';

function App() {
  return (

    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Principal}/>
        <Route exact path='/nosotros' component={Nosotros}/>
        <Route exact path='/escuela-especial' component={EscuelaEspecial}/>
        <Route exact path='/desarrollo-infantil' component={DesarrolloInfantil}/>
        <Route exact path='/equipo-multidisciplinario' component={EquipoMultidisciplinario}/>
        <Route exact path='/asistencia-social' component={AsistenciaSocial}/>
        <Route exact path='/escuela-inicial' component={EscuelaInicial}/>
        <Route exact path='/virgen-nina' component={VirgenNina}/>
        <Route exact path='/directorio' component={Directorio}/>
        <Route exact path='/administracion' component={Administracion}/>
      </Switch>
      <Footer />
    </Router>
    
  );
}

export default App;
