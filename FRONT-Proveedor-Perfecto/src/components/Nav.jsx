import { NavLink } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import useUserProfile from "../hooks/UseUserProfile";

export default function Nav() {
  const { token } = useAuth();
  return (
    <nav className="nav1">
      <menu className="flex place-content-center gap-3  ">{token ? <UserNav /> : <AnonNav />}</menu>
    </nav>
  );
}

function UserNav() {
  const navigate = useNavigate();
  const user = useUserProfile();
  const isProvider = user.isprovider;

  const { logOut } = useAuth();
  return (
    <>
      <>
        {isProvider ? (
          <button
            id="create-product-button"
            className="boton boton-amarillo"
            onClick={() => navigate("/create-product")}
          >
            Crear Producto
          </button>
        ) : null}
        <li className="boton boton-blanco">
          <NavLink to="/user-data">Perfil</NavLink>
        </li>
        {/*         <li className="boton boton-amarillo">
          <button onClick={logOut}>Logout</button>
        </li> */}
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
