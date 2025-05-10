import Input from "../components/Input";
import PasswordInput from "../components/PasswordInput";
import useLogin from "../hooks/useLogin";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  const { formState, handleSubmit, handleChange } = useLogin();
  return (
    <div className="container-login">
      <h1 className="titulo-cat2">Login</h1>
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
        <Link to="/recover-pass" className="">
          ¿Has olvidado tu contraseña?
        </Link>

        <button className="boton boton2 boton-amarillo2">Inicia sesión</button>
      </form>
    </div>
  );
}
