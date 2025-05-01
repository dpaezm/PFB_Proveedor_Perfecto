import { NavLink } from "react-router-dom";
import agreementIcon from "./../../assets/icons/agreement.png";

export default function FilterByType() {
  return (
    <NavLink to={"/categories"}>
      <div className="filter-banner">
        <button className="filter-icon" id="agreement-icon" style={{ backgroundImage: `url(${agreementIcon})` }} />
        <p className="txt-destacado">Busca por tipología de servicio</p>
      </div>
    </NavLink>
  );
}
