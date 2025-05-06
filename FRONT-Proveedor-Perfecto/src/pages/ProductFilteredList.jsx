import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { searchProductService } from "../services/productService";
import ProductDetail from "../components/Product/Product";

export default function ProductFilteredList() {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("input");

  useEffect(() => {
    async function fetch() {
      try {
        const data = await searchProductService(query);
        setProducts(data);
      } catch (error) {
        console.error("Error en la busqueda", error.message);
      }
    }
    if (query) fetch();
  }, [query]);

  return (
    <section className="product-list">
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <NavLink to={`/product/${product.id}`} state={{ from: location }}>
              <ProductDetail product={product} />
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
