import { NavLink } from "react-router-dom";
import useCategories from "../../hooks/useCategories.js";
import Category from "./Category.jsx";
import "./Category.css";

export default function TopCategoryList() {
  const { categories } = useCategories();

  const topCategories = [...categories].sort((a, b) => b.total_products - a.total_products).slice(0, 6);

  return (
    <section className="container-topcategory-list">
      <NavLink to="/categories">
        <h2>Categorías Populares</h2>
      </NavLink>
      <section className="container-categories">
        <ul className="section-category-list">
          {topCategories.map((category) => (
            <li key={category.id} className="li-topcategory">
              <NavLink to={`/categories/${category.id}`}>
                <Category category={category} />
              </NavLink>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
