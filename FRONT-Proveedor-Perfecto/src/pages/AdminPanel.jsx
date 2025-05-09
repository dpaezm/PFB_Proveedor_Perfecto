import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAllUsers from "../hooks/useAllUsers.js";
import ProviderFull from "../components/User/ProviderFull.jsx";
import UserFull from "../components/User/UserFull.jsx";
import "./AdminPanel.css";
// import { useAuth } from "../context/authContext";

const { VITE_API_URL } = import.meta.env;

export default function AdminPanel() {
  //   const { user } = useAuth();
  const { users, loading, error, setUsers } = useAllUsers();

  //   if (!user?.isadmin) {
  //     return <Navigate to="/" />;
  //   }

  const deleteUser = (id) => {
    if (!confirm("¿Estás seguro de que quieres eliminar este usuario?")) return;

    fetch(VITE_API_URL + `/users/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setUsers((prev) => prev.filter((user) => user.id !== id));
        toast.success("Usuario eliminado correctamente");
      })
      .catch(() => toast.error("Error al eliminar usuario"));
  };

  const validateUser = (id) => {
    fetch(VITE_API_URL + `/users/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ active: 1 }),
    })
      .then(() => {
        setUsers((prev) =>
          prev.map((user) => (user.id === id ? { ...user, active: 1 } : user))
        );
        toast.success("Usuario validado correctamente");
      })
      .catch(() => toast.error("Error al validar usuario"));
  };

  const toggleProviderRole = (id, isCurrentlyProvider) => {
    const newIsProvider = isCurrentlyProvider === 1 ? 0 : 1;

    fetch(VITE_API_URL + `/users/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isprovider: newIsProvider }),
    })
      .then((res) => {
        if (!res.ok) throw new Error();
        setUsers((prev) =>
          prev.map((user) =>
            user.id === id ? { ...user, isprovider: newIsProvider } : user
          )
        );
        toast.success("Rol de proveedor actualizado");
      })
      .catch(() => toast.error("Error al cambiar el rol del usuario"));
  };

  //FUNCIÓN PARA HACER ADMIN A UN USUARIO BLOQUEADA POR DEFECTO

  //   const promoteToAdmin = (id) => {
  //     fetch(VITE_API_URL + `/users/${id}`, {
  //       method: "PATCH",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ isadmin: 1 }),
  //     })
  //       .then((res) => {
  //         if (!res.ok) throw new Error();
  //         setUsers((prev) =>
  //           prev.map((user) => (user.id === id ? { ...user, isadmin: 1 } : user))
  //         );
  //         toast.success("Usuario promovido a admin");
  //       })
  //       .catch(() => toast.error("Error al promover a admin"));
  //   };

  if (loading) return <p>Cargando usuarios...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="admin-panel">
      <h1>Panel de Administración de Usuarios</h1>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            <div>
              <p className="font-semibold">{user.username}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
              <p className="text-sm">
                Estado: {user.active === 1 ? "Validado" : "No validado"}
              </p>
              <p className="text-sm text-gray-500">
                Rol: {user.isprovider === 1 ? "Proveedor" : "Usuario normal"}
              </p>

              {user.isprovider === 1 ? (
                <ProviderFull provider={user} />
              ) : (
                <UserFull user={user} />
              )}
            </div>

            <div className="user-actions">
              {/* {user.isadmin !== 1 && (
                <button
                  onClick={() => promoteToAdmin(user.id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Hacer admin
                </button>
              )} */}

              <button
                onClick={() => toggleProviderRole(user.id, user.isprovider)}
                className="provider"
              >
                {user.isprovider === 1
                  ? "Quitar rol de proveedor"
                  : "Convertir en proveedor"}
              </button>

              {user.active === 0 && (
                <button
                  onClick={() => validateUser(user.id)}
                  className="validate"
                >
                  Validar
                </button>
              )}

              <button onClick={() => deleteUser(user.id)} className="delete">
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
