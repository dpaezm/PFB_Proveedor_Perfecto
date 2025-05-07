import { useState } from "react";
import { updateContactRequestStatusService } from "../services/contactService";
import { toast } from "react-toastify";
import { useAuth } from "../context/authContext";

export default function useContactStatus(requestId) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState(null);
  const { token } = useAuth();

  async function handleStatusChange(newStatus) {
    setLoading(true);
    setError(null);

    try {
      await updateContactRequestStatusService({
        requestId,
        status: newStatus,
        token,
      });
      toast.success(`Servicio ${newStatus}`);
      setStatus(newStatus);
    } catch (error) {
      toast.error(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }
  return { status, loading, error, handleStatusChange };
}
