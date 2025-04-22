import { useState } from "react";

import { registerService } from "../services/userServices";

export default function useRegister() {
  let initialState = {
    username: "",
    email: "",
    password: "",
    passwordRepeat: "",
    city: "",
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
      if (formState.password !== formState.passwordRepeat) {
        throw new Error("Las contraseñas no coinciden");
      }
      await registerService(formState);

      console.log("usuario registrado correctamente");
      setFormState(initialState);
    } catch (e) {
      setError(e.message);
    }
  }
  return { error, handleChange, formState, handleSubmit };
}
