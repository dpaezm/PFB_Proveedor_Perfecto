import Input from "../components/Input";
import PasswordInput from "../components/PasswordInput";
import useRegister from "../hooks/useRegister";

export default function Register() {
  const { handleChange, handleImageChange, formState, handleSubmit, setFormState } = useRegister();

  return (
    <div className="w-screen  flex flex-grow flex-col items-center justify-start">
      <h1 className="titulo-cat2 text-cta md:text-[36px] text-negro font-bold">Registro</h1>
      <form
        className=" w-full max-h-screen flex-grow-1 md:w-20% mx-auto flex flex-col justify-self-center gap-6 md:gap-8 items-center max-w-[900px] "
        onSubmit={handleSubmit}
      >
        <ul className="  ">
          <li className="p-2">
            <label className="block" htmlFor="username">
              {" "}
            </label>
            <Input
              className="formulario bg-blanco"
              type="text"
              id="username"
              required
              name="username"
              placeholder="Nombre de usuario"
              value={formState.username}
              onChange={handleChange}
            />
          </li>
          <li className="p-2">
            <label className="block" htmlFor="name">
              {" "}
            </label>
            <Input
              className="formulario bg-blanco w-full"
              type="name"
              id="name"
              name="name"
              placeholder="Nombre completo"
              value={formState.name}
              onChange={handleChange}
            />
          </li>
          <li className="p-2">
            <label className="block" htmlFor="city">
              {" "}
            </label>
            <Input
              className="formulario bg-blanco"
              type="text"
              id="city"
              name="city"
              placeholder="Ciudad"
              value={formState.city}
              onChange={handleChange}
            />
          </li>
          <li className="p-2">
            <label className="block" htmlFor="email">
              {" "}
            </label>
            <Input
              className="formulario bg-blanco"
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email"
              value={formState.email}
              onChange={handleChange}
            />
          </li>
          <li className=" flex p-2">
            <label className="block" htmlFor="password">
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
          <li className="flex p-2">
            <label className="block" htmlFor="passwordRepeat">
              {" "}
            </label>
            <PasswordInput
              className="formulario bg-blanco"
              type="password"
              required
              id="passwordRepeat"
              name="passwordRepeat"
              placeholder="Repite contraseña"
              value={formState.passwordRepeat}
              onChange={handleChange}
            />
          </li>
          <li className="p-2">
            <label className="block" htmlFor="phone">
              {" "}
            </label>
            <Input
              className="formulario bg-blanco"
              type="tel"
              id="phone"
              name="phone"
              placeholder="Teléfono"
              value={formState.phone}
              onChange={handleChange}
            />
          </li>
          <li className="p-2">
            <label className="block text-center" htmlFor="description">
              {" "}
            </label>
            <Input
              className="formulario bg-blanco"
              type="textarea"
              id="description"
              name="description"
              placeholder="Descríbete brevemente"
              value={formState.description}
              onChange={handleChange}
            />
          </li>{" "}
          <li className="p-2">
            <label className="block text-center" htmlFor="avatar">
              Sube tu avatar:{" "}
            </label>
            <Input
              className="formulario bg-blanco"
              type="file"
              id="avatar"
              name="avatar"
              onChange={handleImageChange}
            />
          </li>
          <li className="p-2">
            <label htmlFor="isprovider" className="flex items-center gap-2">
              <input
                type="checkbox"
                id="isprovider"
                name="isprovider"
                checked={formState.isprovider}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    isprovider: e.target.checked ? 1 : 0,
                  })
                }
              />
              Quiero registrarme como proveedor
            </label>
          </li>
        </ul>
        <button className="boton boton2 bg-amarillo cursor-pointer ">Registrar</button>
      </form>
    </div>
  );
}
