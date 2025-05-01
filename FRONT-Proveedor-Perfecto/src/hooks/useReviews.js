import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const { VITE_API_URL } = import.meta.env;

export default function useReviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  async function loadReviews() {
    try {
      const res = await fetch(`${VITE_API_URL}/reviews/provider/${id}`);
      const json = await res.json();

      if (!res.ok) throw new Error("Error del servidor");

      if (json.status === "error") {
        setReviews([]);
        return;
      }

      setReviews(json.data);
    } catch (error) {
      console.error("Error cargando reseñas", error);

      setError(error.message);
    }
  }
  useEffect(() => {
    loadReviews();
  }, [id]);
  return { reviews, error };
}
