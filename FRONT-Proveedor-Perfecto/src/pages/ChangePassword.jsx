import PasswordInput from "../components/PasswordInput";

import useChangePassword from "../hooks/useChangePassword";
import useUserProfile from "../hooks/UseUserProfile";

export default function ChangePassword() {
  const user = useUserProfile();
  const userId = user.id;

  const { error, formState, handleSubmit, handleChange } = useChangePassword();
  return (
    <div className=" flex flex-col flex-grow justify-center items-center">
      <h2 className="text-logo md:text-[32px] text-negro ">
        Cambia tu contraseña
      </h2>

      <div className="w-screen h-80 flex flex-col items-center">
        {error && <p className="error">{error}</p>}
        <form
          className=" border-gris1  text-normal text-negro font-bold text-center w-full max-w-xs gap-6 "
          onSubmit={handleSubmit}
        >
          <ul className=" ">
            <li>
              <label htmlFor="id"></label>
              <input
                className="formulario bg-blanco"
                type="text"
                id="id"
                required
                value={formState.id}
                placeholder={`Teclea: ${userId}`}
                onChange={handleChange}
                name="id"
              />
            </li>
            <li>
              <label className="block" htmlFor="email"></label>
              <input
                className="formulario bg-blanco"
                type="email"
                id="email"
                name="email"
                required
                placeholder="tu email"
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
                placeholder="Tu contraseña"
                value={formState.password}
                onChange={handleChange}
              />
            </li>
            <li className=" flex p-2">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="newPassword"
              >
                {" "}
              </label>
              <PasswordInput
                className="formulario bg-blanco"
                type="password"
                required
                id="newPassword"
                name="newPassword"
                placeholder="Nueva contraseña"
                value={formState.newPassword}
                onChange={handleChange}
              />
            </li>
            <li className=" flex p-2">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="newPasswordRepeat"
              >
                {" "}
              </label>
              <PasswordInput
                className="formulario bg-blanco"
                type="password"
                required
                id="newPasswordRepeat"
                name="newPasswordRepeat"
                placeholder="Repite tu nueva contraseña"
                value={formState.newPasswordRepeat}
                onChange={handleChange}
              />
            </li>
          </ul>

          <button className="boton bg-amarillo cursor-pointer justify-self-center  ">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
