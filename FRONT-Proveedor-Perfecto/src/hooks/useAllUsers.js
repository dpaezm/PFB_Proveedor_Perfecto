import { useEffect, useState } from "react";

const { VITE_API_URL } = import.meta.env;

export default function useAllUsers() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setError(null);
        setLoading(true);

        const res = await fetch(VITE_API_URL + "/users");

        if (!res.ok) throw new Error("No se pudieron cargar los usuarios");

        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setUsers([]);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  return { users, setUsers, error, loading };
}
