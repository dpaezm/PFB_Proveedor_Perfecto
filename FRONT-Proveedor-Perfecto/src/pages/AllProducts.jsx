import homeIcon from "./../assets/icons/home.png";
import { NavLink, useLocation } from "react-router-dom";
import useAllProducts from "../hooks/useAllProducts";
import ProductList from "./ProductList";

export default function AllProducts() {
  const { products, error } = useAllProducts();

  return (
    <section className="container-all-products">
      <h1 className="titulo-cat2">
        <NavLink to={"/"}>
          <button id="home-icon" style={{ backgroundImage: `url(${homeIcon})` }} />
        </NavLink>
        <NavLink to={"/categories"}>Categorías / </NavLink>
        Todos los productos
      </h1>
      {error && <p>{error}</p>}
      {products.length === 0 ? <p>No hay productos disponibles</p> : <ProductList products={products} />}
    </section>
  );
}
