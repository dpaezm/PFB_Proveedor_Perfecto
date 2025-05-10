import { NavLink, useLocation, useParams } from "react-router-dom";
import useProductsByCategory from "../../hooks/useProductsByCategory";
import Product from "./../Product/Product.jsx";
import "./CategoryProducts.css";
import homeIcon from "./../../assets/icons/home.png";
import ProductList from "../../pages/ProductList.jsx";

export default function CategoryProducts() {
  const { id } = useParams();
  const { products, categoryName } = useProductsByCategory(id);
  const location = useLocation();

  return (
    <section className="container-products-category">
      <h1 className="titulo-cat2">
        <NavLink to={"/"}>
          <button id="home-icon" style={{ backgroundImage: `url(${homeIcon})` }} />
        </NavLink>
        <NavLink to={"/categories"}>Categorías / </NavLink>
        {categoryName}
      </h1>
      <ProductList products={products} />
    </section>
  );
}
