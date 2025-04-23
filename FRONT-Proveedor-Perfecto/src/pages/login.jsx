import useLogin from "../hooks/useLogin";

export default function Login() {
  const { error, formState, handleSubmit, handleChange } = useLogin();
  return (
    <main>
      <h2 className="text-cta md:text-[36px] text-amarillo font-bold text-center">
        Login
      </h2>
      {error && <p className="error">{error}</p>}
      <form
        className="text-normal text-gris1 font-normal text-center"
        onSubmit={handleSubmit}
      >
        <ul>
          <li>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              required
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor="password">Contraseña</label>
            <input
              required
              id="password"
              name="password"
              value={formState.password}
              onChange={handleChange}
            />
          </li>
        </ul>
        <button>Enviar</button>
      </form>
    </main>
  );
}
