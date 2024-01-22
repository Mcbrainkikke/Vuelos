import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { NavLink } from 'react-router-dom';



const ConsultaVuelos = () => {
  const [horariosVuelos, setHorariosVuelos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/vuelos/horarios', {
          params: {
            origen: 'Bogota',
            destino: 'Medellin',
          },
        });
        console.log('Respuesta del servidor:', response);

        if (response.data.length === 0) {
          console.warn('Advertencia: No se encontraron horarios de vuelos.');
        }

        setHorariosVuelos(response.data);
      } catch (error) {
        console.error('Error al obtener horarios de vuelos:', error);
        // Agregar manejo de error según tus necesidades
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
          
          <NavLink to="/consulta-vuelos/horarios-por-horario" className="btn btn-info">Horarios por Horario</NavLink>
            <Link to="/consulta-vuelos/tarifas" className="btn btn-info">Tarifas de Vuelos</Link>
            <Link to="/consulta-vuelos/informacion" className="btn btn-info">Información de Vuelo</Link>
          </div>
          <Link to="/inicio-usuario" className="btn btn-primary">Regresar</Link>        
        
        </div>
      </div>
    </div>
  );
};

export default ConsultaVuelos;
