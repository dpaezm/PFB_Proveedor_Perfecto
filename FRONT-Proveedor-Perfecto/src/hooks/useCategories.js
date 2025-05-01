import { useEffect, useState } from "react";

const { VITE_API_URL } = import.meta.env;

export default function useCategories() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  async function loadCategories() {
    try {
      setError(null);
      const res = await fetch(VITE_API_URL + "/categories");

      if (!res.ok) throw new Error("No se han encontrado categorías");

      const { data } = await res.json();
      setCategories(data.entries);
    } catch (error) {
      console.error("Error cargando categorías:", error);
      setCategories([]);
      setError(error.message);
    }
  }
  useEffect(() => {
    loadCategories();
  }, []);

  return { categories, error };
}
