// src/components/CompraBilletes.js
import React from 'react';
import { Link } from 'react-router-dom';

const CompraBilletes = () => {
  return (
    <div className="container mt-5">
      <h2>Compra de Billetes</h2>
      <div className="card">
        <div className="card-body">
          {/* Contenido para comprar billetes */}
          <Link to="/inicio-usuario" className="btn btn-primary">Regresar</Link>
        </div>
      </div>
    </div>
  );
};

export default CompraBilletes;
