import Input from "../components/Input";
import useRegister from "../hooks/useRegister";

export default function Register() {
  const { error, handleChange, handleImageChange, formState, handleSubmit } =
    useRegister();
  return (
    <main className="p-5">
      <h2 className=" p-2 text-cta md:text-[36px] text-amarillo font-bold text-center">
        Registro
      </h2>
      {error && <p className="error">{error}</p>}
      <form
        className=" p-5 border-solid border-2 rounded-md  text-normal text-negro font-bold text-center bg-amarillo max-w-lg mx-auto"
        onSubmit={handleSubmit}
      >
        <ul className="  ">
          <li className="p-2">
            <label className="block" htmlFor="username">
              Nombre de Usuario:{" "}
            </label>
            <Input
              type="text"
              id="username"
              required
              name="username"
              value={formState.username}
              onChange={handleChange}
            />
          </li>

          <li className="p-2">
            <label className="block" htmlFor="name">
              Nombre completo:{" "}
            </label>
            <Input
              type="name"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
            />
          </li>
          <li className="p-2">
            <label className="block" htmlFor="city">
              Ciudad:{" "}
            </label>
            <Input
              type="text"
              id="city"
              name="city"
              value={formState.city}
              onChange={handleChange}
            />
          </li>
          <li className="p-2">
            <label className="block" htmlFor="email">
              Email:{" "}
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
            />
          </li>
          <li className="p-2">
            <label className="block" htmlFor="password">
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
          <li className="p-2">
            <label className="block" htmlFor="passwordRepeat">
              Repite contraseña:{" "}
            </label>
            <Input
              type="password"
              required
              id="passwordRepeat"
              name="passwordRepeat"
              value={formState.passwordRepeat}
              onChange={handleChange}
            />
          </li>

          <li className="p-2">
            <label className="block" htmlFor="phone">
              Teléfono:{" "}
            </label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
            />
          </li>
          <li className="p-2">
            <label className="block" htmlFor="avatar">
              Avatar:{" "}
            </label>
            <Input
              type="file"
              id="avatar"
              name="avatar"
              onChange={handleImageChange}
            />
          </li>
          <li className="p-2">
            <label className="block" htmlFor="description">
              Sobre mi:{" "}
            </label>
            <Input
              type="textarea"
              id="description"
              name="description"
              value={formState.description}
              onChange={handleChange}
            />
          </li>
        </ul>
        <button className="bg-black hover:bg-white hover:text-black text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors">
          Enviar
        </button>
      </form>
    </main>
  );
}
