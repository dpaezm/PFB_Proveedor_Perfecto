import { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";

const { VITE_API_URL } = import.meta.env;

export default function useUserProfile() {
  const [user, setUser] = useState({});
  const { token, logOut } = useAuth();

  async function loadUser() {
    const res = await fetch(`${VITE_API_URL}/users/me`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (res.status === 401) {
      logOut();
      //setToken("")
    }
    let { data } = await res.json();
    console.log(data);
    setUser(data.user);
  }

  useEffect(() => {
    loadUser();
  }, []);

  return user;
}
