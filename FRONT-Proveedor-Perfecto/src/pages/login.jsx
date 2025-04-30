import Input from "../components/Input";
import useLogin from "../hooks/useLogin";

export default function Login() {
  const { error, formState, handleSubmit, handleChange } = useLogin();
  return (
    <div className=" flex flex-col flex-grow justify-center items-center">
      <h2 className="text-logo md:text-[32px] text-negro ">Login</h2>
      <h3 className="flex flex-col  justify-center items-center">
        Bienvenido de nuevo
      </h3>

    <div className="w-screen h-80 flex flex-col items-center">
      <h2 className="text-cta md:text-[36px] text-negro font-bold">Login</h2>
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

          <li className="p-2">
            <label className="block text-sm font-bold mb-2" htmlFor="password">
              {" "}
            </label>
            <Input
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
            <link rel="stylesheet" href="www.google.es" />
            Haz olvidado tu contraseña?
          </li>
        </ul>
        <button className="boton bg-amarillo cursor-pointer justify-self-center ">

        <button className="boton bg-amarillo cursor-pointer ">
          Inicia sesión

        </button>
      </form>
    </div>
  );
}
