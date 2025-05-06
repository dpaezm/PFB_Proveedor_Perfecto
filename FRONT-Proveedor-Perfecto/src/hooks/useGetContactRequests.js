import { useEffect, useState } from "react";
import { getContactRequestsService } from "../services/contactService";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/authContext";

export default function useGetContactRequests() {
  const { id: providerId } = useParams();
  const { token } = useAuth();

  const [requests, setRequests] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadRequests() {
      try {
        const data = await getContactRequestsService({ providerId, token });
        setRequests(data);
      } catch (error) {
        setError(error.message);
        toast.error(error.message);
      }
    }
    loadRequests();
  }, [providerId]);
  return {
    requests,
    error,
  };
}
