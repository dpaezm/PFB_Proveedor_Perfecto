import { useEffect, useState } from "react";

const { VITE_API_URL } = import.meta.env;

export default function useProviders() {
  const [providers, setProviders] = useState([]);

  async function loadProviders() {
    try {
      let res = await fetch(VITE_API_URL + "/providers");

      let { data } = await res.json();
      setProviders(data);
    } catch (error) {
      console.error("Error cargando proveedores", error);
      setProviders([]);
    }
  }
  useEffect(() => {
    loadProviders();
  }, []);
  return { providers };
}
