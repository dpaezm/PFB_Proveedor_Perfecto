import searchIcon from "../../assets/icons/search.png";

export default function Encuentra() {
  return (
    <section id="section-encuentra">
      <h2>Encuentra el proveedor perfecto</h2>
      <form>
        <li>
          <label htmlFor="encuentra"></label>
          <input type="text" id="encuentra" placeholder="Prueba con Agente de IA" />
          <button id="buscar">Buscar</button>
        </li>
      </form>
    </section>
  );
}
