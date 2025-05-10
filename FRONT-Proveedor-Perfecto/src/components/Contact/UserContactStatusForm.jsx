import { Rating } from "@mui/material";
import useContactStatus from "../../hooks/useContactStatus";
import RatingForm from "./RatingForm";
import { useState } from "react";

export default function UserContactStatusForm({ request }) {
  const { id, answer, status: initialStatus, rating, comment } = request;
  const { handleStatusChange, loading } = useContactStatus();

  const [localRating, setLocalRating] = useState(request.rating);
  const [localComment, setLocalComment] = useState(request.comment);
  const [localStatus, setLocalStatus] = useState(initialStatus);

  if (!answer) {
    return null;
  }

  if (localStatus === "cancelado") {
    return <p className="txt-destacado">Has rechazado esta propuesta de servicio</p>;
  }

  if (localStatus === "finalizado" && localRating) {
    return (
      <div className="valoracion-enviada">
        <Rating value={localRating} readOnly />
        <p>{localComment}</p>
      </div>
    );
  }

  if (localStatus === "finalizado" && !localRating) {
    return (
      <>
        <RatingForm
          request={request}
          onRated={({ rating, comment }) => {
            setLocalRating(rating);
            setLocalComment(comment);
          }}
        />
      </>
    );
  }

  return (
    <div className="formulario-respuesta">
      <button
        className="boton2 boton-amarillo2"
        onClick={() => handleStatusChange(id, "finalizado", () => setLocalStatus("finalizado"))}
        disabled={loading}
      >
        Aceptar
      </button>
      <button
        className="boton2"
        onClick={() => handleStatusChange(id, "cancelado", () => setLocalStatus("cancelado"))}
        disabled={loading}
      >
        Rechazar
      </button>
    </div>
  );
}
