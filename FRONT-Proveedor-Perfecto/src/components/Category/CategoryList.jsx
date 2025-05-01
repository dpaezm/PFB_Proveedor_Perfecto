import { NavLink } from "react-router-dom";
import useCategories from "../../hooks/useCategories.js";
import Category from "./Category.jsx";
import homeIcon from "./../../assets/icons/home.png";

export default function CategoryList() {
  const { categories, error } = useCategories();

  if (error) return <p>{error}</p>;
  if (!categories) return <p>Cargando categorías...</p>;

  return (
    <section className="container-category-list">
      <h2>
        <NavLink to={"/"}>
          <button id="home-icon" style={{ backgroundImage: `url(${homeIcon})` }} />
        </NavLink>

        <NavLink to={"/categories"}>Categorías</NavLink>
      </h2>
      <section className="container-categories">
        <ul className="section-category-list">
          {categories.map((category) => (
            <li key={category.id} className="li-category">
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
