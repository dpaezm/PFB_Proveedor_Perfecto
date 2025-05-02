import { NavLink } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function Nav() {
  const { token } = useAuth();
  return (
    <nav className="nav1">
      <menu className="flex place-content-center gap-3  ">
        {token ? <UserNav /> : <AnonNav />}
      </menu>
    </nav>
  );
}

function UserNav() {
  const { logOut } = useAuth();
  return (
    <>
      <>
        <li className="boton boton-blanco">
          <NavLink to="/user-data">Perfil</NavLink>
        </li>
        <li className="boton boton-amarillo">
          <button onClick={logOut}>Logout</button>
        </li>
      </>
    </>
  );
}

function AnonNav() {
  return (
    <>
      <li className="boton boton-blanco" id="b-login">
        <NavLink to="/login">Inicia sesión</NavLink>
      </li>
      <li className="boton boton-amarillo">
        <NavLink to="/register">Regístrate</NavLink>
      </li>
    </>
  );
}
