import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      const res = await fetch(
        `http://localhost:3000/users/password/reset/${recoverPassCode}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ newPassword, repeatedPassword }),
        }
      );

      const body = await res.json();
      if (!res.ok) throw new Error(body.message);

      toast.success("Contraseña actualizada correctamente");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-md rounded-lg p-8"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-amarillo">
          Cambiar contraseña
        </h2>

        <label className="block mb-2">Nueva contraseña</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />

        <label className="block mb-2">Repetir contraseña</label>
        <input
          type="password"
          value={repeatedPassword}
          onChange={(e) => setRepeatedPassword(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded-md mb-6"
        />

        <button
          type="submit"
          className="w-full bg-amarillo text-black font-bold py-2 px-4 rounded-full hover:shadow-lg transition"
        >
          Guardar nueva contraseña
        </button>

        <ToastContainer position="bottom-right" />
      </form>
    </main>
  );
}
