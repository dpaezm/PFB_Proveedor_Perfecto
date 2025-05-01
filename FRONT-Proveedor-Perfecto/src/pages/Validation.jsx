import React, { useState } from 'react';
import useValidation from '../hooks/useValidation'; 
import { Link } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../index.css";

export default function Validation() {

 /*  const Validation = () => {
    const [email, setEmail] = useState('');
    const { validate, loading, message } = useValidation();

    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        validate('/users/validate/:registrationCode', ); 
    }; */
return(
    <h2>Validacion</h2>
)
   /* return (
        <div className="w-screen h-screen flex flex-col items-center justify-start">
            <h1 className="font-bold">
                Validación de Usuario
            </h1>
            
                
            
        
            {message && <p className="text-lg text-gray-700">{message}</p>}
            <Link to="/" className="text-blue-500 hover:underline">Volver a la Página Principal</Link>
        </div>
    );*/
};



