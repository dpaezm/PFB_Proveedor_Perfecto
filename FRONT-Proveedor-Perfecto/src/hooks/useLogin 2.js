import { useState } from "react";
import { useAuth } from "../context/authContext";
import { loginService } from "../services/userServices";

export default function useLogin() {
  const { login } = useAuth();

  let initialState = {
    email: "",
    password: "",
  };

  const [formState, setFormState] = useState(initialState);
  const [error, setError] = useState("");

  function handleChange({ target: { name, value } }) {
    setError("");
    setFormState({ ...formState, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      const { data } = await loginService(formState);
      console.log(data.token);
      login(data.token);
      setFormState(initialState);
    } catch (e) {
      setError(e.message);
    }
  }
  return { error, formState, handleSubmit, handleChange };
}
