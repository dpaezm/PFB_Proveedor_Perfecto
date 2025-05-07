import { NavLink } from "react-router-dom";
import ContactRequestList from "../components/Contact/ContactRequestsList";

export default function ManageContactRequests() {
  return (
    <section className="container-contact-request-list">
      <h1 className="titulo-cat2">Gestiona tus solicitudes de contacto</h1>
      <ContactRequestList />
      <NavLink to={"/user-data"}>
        <button className="boton boton2 ">Atrás</button>
      </NavLink>
    </section>
  );
}
