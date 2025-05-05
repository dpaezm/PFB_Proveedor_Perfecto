import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { changePasswordService } from "../services/userServices";
import { useAuth } from "../context/authContext";

export default function useChangePassword() {
  const { logOut } = useAuth();

  let initialState = {
    id: "",
    email: "",
    password: "",
    newPassword: "",
    newPasswordRepeat: "",
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
      if (formState.newPassword !== formState.newPasswordRepeat) {
        throw new Error("Las contraseñas no coinciden");
      }
      await changePasswordService(formState);
      console.log(formState);

      setFormState(initialState);
      toast.success("¡Contraseña actualizada correctamente!");
      navigate("/login");
      logOut();
    } catch (e) {
      setError(e.message);
      toast.error(e.message);
    }
  }
  return { error, formState, handleSubmit, handleChange, setFormState };
}
