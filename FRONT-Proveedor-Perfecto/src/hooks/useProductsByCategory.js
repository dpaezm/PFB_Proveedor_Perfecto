import { useEffect, useState } from "react";

const { VITE_API_URL } = import.meta.env;

export default function useProductsByCategory(categoryId) {
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  async function loadProducts() {
    try {
      let res = await fetch(`${VITE_API_URL}/categories/${categoryId}`);
      const { data } = await res.json();
      setProducts(data);
      setCategoryName(data[0].categoryname);
    } catch (error) {
      console.error("Error cargando productos ", error);
      setProducts([]);
    }
  }
  useEffect(() => {
    loadProducts();
  }, [categoryId]);
  return { products, categoryName };
}
