import Input from "../components/Input";
import PasswordInput from "../components/PasswordInput";
import useLogin from "../hooks/useLogin";
import { Link, NavLink } from "react-router-dom";
import "./login.css";
import logo from "./../assets/LOGO_find.png";

export default function Login() {
  const { formState, handleSubmit, handleChange } = useLogin();
  return (
    <div className="container-login">
      <NavLink to={"/"}>
        <button id="logo-icon" style={{ backgroundImage: `url(${logo})` }} />
      </NavLink>
      {/*       <h1 className="titulo-cat2">Login</h1> */}
      <p className="txt-destacado">Bienvenido de nuevo</p>

      <form className="" onSubmit={handleSubmit}>
        <ul className="form-login  ">
          <li className="p-2">
            {/* <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email:{" "}
            </label> */}
            <Input
              /*               className="formulario" */
              placeholder="Email:"
              type="email"
              required
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
            />
          </li>

          <li className=" flex p-2">
            <label className="" htmlFor="password">
              {" "}
            </label>
            <PasswordInput
              className=""
              type="password"
              required
              id="password"
              name="password"
              placeholder="Contraseña"
              value={formState.password}
              onChange={handleChange}
            />
          </li>
        </ul>
        <NavLink to="/recover-pass" className="">
          ¿Has olvidado tu contraseña?
        </NavLink>

        <NavLink to="/register" className="">
          Registrate aquí
        </NavLink>

        <button className="boton boton2 boton-amarillo2">Inicia sesión</button>
      </form>
    </div>
  );
}
