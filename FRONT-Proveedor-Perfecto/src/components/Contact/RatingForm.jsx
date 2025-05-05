import useRating from "../../hooks/useRating";
import { Rating } from "@mui/material";

export default function RatingForm({ request, onRated }) {
  const { comment, setComment, rating, setRating, loading, handleSubmit, submitted } = useRating(request.id, onRated);

  return (
    <form onSubmit={handleSubmit} className="formulario-valoracion">
      <h4>Déjanos tu opinión</h4>
      <Rating name="rating" value={rating} onChange={(e, newValue) => setRating(newValue)} />
      <textarea
        name="comment"
        placeholder="Describe tu experiencia con el proveedor"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      />
      <button type="submit" className="boton2 boton-amarillo2" disabled={loading}>
        {loading ? "Enviando..." : "Enviar valoración"}
      </button>
    </form>
  );
}
