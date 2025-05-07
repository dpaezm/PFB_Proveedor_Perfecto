import { NavLink } from "react-router-dom";
import "./../components/Contact/Contact.css";

import UserContactRequestList from "../components/Contact/UserContactRequestsList";

export default function ManageUserContactRequests() {
  return (
    <>
      <h1 className="titulo-cat2">Gestiona tus solicitudes de contacto</h1>
      <UserContactRequestList />
      <NavLink to={"/user-data"}>
        <button id="boton-atras" className="boton boton2 boton-atras">
          Atrás
        </button>
      </NavLink>
    </>
  );
}
