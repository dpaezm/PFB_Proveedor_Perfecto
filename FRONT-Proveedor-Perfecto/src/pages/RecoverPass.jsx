import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { sendRecoverPassService } from "../services/SendRecoverPassEmail";
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
    } catch (err) {
      toast.error("Error al enviar el email de recuperación");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6 ">
      <form
        onSubmit={handleSubmit}
        className="w-full max-h-screen flex-grow-1 md:w-20% mx-auto flex flex-col justify-self-center gap-6 md:gap-8 items-center max-w-[900px]"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-amarillo">
          Recuperar contraseña
        </h2>

        <label htmlFor="email" className="block mb-2 text-gris1">
          Introduce tu correo electrónico:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          className="formulario"
        />

        <button type="submit" className="boton bg-amarillo cursor-pointer">
          Enviar enlace
        </button>
      </form>
      <ToastContainer position="bottom-right" />
    </main>
  );
}
