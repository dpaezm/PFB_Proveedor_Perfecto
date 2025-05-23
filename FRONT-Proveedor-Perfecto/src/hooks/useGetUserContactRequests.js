import { useEffect, useState } from "react";
import { getUserContactRequestService } from "../services/contactService";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/authContext";

export default function useGetUserContactRequests() {
  const { id: userId } = useParams();
  const { token } = useAuth();

  const [requests, setRequests] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadRequests() {
      try {
        const data = await getUserContactRequestService({ userId, token });
        setRequests(data);
      } catch (error) {
        setError(error.message);
        toast.error(error.message);
      }
    }
    loadRequests();
  }, [userId]);
  return {
    requests,
    error,
  };
}
