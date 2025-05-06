import { NavLink } from "react-router-dom";

import UserContactRequestList from "../components/Contact/UserContactRequestsList";

export default function ManageUserContactRequests() {
  return (
    <>
      <h1 className="titulo-cat2">Gestiona tus solicitudes de contacto</h1>
      <UserContactRequestList />
      <NavLink to={"/user-data"}>
        <button className="boton boton2">Atrás</button>
      </NavLink>
    </>
  );
}
