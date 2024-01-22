import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:5000/api/users/register', { email, password });
      setRegistrationMessage('Registro exitoso');
    } catch (error) {
      console.error('Error en el registro', error);
      setRegistrationMessage('Error en el registro');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Registro</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <input type="email" className="form-control" id="email" placeholder="Ingresa tu correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input type="password" className="form-control" id="password" placeholder="Ingresa tu contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="button" className="btn btn-primary" onClick={handleRegister}>Registrarse</button>
          </form>

          {registrationMessage && (
            <div className={registrationMessage.includes('exitoso') ? 'alert alert-success mt-3' : 'alert alert-danger mt-3'} role="alert">
              {registrationMessage}
            </div>
          )}

          <p className="mt-3">
            ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

