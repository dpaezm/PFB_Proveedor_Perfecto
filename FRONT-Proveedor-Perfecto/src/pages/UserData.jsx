import { useAuth } from "../context/authContext";
import useUserProfile from "../hooks/UseUserProfile";
const { VITE_API_URL, VITE_API_MEDIA_PATH } = import.meta.env;

export default function UserData() {
  const { logOut } = useAuth();

  const user = useUserProfile();
  console.log(VITE_API_URL, VITE_API_MEDIA_PATH, user.avatar);
  return (
    <main>
      <h2 className="text-titulo md:text-2xl text-gris1 text-center">
        {" "}
        Mi perfil
      </h2>
      <h3>{user.username}</h3>
      <h4>{user.name}</h4>
      <img src={VITE_API_URL + VITE_API_MEDIA_PATH + user.avatar} alt="" />
      <h4>Ciudad: {user.city}</h4>
      <h4>
        Contacto: {user.email} Teléfono: {user.phone}
      </h4>
      {user.email && <p>Email: {user.email}</p>}
      <h4>Desde: {user.created_at}</h4>
      <h4>Sobre mi: {user.description}</h4>
      <img src="" alt="" />
      <button
        onClick={() => {
          logOut();
        }}
      >
        Cerrar sesión
      </button>
    </main>
  );
}
