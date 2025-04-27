import { NavLink } from "react-router-dom";
import "./PreFooter.css";
import useCategories from "../hooks/useCategories";

export default function PreFooter() {
  const { categories } = useCategories();
  return (
    <>
      <ul id="titulos-prefooter">
        <li className="txt-destacado">
          <NavLink to="/categories">Categorías</NavLink>
        </li>
        <li className="txt-destacado">
          <NavLink to="/providers">Proveedores</NavLink>
        </li>
        <li className="txt-destacado">
          <NavLink to="/profile">Clientes</NavLink>
        </li>
        <li className="txt-destacado">
          <NavLink to="/">Company</NavLink>
        </li>
      </ul>
      <section id="txt-prefooter">
        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              <NavLink to={`/categories/${category.id}`}>{category.categoryname}</NavLink>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
