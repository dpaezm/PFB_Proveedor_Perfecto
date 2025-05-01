import { useEffect, useState } from "react";

const { VITE_API_URL } = import.meta.env;

export default function useAllProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  async function loadAllProducts() {
    try {
      setError(null);

      const res = await fetch(VITE_API_URL + "/products");

      if (!res.ok) throw new Error("No se han encontrado productos");

      const { data } = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Error cargando productos", error);

      setProducts([]);
      setError(error.message);
    }
  }
  useEffect(() => {
    loadAllProducts();
  }, []);

  return { products, error };
}
