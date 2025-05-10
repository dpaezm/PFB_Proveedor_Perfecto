import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { searchProductService } from "../services/productService";
import ProductDetail from "../components/Product/Product";
import ProductList from "./ProductList";
import homeIcon from "./../assets/icons/home.png";

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
    <section className="container-products-category">
      <h1 className="titulo-cat2">
        <NavLink to={"/"}>
          <button id="home-icon" style={{ backgroundImage: `url(${homeIcon})` }} />
        </NavLink>
        Resultados de búsqueda
      </h1>

      <ProductList products={products} />
    </section>
  );
}
