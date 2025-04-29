import { useAuth } from "../context/authContext";
import useUserProfile from "../hooks/UseUserProfile";

export default function UserData() {
  const { logOut } = useAuth();

  const user = useUserProfile();
  return (
    <main>
      <h2 className="text-titulo md:text-2xl text-gris1 text-center">
        {" "}
        Mi perfil
      </h2>
      <h3>{user.username}</h3>
      <h4>{user.description}</h4>
      <img src="user.avatar" alt="" />
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
