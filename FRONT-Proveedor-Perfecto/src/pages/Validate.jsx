import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Validate() {
  const { registrationCode } = useParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const validateUser = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/users/validate/${registrationCode}`,
          { method: "PUT" }
        );

        const body = await res.json();
        if (!res.ok) throw new Error(body.message);

        setSuccess(true);
        toast.success("Tu usuario ha sido validado correctamente");

        setTimeout(() => navigate("/login"), 2000);
      } catch (err) {
        setError(err.message);
        toast.error(err.message);
      }
    };

    if (registrationCode) validateUser();
    else {
      toast.error("Código de validación no proporcionado");
    }
  }, [registrationCode, navigate]);

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
      <div className="text-center">
        {success ? (
          <p className="text-green-400 font-bold text-lg">
            Usuario validado correctamente. Redirigiendo al login...
          </p>
        ) : error ? (
          <p className="text-red-400 font-bold text-lg">{error}</p>
        ) : (
          <p className="text-gray-500">Validando usuario...</p>
        )}
      </div>
      <ToastContainer position="bottom-right" />
    </main>
  );
}
