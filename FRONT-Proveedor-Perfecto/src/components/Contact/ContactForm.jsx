import { useEffect, useState } from "react";
import useContactRequest from "../../hooks/useContactRequest";
import "./Contact.css";

export default function ContactForm() {
  const [showForm, setShowForm] = useState(false);
  const { comment, setComment, loading, handleSubmit, submitted, setSubmitted } = useContactRequest();

  function toggleForm() {
    setShowForm((prev) => !prev);
  }

  useEffect(() => {
    if (submitted) {
      setShowForm(false);
      setSubmitted(false);
    }
  }, [submitted]);

  return (
    <div className="container-formulario-contacto">
      <button onClick={toggleForm} disabled={loading} className={showForm ? "boton" : "boton-contactar"}>
        {loading ? "Enviando..." : showForm ? "Cerrar formulario" : "Contactar"}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="formulario-contacto">
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
          <button type="submit" disabled={loading} className="boton boton-contactar">
            {loading ? "Enviando..." : "Contactar"}
          </button>
        </form>
      )}
    </div>
  );
}
