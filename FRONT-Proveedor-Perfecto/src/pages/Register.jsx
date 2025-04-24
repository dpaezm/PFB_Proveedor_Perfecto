import useRegister from "../hooks/useRegister";

export default function Register() {
  const { error, handleChange, formState, handleSubmit } = useRegister();
  return (
    <main>
      <h2 className="text-cta md:text-[36px] text-amarillo font-bold text-center">
        Registro
      </h2>
      {error && <p className="error">{error}</p>}
      <form
        className="text-normal text-gris1 font-normal text-center"
        onSubmit={handleSubmit}
      >
        <ul>
          <li>
            <label htmlFor="username">Nombre de Usuario: </label>
            <input
              type="text"
              id="username"
              required
              name="username"
              value={formState.username}
              onChange={handleChange}
            />
          </li>

          <li>
            <label htmlFor="name">Nombre completo: </label>
            <input
              type="name"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor="city">Ciudad: </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formState.city}
              onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor="password">Contraseña: </label>
            <input
              type="password"
              required
              id="password"
              name="password"
              value={formState.password}
              onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor="passwordRepeat">Repite contraseña: </label>
            <input
              type="password"
              required
              id="passwordRepeat"
              name="passwordRepeat"
              value={formState.passwordRepeat}
              onChange={handleChange}
            />
          </li>

          <li>
            <label htmlFor="phone">Teléfono: </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor="avatar">Avatar: </label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              value={formState.avatar}
              onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor="description">Sobre mi: </label>
            <input
              type="textarea"
              id="description"
              name="description"
              value={formState.description}
              onChange={handleChange}
            />
          </li>
        </ul>
        <button>Enviar</button>
      </form>
    </main>
  );
}
