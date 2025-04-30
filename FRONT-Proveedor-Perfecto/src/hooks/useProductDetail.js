import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const { VITE_API_URL } = import.meta.env;

export default function useProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  async function loadProductDetail() {
    try {
      setError(null);
      const res = await fetch(`${VITE_API_URL}/products/${id}`);
      if (!res.ok) throw new Error("Producto no encontrado");

      const { data } = await res.json();
      setProduct(data);
    } catch (error) {
      console.error("Error cargando producto", error);
      setProduct(null);
      setError(error.message);
    }
  }
  useEffect(() => {
    loadProductDetail();
  }, [id]);
  return { product, error };
}
