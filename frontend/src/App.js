import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import ConsultaVuelos from './components/ConsultarVuelos';
import ReservaVuelos from './components/ReservaVuelos';
import CompraBilletes from './components/CompraBilletes';
import InicioUsuario from './components/InicioUsuario';
import ConsultaTarifas from './components/ConsultaTarifas';
import ConsultaHorarios from './components/ConsultaPorHorario';
import ConsultaInformacion from './components/ConsultaInformacion';


const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg bg-info" data-bs-theme="dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Agencia de Vuelos</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Login">Iniciar Sesión</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Register">Registrarse</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/consulta-vuelos" element={<ConsultaVuelos />} />
          <Route path="/consulta-vuelos/horarios-por-horario" element={<ConsultaHorarios origen="Bogota" destino="Medellin" />}/>         
          <Route path="/consulta-vuelos/tarifas" element={<ConsultaTarifas />} />
          <Route path="/reserva-vuelos" element={<ReservaVuelos />} />
          <Route path="/compra-billetes" element={<CompraBilletes />} />
          <Route path="/inicio-usuario" element={<InicioUsuario />} />
          <Route path="/consulta-vuelos/informacion" element={<ConsultaInformacion />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;



