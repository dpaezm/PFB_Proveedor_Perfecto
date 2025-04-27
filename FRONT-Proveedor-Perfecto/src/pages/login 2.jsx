import Input from "../components/Input";
import useLogin from "../hooks/useLogin";

export default function Login() {
  const { error, formState, handleSubmit, handleChange } = useLogin();
  return (
    <main className="p-5">
      <h2 className="text-cta md:text-[36px] text-amarillo font-bold text-center">
        Login
      </h2>
      {error && <p className="error">{error}</p>}
      <form
        className="p-5 border-solid border-2 rounded-md  text-normal text-gris1 font-normal text-center"
        onSubmit={handleSubmit}
      >
        <ul className="p-2 flex-col ">
          <li className="p-2">
            <label htmlFor="email">Email: </label>
            <Input
              type="email"
              required
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
            />
          </li>
          <li className="p-2">
            <label htmlFor="password">Contraseña: </label>
            <Input
              required
              id="password"
              name="password"
              value={formState.password}
              onChange={handleChange}
            />
          </li>
        </ul>
        <button className="bg-gris1 hover:bg-amarillo2 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors">
          Enviar
        </button>
      </form>
    </main>
  );
}
