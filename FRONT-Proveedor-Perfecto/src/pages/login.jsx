import Input from "../components/Input";
import useLogin from "../hooks/useLogin";

export default function Login() {
  const { error, formState, handleSubmit, handleChange } = useLogin();
  return (
    <div className="">
      <h2 className="text-cta md:text-[36px] text-amarillo font-bold">Login</h2>
      {error && <p className="error">{error}</p>}
      <form
        className=" p-5 border-solid border-2 rounded-md  text-normal text-negro font-bold text-center bg-amarillo w-full max-w-xs"
        onSubmit={handleSubmit}
      >
        <ul className=" ">
          <li className="p-2">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email:{" "}
            </label>
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
            <label className="block text-sm font-bold mb-2" htmlFor="password">
              Contraseña:{" "}
            </label>
            <Input
              type="password"
              required
              id="password"
              name="password"
              value={formState.password}
              onChange={handleChange}
            />
          </li>
        </ul>
        <button className="bg-black hover:bg-white hover:text-black text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors">
          Enviar
        </button>
      </form>
    </div>
  );
}
