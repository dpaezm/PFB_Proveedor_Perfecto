import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const { VITE_API_URL } = import.meta.env;

export default function useProviderDetail() {
  const { id } = useParams();
  const [provider, setProvider] = useState(null);

  async function loadProviderDetail() {
    try {
      let res = await fetch(`${VITE_API_URL}/providers/${id}`);

      const { data } = await res.json();
      // console.log(data);
      setProvider(data);
    } catch (error) {
      console.error("Error cargando proveedor", error);
      setProvider(null);
    }
  }
  useEffect(() => {
    loadProviderDetail();
  }, [id]);
  return { provider };
}
