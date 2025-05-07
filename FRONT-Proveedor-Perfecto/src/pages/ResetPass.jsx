import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { resetPasswordService } from "../services/userServices";
import "./ResetPass.css";

export default function ResetPass() {
  const { recoverPassCode } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== repeatedPassword) {
      toast.error("Las contraseñas no coinciden");
      return;
    }

    try {
      await resetPasswordService(
        recoverPassCode,
        newPassword,
        repeatedPassword
      );
      toast.success("Contraseña actualizada correctamente");
      setTimeout(() => navigate("/login"), 2000);
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <div className="reset-container">
      <form onSubmit={handleSubmit} className="reset-form">
        <h2 className="">Cambiar contraseña</h2>

        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
          placeholder="Nueva contraseña"
          className="formulario"
        />

        <input
          type="password"
          value={repeatedPassword}
          onChange={(e) => setRepeatedPassword(e.target.value)}
          required
          placeholder="Repetir contraseña"
          className="formulario"
        />

        <button
          type="submit"
          className="boton bg-amarillo cursor-pointer w-full"
        >
          Cambiar
        </button>

        <ToastContainer position="bottom-right" />
      </form>
    </div>
  );
}
