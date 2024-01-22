// src/components/ReservaVuelos.js
import React from 'react';
import { Link } from 'react-router-dom';

const ReservaVuelos = () => {
  return (
    <div className="container mt-5">
      <h2>Reserva de Vuelos</h2>
      <div className="card">
        <div className="card-body">
          {/* Contenido para reservar vuelos */}
          <Link to="/inicio-usuario" className="btn btn-primary">Regresar</Link>
        </div>
      </div>
    </div>
  );
};

export default ReservaVuelos;
