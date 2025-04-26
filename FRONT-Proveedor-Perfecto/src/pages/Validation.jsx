import React, { useState } from 'react';
import useUserValidation from '../hooks/uservalidacion'; 
import { Link } from 'react-router-dom';

const Validation = () => {
    const [email, setEmail] = useState('');
    const { validate, loading, message } = useUserValidation();

    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        validate(email); 
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
            <h1 className="text-cta md:text-[36px] text-amarillo font-bold text-center mb-4">
                Validación de Usuario
            </h1>
            <form onSubmit={handleSubmit} className="mb-4">
                <div>
                    <label htmlFor="email" className="block mb-2 text-lg text-gray-700">Correo Electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded-lg p-2"
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="mt-4 bg-amarillo text-white py-2 px-4 rounded-lg hover:bg-amarillo2 transition-colors"
                >
                    {loading ? 'Validando...' : 'Validar Usuario'}
                </button>
            </form>
            {message && <p className="text-lg text-gray-700">{message}</p>}
            <Link to="/" className="text-blue-500 hover:underline">Volver a la Página Principal</Link>
        </div>
    );
};

export default Validation;