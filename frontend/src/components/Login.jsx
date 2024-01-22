// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
            console.log('Inicio de sesión exitoso', response.data);
            // Guarda el token JWT en el estado o en las cookies para su uso posterior

            // Actualiza el estado para redirigir a la nueva página
            setLoggedIn(true);
        } catch (error) {
            console.error('Error en el inicio de sesión', error);
            setError('Credenciales incorrectas o usuario no registrado');
        }
    };

    // Redirección después del inicio de sesión
    if (loggedIn) {
        return <Navigate to="/inicio-usuario" />;
    }

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-body">
                    <h2>Iniciar Sesión</h2>
                    {error && <div className="alert alert-danger" role="alert">{error}</div>}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Correo electrónico</label>
                        <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className="btn btn-primary" onClick={handleLogin}>Iniciar Sesión</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
