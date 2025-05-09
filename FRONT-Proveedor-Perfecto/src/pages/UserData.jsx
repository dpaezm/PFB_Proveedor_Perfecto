import "./userData.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import useUserProfile from "../hooks/UseUserProfile";
import ProviderFull from "../components/User/ProviderFull";
const { VITE_API_URL, VITE_API_MEDIA_PATH } = import.meta.env;

export default function UserData() {
  const { token, logOut } = useAuth();
  const navigate = useNavigate();

  const user = useUserProfile();
  //console.log(VITE_API_URL, VITE_API_MEDIA_PATH, user.avatar);
  const isProvider = user.isprovider;
  const isAdmin = user.isadmin;

  if (token)
    return (
      <div className="container-user-data">
        <p className="txt-destacado"> Mi perfil</p>
        <ProviderFull provider={user} />
        {/* <section className="container-user-data">
          <h3>{user.username}</h3>
          <p>{user.name}</p>

          <img src={`${VITE_API_URL}/${user.avatar}`} alt={user.username} />

          <p>Ciudad: {user.city}</p>
          <p>Contacto: {user.email}</p>
          <p>Teléfono: {user.phone}</p>
          <p>Desde: {user.created_at}</p>
          <p>Sobre mi: {user.description}</p>
        </section> */}

        <section className="section-buttons-user-data gap-2">
          {isAdmin ? (
            <button
              onClick={() => navigate(`/admin-panel`)}
              className="boton boton2 boton-amarillo2 bg-amber-600"
            >
              Panel de administración
            </button>
          ) : null}
          {isProvider ? (
            <button
              onClick={() => navigate(`/contactrequest/${user.id}`)}
              className="boton boton2 boton-amarillo2"
            >
              Ver solicitudes de contacto
            </button>
          ) : null}
          {!isProvider ? (
            <button
              onClick={() => navigate(`/contactrequest/user/${user.id}`)}
              className="boton boton2 boton-amarillo2"
            >
              Respuestas de los proveedores
            </button>
          ) : null}
          <button
            onClick={() => navigate(`/changePassword/${user.id}`)}
            className="boton boton2"
          >
            Cambiar contraseña
          </button>
          {isProvider ? (
            <button
              className="boton boton2 boton-amarillo2"
              onClick={() => navigate("/create-product")}
            >
              Crear Producto
            </button>
          ) : null}
          <button onClick={() => logOut()} className="boton boton2">
            Cerrar sesión
          </button>
        </section>
      </div>
    );
  else {
    navigate("/");
  }
}
