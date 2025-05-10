import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { sendRecoverPassService } from "../services/SendRecoverPassEmail";
import "./RecoverPass.css";
import "react-toastify/dist/ReactToastify.css";
import logo from "./../assets/LOGO_find.png";

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
    <div className="container-login">
      <NavLink to={"/"}>
        <button id="logo-icon" style={{ backgroundImage: `url(${logo})` }} />
      </NavLink>
      <p className="txt-destacado">Recupera tu contraseña</p>
      <form onSubmit={handleSubmit} className="recover-form">
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
        <NavLink to="/login" className="">
          Volver al login
        </NavLink>
        <button type="submit" className="boton2 boton-amarillo2">
          Enviar enlace
        </button>
      </form>
      <ToastContainer position="bottom-right" />
    </div>
  );
}
