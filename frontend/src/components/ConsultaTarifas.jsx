// ConsultaTarifas.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const ConsultaTarifas = () => {
  const [vuelos, setVuelos] = useState([]);

  useEffect(() => {
    // Datos de ejemplo de vuelos con tarifas
    const vuelosEjemplo = [
      { id: 1, origen: 'Bogotá', destino: 'Medellín', tarifa: 150000 },
      { id: 2, origen: 'Bogotá', destino: 'Cali', tarifa: 120000 },
      { id: 3, origen: 'Medellín', destino: 'Cartagena', tarifa: 180000 },
      // Agrega más vuelos según tus necesidades
    ];

    // Simulamos una llamada a la API para obtener la información de vuelos
    // Puedes comentar o eliminar este bloque cuando tengas la lógica con la API real
    setTimeout(() => {
      setVuelos(vuelosEjemplo);
    }, 1000);
  }, []);

  return (
    <div className="container mt-5">
      <h2>Consulta de Vuelos por Tarifas</h2>
      <div className="card">
        <div className="card-body">
          <h3>Lista de Vuelos</h3>
          <ul>
            {vuelos.map((vuelo) => (
              <li key={vuelo.id}>
                {vuelo.origen} - {vuelo.destino}: ${vuelo.tarifa}
              </li>
            ))}
          </ul>
          <Link to="/consulta-vuelos" className="btn btn-primary">
            Regresar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConsultaTarifas;
