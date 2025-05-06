import { useEffect, useState } from "react";
import useContactRequest from "../../hooks/useContactRequest";
import "./Contact.css";

export default function ContactForm() {
  const { comment, setComment, loading, handleSubmit, submitted, setSubmitted } = useContactRequest();

  useEffect(() => {
    if (submitted) {
      setSubmitted(false);
    }
  }, [submitted]);

  return (
    <div className="container-formulario-contacto">
      <form onSubmit={handleSubmit} className="formulario-contacto">
        {/*           <button type="submit" disabled={loading} className="boton boton-contactar">
            {loading ? "Enviando..." : showForm ? "Enviar" : "Contactar"}
          </button> */}
        <button type="submit" disabled={loading} className="boton2 boton-contactar">
          {loading ? "Enviando..." : "Enviar"}
        </button>
        <textarea
          name="comment"
          placeholder="Escribe tu mensaje para el proveedor..."
          maxLength={255}
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
          required
        />
      </form>

      {/*       <button onClick={toggleForm} disabled={loading} className={showForm ? "boton2" : "boton-contactar"}>
        {loading ? "Enviando..." : showForm ? "Cerrar formulario" : "Contactar"}
      </button> */}
    </div>
  );
}
