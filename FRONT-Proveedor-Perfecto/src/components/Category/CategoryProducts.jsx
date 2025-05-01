import { NavLink, useLocation, useParams } from "react-router-dom";
import useProductsByCategory from "../../hooks/useProductsByCategory";
import Product from "./../Product/Product.jsx";
import "./CategoryProducts.css";
import homeIcon from "./../../assets/icons/home.png";

export default function CategoryProducts() {
  const { id } = useParams();
  const { products, categoryName } = useProductsByCategory(id);
  const location = useLocation();

  return (
    <section className="container-products-category">
      <h2>
        <NavLink to={"/"}>
          <button id="home-icon" style={{ backgroundImage: `url(${homeIcon})` }} />
        </NavLink>
        {categoryName}
      </h2>
      <ul className="list-products-category">
        {products.map((product) => (
          <li key={product.id} className="li-product-category">
            <NavLink to={`/product/${product.id}`} state={{ from: location }}>
              <Product product={product} />
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
