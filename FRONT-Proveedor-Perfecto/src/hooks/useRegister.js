import { useState } from "react";

import { registerService } from "../services/userServices";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function useRegister() {
  let initialState = {
    username: "",
    email: "",
    password: "",
    passwordRepeat: "",
    city: "",
    avatar: null,
    name: "",
    description: "",
    phone: "",
  };

  const [formState, setFormState] = useState(initialState);
  const [error, setError] = useState("");

  function handleChange({ target: { name, value } }) {
    setError("");
    setFormState({ ...formState, [name]: value });
  }

  function handleImageChange({ target: { name, files } }) {
    let img = files[0];
    setFormState({ ...formState, [name]: img });
  }
  let navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.target);

    try {
      if (formState.password !== formState.passwordRepeat) {
        throw new Error("Las contraseñas no coinciden");
      }
      await registerService(formData);

      console.log("usuario registrado correctamente");
      toast.success("Revisa tu correo para activar tu cuenta");
      setFormState(initialState);
    } catch (e) {
      setError(e.message);
      toast.error(e.message);
    }

    navigate("/login");
  }
  return { error, handleChange, handleImageChange, formState, handleSubmit };
}
