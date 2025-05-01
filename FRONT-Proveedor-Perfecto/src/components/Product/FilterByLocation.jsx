import { NavLink } from "react-router-dom";
import locationIcon from "./../../assets/icons/location.png";

export default function FilterByLocation() {
  return (
    <NavLink to={"/products"}>
      <div className="filter-banner">
        <button className="filter-icon" id="location-icon" style={{ backgroundImage: `url(${locationIcon})` }} />
        <p className="txt-destacado">Encuentra proveedores en tu ciudad</p>
      </div>
    </NavLink>
  );
}
