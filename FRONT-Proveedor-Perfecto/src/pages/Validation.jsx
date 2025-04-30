import React, { useState } from 'react';
import useUserValidation from '../hooks/usevalidacion'; 
import { Link } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../index.css";

export default function Validation() {

  const Validation = () => {
    const [email, setEmail] = useState('');
    const { validate, loading, message } = useValidation();

    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        validate('/users/validate/:registrationCode', activateUserController); 
    };

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-start">
            <h1 className="font-bold">
                Validación de Usuario
            </h1>
            <form onSubmit={handleSubmit} className="w-full max-h-screen flex-grow-1 md:w-20% mx-auto flex flex-col justify-self-center gap-6 md:gap-8 items-center max-w-[900px] ">
                <div>
                    <label htmlFor="email" className="block mb-2">Correo Electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleChange}
                        required
                        className="formulario"
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="boton bg-amarillo cursor-pointer">
                    {loading ? 'Validando...' : 'Validar Usuario'}
            </button>
            </form>
            {message && <p className="text-lg text-gray-700">{message}</p>}
            <Link to="/" className="text-blue-500 hover:underline">Volver a la Página Principal</Link>
        </div>
    );
};

}

