import Input from "../components/Input";
import PasswordInput from "../components/PasswordInput";
import useLogin from "../hooks/useLogin";
import { Link } from "react-router-dom";

export default function Login() {
  const { error, formState, handleSubmit, handleChange } = useLogin();
  return (
    <div className=" flex flex-col flex-grow justify-center items-center">
      <h2 className="text-logo md:text-[32px] text-negro ">Login</h2>
      <h3 className="flex flex-col  justify-center items-center">
        Bienvenido de nuevo
      </h3>

      <div className="w-screen h-80 flex flex-col items-center">
        {error && <p className="error">{error}</p>}
        <form
          className=" border-gris1  text-normal text-negro font-bold text-center w-full max-w-xs gap-6 "
          onSubmit={handleSubmit}
        >
          <ul className=" ">
            <li className="p-2  ">
              {/* <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email:{" "}
            </label> */}
              <Input
                className="formulario bg-blanco"
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
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="password"
              >
                {" "}
              </label>
              <PasswordInput
                className="formulario bg-blanco"
                type="password"
                required
                id="password"
                name="password"
                placeholder="Contraseña"
                value={formState.password}
                onChange={handleChange}
              />
            </li>
            <li>
              <Link to="/recover-pass" className="text-blue-600 underline">
                ¿Has olvidado tu contraseña?
              </Link>
            </li>
          </ul>

          <button className="boton bg-amarillo cursor-pointer justify-self-center  ">
            Inicia sesión
          </button>
        </form>
      </div>
    </div>
  );
}
