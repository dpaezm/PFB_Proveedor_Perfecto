import { NavLink } from "react-router-dom";

export default function Nav() {
  const token = "";

  return (
    <nav className="nav1">
      <menu className="flex place-content-center gap-3  ">
        {/*         <li className="text-destacado md:text-[14px] text-amarillo font-medium text-center">
          <NavLink to={"/"}>Inicio</NavLink>
        </li> */}
        {!token ? (
          <>
            <li className="boton boton-blanco" id="b-login">
              <NavLink to="/login">Inicia sesión</NavLink>
            </li>
            <li className="boton boton-amarillo">
              <NavLink to="/register">Regístate</NavLink>
            </li>
          </>
        ) : (
          <>
            <li className="boton boton-blanco">
              <NavLink to="/perfil">Perfil</NavLink>
            </li>
          </>
        )}
        {/*         <li className="text-destacado md:text-[14px] text-amarillo font-medium text-center">
          <NavLink to="/muestra">Muestra</NavLink>
        </li> */}
      </menu>
    </nav>
  );
}
