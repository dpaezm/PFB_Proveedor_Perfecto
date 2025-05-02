import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import useUserProfile from "../hooks/UseUserProfile";
const { VITE_API_URL, VITE_API_MEDIA_PATH } = import.meta.env;

export default function UserData() {
  const { token, logOut } = useAuth();
  const navigate = useNavigate();

  const user = useUserProfile();
  //console.log(VITE_API_URL, VITE_API_MEDIA_PATH, user.avatar);
  if (token)
    return (
      <main className="flex flex-col flex-grow justify-center  items-center">
        <h2 className="text-logo md:text-[32px] text-negro"> Mi perfil</h2>
        <h3>{user.username}</h3>
        <h4>{user.name}</h4>
        <img
          src={`${VITE_API_URL}${VITE_API_MEDIA_PATH}${user.avatar}`}
          alt={user.username}
        />
        <h4>Ciudad: {user.city}</h4>
        <h4>
          Contacto: {user.email} Teléfono: {user.phone}
        </h4>
        <h4>Desde: {user.created_at}</h4>
        <h4>Sobre mi: {user.description}</h4>
        <button
          onClick={() => logOut()}
          className="boton bg-amarillo cursor-pointer "
        >
          Cerrar sesión
        </button>
      </main>
    );
  else {
    navigate("/");
  }
}
