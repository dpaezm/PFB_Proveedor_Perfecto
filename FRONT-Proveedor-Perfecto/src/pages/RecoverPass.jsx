import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { sendRecoverPassService } from "../services/SendRecoverPassEmail";
import "./RecoverPass.css";
import "react-toastify/dist/ReactToastify.css";

export default function RecoverPass() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendRecoverPassService(email);

      toast.success("Revisa tu correo para restablecer tu contraseña");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (e) {
      toast.error("Error al enviar el email de recuperación");
    }
  };

  return (
    <div className="recover-container">
      <form onSubmit={handleSubmit} className="recover-form">
        <h2>Recuperar contraseña</h2>

        <label htmlFor="email">Introduce tu correo electrónico:</label>
        <input
          className="formulario"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit" className="boton bg-amarillo cursor-pointer">
          Enviar enlace
        </button>
      </form>
      <ToastContainer position="bottom-right" />
    </div>
  );
}
