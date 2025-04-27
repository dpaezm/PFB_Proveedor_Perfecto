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
        <ul>
          <li>
            <p>Hazte proveedor de Find;)</p>
            <p>Como funciona Find;)? </p>
            <p>Manuales Find;)</p>
            <p>Eventos Find;)</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>Encuentra el proveedor perfecto</p>
            <p>Servicio de atención al cliente </p>
            <p>Preguntas frecuentes</p>
            <p>Seguridad al comprador</p>
            <p>Eventos</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>Acerca de Find;)</p>
            <p>Ayuda y soporte </p>
            <p>Careers</p>
            <p>Termino de servicio</p>
            <p>Política</p>
          </li>
        </ul>
      </section>
    </>
  );
}
