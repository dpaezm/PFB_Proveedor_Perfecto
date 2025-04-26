import { useState } from 'react';
import { validateUserEmail } from '../services/authService';

const useUserValidation = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const validate = async (email) => {
        setLoading(true);
        setMessage(''); 

        try {
           const response = await fetch('/users/validate/:registrationCode', activateUserController);
            if (response.success) {
                setMessage('¡El usuario ha sido validado correctamente!');
            } else {
                setMessage('No se encuentra el usuario o ya ha sido validado.');
            }
        } catch (error) {
            setMessage('Hubo un error al validar el usuario. Intenta de nuevo.');
        } finally {
            setLoading(false);
        }
    };

    return { validate, loading, message };
};

export default useUserValidation;