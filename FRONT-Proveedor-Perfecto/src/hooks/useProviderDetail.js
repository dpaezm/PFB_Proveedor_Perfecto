import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const { VITE_API_URL } = import.meta.env;

export default function useProviderDetail() {
  const { id } = useParams();
  const [provider, setProvider] = useState(null);
  const [error, setError] = useState(null);

  async function loadProviderDetail() {
    try {
      setError(null);
      const res = await fetch(`${VITE_API_URL}/providers/${id}`);
      if (!res.ok) throw new Error("Proveedor no encontrado");

      const { data } = await res.json();
      // console.log(data);
      setProvider(data);
    } catch (error) {
      console.error("Error cargando proveedor", error);
      setProvider(null);
      setError(error.message);
    }
  }
  useEffect(() => {
    loadProviderDetail();
  }, [id]);
  return { provider, error };
}
