// components/ConsultaPorHorario.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ConsultaPorHorario = () => {
  const [horarios, setHorarios] = useState([]);
  const origen = 'Bogota'; 
  const destino = 'Medellin'; 
  const horarioConsulta = '10:00 AM'; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/vuelos/horarios-por-horario?origen=${origen}&destino=${destino}&horario=${horarioConsulta}`);
        console.log('Respuesta del servidor (Consulta por horario):', response.data);
        setHorarios(response.data);
      } catch (error) {
        console.error('Error al obtener horarios de vuelos:', error);
      }
    };

    fetchData();
  }, [origen, destino, horarioConsulta]);

  return (
    <div className="container mt-5">
      <h2>Horarios de Vuelos según Horario</h2>
      <p>Aquí puedes consultar los horarios de vuelos según diferentes aerolíneas para un horario específico.</p>
      <p>Horario de consulta: {horarioConsulta}</p>
      <div className="mt-4">
        <h3>Horarios Disponibles</h3>
        <ul>
          {horarios.map((horario) => (
            <li key={horario._id}>
              <strong>{horario.origen}</strong> - <strong>{horario.destino}</strong>: {horario.aerolinea} - {horario.horario}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ConsultaPorHorario;
