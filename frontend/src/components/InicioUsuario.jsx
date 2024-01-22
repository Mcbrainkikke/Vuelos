// src/components/ConsultaVuelos.js
import React from 'react';
import { Link } from 'react-router-dom';

const ConsultaVuelos = () => {
  return (
    <div className="container mt-5">
      <h2>Consulta de Vuelos</h2>
      <div className="card">
        <div className="card-body">
          <p>Selecciona una opción:</p>
          <div className="d-grid gap-2">
            <Link to="/consulta-vuelos" className="btn btn-info">Consultar Vuelos</Link>
            <Link to="/reserva-vuelos" className="btn btn-info">Reservar Vuelos</Link>
            <Link to="/compra-billetes" className="btn btn-info">Comprar Billetes</Link>
          </div>
        </div>
      </div>
      <br></br>
      <Link to="/" className="btn btn-primary">Regresar</Link>
    </div>
  );
};

export default ConsultaVuelos;
