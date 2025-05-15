import { useEffect, useState } from "react";
import { getIncomingProvidersService } from "../services/adminServices2";
import { useAuth } from "../context/authContext";

export default function useIncomingProviders() {
  const { token } = useAuth();

  const [providers, setProviders] = useState([]);
  const [error, setError] = useState(null);

  async function loadIncomingProviders() {
    try {
      setError(null);

      const res = await getIncomingProvidersService({ token });

      //if (!res.ok) throw new Error("No se han encontrado proveedores");

      console.log(res.data.entries);
      //const { data } = await res.json();

      setProviders(res.data.entries);
    } catch (error) {
      console.error("Error cargando proveedores", error);

      setProviders([]);
      setError(error.message);
    }
  }
  useEffect(() => {
    loadIncomingProviders();
  }, []);

  return { providers, error };
}
