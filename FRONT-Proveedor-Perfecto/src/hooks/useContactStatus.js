import { useState } from "react";
import { updateContactRequestStatusService } from "../services/contactService";
import { toast } from "react-toastify";
import { useAuth } from "../context/authContext";

export default function useContactStatus() {
  const [loading, setLoading] = useState(false);
  /*   const [status, setStatus] = useState(""); */
  /*   const [error, setError] = useState(null); */
  const { token } = useAuth();

  async function handleStatusChange(id, status, callback) {
    /*   setError(null); */

    try {
      setLoading(true);
      await updateContactRequestStatusService({ requestId: id, status, token });
      toast.success(`Servicio ${status}`);
      /*     setStatus(newStatus); */
      if (callback) callback();
    } catch (error) {
      toast.error(error.message);
      /*       setError(error.message); */
    } finally {
      setLoading(false);
    }
  }
  return { loading, handleStatusChange };
}
