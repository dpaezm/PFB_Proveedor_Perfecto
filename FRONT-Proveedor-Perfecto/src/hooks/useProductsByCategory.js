import { useEffect, useState } from "react";

const { VITE_API_URL } = import.meta.env;

export default function useProductsByCategory(categoryId) {
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  async function loadProducts() {
    try {
      let res = await fetch(`${VITE_API_URL}/categories/${categoryId}`);

      if (!res.ok) {
        throw new Error(`Categoría ${categoryId} no encontrada`);
      }

      const { data } = await res.json();

      setProducts(data);
      if (data.length > 0) {
        setCategoryName(data[0].categoryname);
      } else {
        setCategoryName("Sin productos");
      }
    } catch (error) {
      console.error("Error cargando productos ", error);
      setProducts([]);
      setCategoryName("No hay productos en esta categoría");
    }
  }
  useEffect(() => {
    loadProducts();
  }, [categoryId]);
  return { products, categoryName };
}
