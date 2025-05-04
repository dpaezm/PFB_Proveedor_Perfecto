import { NavLink } from "react-router-dom";
import ContactRequestList from "../components/Contact/ContactRequestsList";

export default function ManageContactRequests() {
  return (
    <>
      <p className="txt-destacado">Gestiona tus solicitudes de contacto</p>
      <ContactRequestList />
      <NavLink to={"/user-data"}>
        <button className="boton boton2">Atrás</button>
      </NavLink>
    </>
  );
}
