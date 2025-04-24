import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <menu className="flex place-content-center gap-3  ">
        <li className="text-destacado md:text-[14px] text-amarillo font-medium text-center">
          <NavLink to={"/"}>Inicio</NavLink>
        </li>
        <li className="text-destacado md:text-[14px] text-amarillo font-medium text-center">
          <NavLink to="/register">Registro</NavLink>
        </li>
        <li className="text-destacado md:text-[14px] text-amarillo font-medium text-center">
          <NavLink to="/login">Login</NavLink>
        </li>
        <li className="text-destacado md:text-[14px] text-amarillo font-medium text-center">
          <NavLink to="/muestra">Muestra</NavLink>
        </li>
      </menu>
    </nav>
  );
}
