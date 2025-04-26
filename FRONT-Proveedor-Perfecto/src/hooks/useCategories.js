import { useEffect, useState } from "react";

const { VITE_API_URL } = import.meta.env;

export default function useCategories() {
  const [categories, setCategories] = useState([]);

  async function loadCategories() {
    try {
      let res = await fetch(VITE_API_URL + "/categories");

      let { data } = await res.json();
      setCategories(data.entries);
    } catch (error) {
      console.error("Error cargando categorías:", error);
      setCategories([]);
    }
  }
  useEffect(() => {
    loadCategories();
  }, []);

  return { categories };
}
