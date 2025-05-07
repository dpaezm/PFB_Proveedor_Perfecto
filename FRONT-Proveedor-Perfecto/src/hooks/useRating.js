import { useState } from "react";
import { toast } from "react-toastify";
import { sendRatingService } from "../services/contactService";
import { useAuth } from "../context/authContext";

export default function useRating(requestId, onRated) {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { token } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      await sendRatingService({ requestId, comment, rating, token });
      toast.success("Valoración enviada correctamente");
      setSubmitted(true);
      if (onRated) onRated({ rating, comment });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }
  return {
    comment,
    setComment,
    rating,
    setRating,
    loading,
    handleSubmit,
    submitted,
  };
}
