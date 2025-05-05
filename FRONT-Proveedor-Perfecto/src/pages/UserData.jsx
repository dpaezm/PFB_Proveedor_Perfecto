import "./userData.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import useUserProfile from "../hooks/UseUserProfile";
const { VITE_API_URL, VITE_API_MEDIA_PATH } = import.meta.env;

export default function UserData() {
  const { token, logOut } = useAuth();
  const navigate = useNavigate();

  const user = useUserProfile();
  //console.log(VITE_API_URL, VITE_API_MEDIA_PATH, user.avatar);
  const isProvider = user.isprovider;

  if (token)
    return (
      <div className="container-user-data">
        <section className="container-user-data">
          <h2 className="text-logo md:text-[32px] text-negro"> Mi perfil</h2>
          <h3>{user.username}</h3>
          <p>{user.name}</p>
          <img
            src={`${VITE_API_URL}${VITE_API_MEDIA_PATH}${user.avatar}`}
            alt={user.username}
          />
          <p>Ciudad: {user.city}</p>
          <p>Contacto: {user.email}</p>
          <p>Teléfono: {user.phone}</p>
          <p>Desde: {user.created_at}</p>
          <p>Sobre mi: {user.description}</p>
        </section>
        <section className="section-buttons-user-data gap-2">
          <button
            onClick={() => navigate(`/contactrequest/${user.id}`)}
            className="boton boton2 boton-amarillo2"
          >
            Ver solicitudes de contacto
          </button>
          <button
            onClick={() => navigate("/changePassword")}
            className="boton boton2"
          >
            Cambiar contraseña
          </button>
          <button
            onClick={() => logOut()}
            className="boton boton2 boton-amarillo2"
          >
            Cerrar sesión
          </button>
          {isProvider ? (
            <button
              className="boton boton2"
              onClick={() => navigate("/create-product")}
            >
              Crear Producto
            </button>
          ) : null}
        </section>
      </div>
    );
  else {
    navigate("/");
  }
}
