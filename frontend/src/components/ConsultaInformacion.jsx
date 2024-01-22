// ConsultaInformacion.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ConsultaInformacion = () => {
  const [informacionVuelos, setInformacionVuelos] = useState([]);
  const [fecha, setFecha] = useState('');
  const [horario, setHorario] = useState('');
  const [categoriaAsiento, setCategoriaAsiento] = useState('');
  const [aerolinea, setAerolinea] = useState('');
  const [vuelosDirectos, setVuelosDirectos] = useState(false);

  const handleBuscarInformacion = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/informacion', {
        params: { fecha, horario, categoriaAsiento, aerolinea, vuelosDirectos },
      });
  
      console.log('Respuesta del servidor:', response.data);
  
      // Resto del código para manejar la respuesta en el frontend
    } catch (error) {
      console.error('Error al buscar información de vuelos:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Consulta de Información de Vuelos</h2>
      <div className="card">
        <div className="card-body">
          <p>Selecciona tus preferencias para la búsqueda de información de vuelos:</p>
          <div className="mb-3">
            <label htmlFor="fecha" className="form-label">Fecha:</label>
            <input type="date" className="form-control" id="fecha" value={fecha} onChange={(e) => setFecha(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="horario" className="form-label">Horario:</label>
            <input type="time" className="form-control" id="horario" value={horario} onChange={(e) => setHorario(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="categoriaAsiento" className="form-label">Categoría de Asiento:</label>
            <input type="text" className="form-control" id="categoriaAsiento" value={categoriaAsiento} onChange={(e) => setCategoriaAsiento(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="aerolinea" className="form-label">Aerolínea:</label>
            <input type="text" className="form-control" id="aerolinea" value={aerolinea} onChange={(e) => setAerolinea(e.target.value)} />
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="vuelosDirectos" checked={vuelosDirectos} onChange={(e) => setVuelosDirectos(e.target.checked)} />
              <label className="form-check-label" htmlFor="vuelosDirectos">Solo Vuelos Directos</label>
            </div>
          </div>
          <button type="button" className="btn btn-primary" onClick={handleBuscarInformacion}>Buscar Información</button>
        </div>
      </div>
      {/* Agregar sección para mostrar la información de vuelos */}
      <div className="mt-4">
        <h3>Información de Vuelos Disponible</h3>
        {informacionVuelos.length === 0 ? (
          <p>No se encontraron vuelos con los criterios de búsqueda.</p>
        ) : (
          <ul>
            {informacionVuelos.map((vuelo) => (
              <li key={vuelo._id}>
                <strong>{vuelo.origen}</strong> - <strong>{vuelo.destino}</strong>: {vuelo.aerolinea} - {vuelo.horario}
                {/* Mostrar más detalles de la información de vuelo según sea necesario */}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ConsultaInformacion;
