import Input from "../components/Input";
import useLogin from "../hooks/useLogin";

export default function Login() {
  const { error, formState, handleSubmit, handleChange } = useLogin();
  return (
<<<<<<< HEAD
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
=======
    <div className="bg-gris3 flex flex-col flex-grow justify-center items-center">
      <h2 className="text-logo md:text-[32px] text-negro ">find;)</h2>
      <h3 className="bg-gris3 flex flex-col flex-grow justify-center items-center">
        Bienvenido de nuevo
      </h3>
      {error && <p className="error">{error}</p>}
      <form
        className=" border-gris1  text-normal text-negro font-bold text-center bg-gris3 w-full max-w-xs gap-6 "
        onSubmit={handleSubmit}
      >
        <ul className=" ">
          <li className="p-2  ">
            {/* <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email:{" "}
            </label> */}
            <Input
              placeholder="Email:"
>>>>>>> 78b4a27 (edicion query privateUserInfo)
              type="email"
              required
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </li>
<<<<<<< HEAD
          <li className="p-2">
            <label className="block text-sm font-bold mb-2" htmlFor="password">
              {" "}
            </label>
            <Input
              className="formulario bg-blanco"
=======
          <li className="p-2 ">
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="password"
            ></label>
            <Input
              placeholder="contraseña"
>>>>>>> 78b4a27 (edicion query privateUserInfo)
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
<<<<<<< HEAD
        <button className="boton bg-amarillo cursor-pointer ">
          Inicia sesión
=======
        <button className="border-solid border-1 bg-amarillo hover:bg-white hover:text-black text-negro font-bold py-3 px-6 rounded-lg text-lg transition-colors ">
          Iniciar sesión
>>>>>>> 78b4a27 (edicion query privateUserInfo)
        </button>
      </form>
    </div>
  );
}
