import "./Encuentra.css";

import searchIcon from "../../assets/icons/search.png";

export default function Encuentra() {
  return (
    <section id="section-encuentra">
      <h1>
        Encuentra el <br />
        proveedor perfecto
      </h1>
      <form>
        <li>
          <label htmlFor="encuentra"></label>
          <input type="text" id="encuentra" placeholder="Prueba con Agente de IA" />
          <button
            id="icon-search"
            style={{
              backgroundImage: `url(${searchIcon})`,
            }}
          >
            buscar
          </button>
        </li>
      </form>
    </section>
  );
}
