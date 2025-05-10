import { useState } from "react";
import { answerContactRequestService } from "../services/contactService";
import { toast } from "react-toastify";

export default function useAnswerContactRequest() {
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e, request_id, onSucces) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const token = localStorage.getItem("token");

    try {
      await answerContactRequestService({ request_id, answer, token });
      toast.success("Respuesta enviada correctamente");
      onSucces?.();
      setAnswer("");
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }
  return {
    answer,
    setAnswer,
    loading,
    error,
    handleSubmit,
  };
}
