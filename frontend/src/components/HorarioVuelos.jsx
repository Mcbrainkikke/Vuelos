import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ConsultaVuelos = () => {
  const [vuelos, setVuelos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/vuelos/horarios');
        setVuelos(response.data);
      } catch (error) {
        console.error('Error al obtener horarios de vuelos:', error);
        // Maneja el error según tus necesidades
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Consultar Vuelos</h2>
      <div className="card">
        <div className="card-body">
          <p>Selecciona una forma de consultar vuelos:</p>
          <div className="d-grid gap-2">
            <Link to="/consulta-vuelos/horarios" className="btn btn-primary">Horarios de Vuelos</Link>
            <Link to="/consulta-vuelos/tarifas" className="btn btn-success">Tarifas de Vuelos</Link>
            <Link to="/consulta-vuelos/informacion" className="btn btn-info">Información de Vuelo</Link>
          </div>

          <h3 className="mt-4">Lista de Vuelos</h3>
          <ul className="list-group">
            {vuelos.map((vuelo) => (
              <li key={vuelo._id} className="list-group-item">
                {vuelo.origen} - {vuelo.destino} | Aerolínea: {vuelo.aerolinea} | Horario: {vuelo.horario}
              </li>
            ))}
          </ul>

          <Link to="/inicio-usuario" className="btn btn-primary mt-3">Regresar</Link>
        </div>
      </div>
    </div>
  );
};

export default ConsultaVuelos;
