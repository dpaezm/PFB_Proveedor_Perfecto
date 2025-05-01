import { NavLink } from "react-router-dom";
import dollarIcon from "./../../assets/icons/dollar.png";

export default function FilterByPrice() {
  return (
    <NavLink to={"/products"}>
      <div className="filter-banner">
        <button className="filter-icon" id="dollar-icon" style={{ backgroundImage: `url(${dollarIcon})` }} />
        <p className="txt-destacado">Filtra por rango de precios</p>
      </div>
    </NavLink>
  );
}
