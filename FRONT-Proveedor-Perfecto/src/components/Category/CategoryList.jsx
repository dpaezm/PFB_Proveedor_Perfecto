import { NavLink } from "react-router-dom";
import useCategories from "../../hooks/useCategories.js";
import Category from "./Category.jsx";

export default function CategoryList() {
  const { categories } = useCategories();

  return (
    <>
      <h2>Categorías Populares</h2>
      <section className="container-categories">
        <ul className="section-product-list">
          {categories.map((category) => (
            <li key={category.id} className="li-category">
              <NavLink to={`/categories/${category.id}`}>
                <Category category={category} />
              </NavLink>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
