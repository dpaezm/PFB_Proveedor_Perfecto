import Input from "../components/Input";
import useLogin from "../hooks/useLogin";

export default function Login() {
  const { error, formState, handleSubmit, handleChange } = useLogin();
  return (
    <div className="w-screen h-80 flex flex-col items-center">
      <h2 className="text-cta md:text-[36px] text-negro font-bold">Login</h2>
      {error && <p className="error">{error}</p>}
      <form
        className=" w-full max-h-screen flex-grow-1 md:w-20% mx-auto flex flex-col justify-self-center gap-6 md:gap-8 items-center max-w-[900px] "
        onSubmit={handleSubmit}
      >
        <ul className=" ">
          <li className="p-2">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              {" "}
            </label>
            <Input
              className="formulario bg-blanco"
              type="email"
              required
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="Email"
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
        </ul>
        <button className="boton bg-amarillo cursor-pointer ">
          Inicia sesión
        </button>
      </form>
    </div>
  );
}
