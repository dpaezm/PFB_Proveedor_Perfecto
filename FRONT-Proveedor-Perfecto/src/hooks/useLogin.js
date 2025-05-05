import { useState } from "react";
import { useAuth } from "../context/authContext";
import { loginService } from "../services/userServices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

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

  let navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      const { data } = await loginService(formState);
      console.log(data.token);

      login(data.token);
      setFormState(initialState);
      toast.success("¡Bienvenido de nuevo!");
      navigate("/user-data");
    } catch (e) {
      console.error(e);
      toast.error(e.message);
    }
  }
  return { error, formState, handleSubmit, handleChange };
}
