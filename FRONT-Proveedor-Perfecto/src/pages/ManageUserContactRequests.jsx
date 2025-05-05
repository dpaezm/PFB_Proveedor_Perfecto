import { NavLink } from "react-router-dom";

import UserContactRequestList from "../components/Contact/UserContactRequestsList";

export default function ManageUserContactRequests() {
  return (
    <>
      <p className="txt-destacado">Gestiona tus solicitudes de contacto</p>
      <UserContactRequestList />
      <NavLink to={"/user-data"}>
        <button className="boton boton2">Atrás</button>
      </NavLink>
    </>
  );
}
