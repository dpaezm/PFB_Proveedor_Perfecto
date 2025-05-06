import { useState } from "react";
import { sendContactRequestService } from "../services/contactService";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function useContactRequest() {
  const { id: product_id } = useParams();
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { token } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await sendContactRequestService({ product_id, comment, token });
      toast.success("Tu mensaje se ha enviado correctamente");
      setComment("");
      setSubmitted(true);
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }
  return {
    comment,
    setComment,
    loading,
    error,
    submitted,
    setSubmitted,
    handleSubmit,
  };
}
