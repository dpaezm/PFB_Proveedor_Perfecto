import { useState } from "react";
import { toast } from "react-toastify";

const useCreateProduct = () => {
  const [formState, setFormState] = useState({
    product_name: "",
    price: "",
    description: "",
    category_id: "",
    photo1: null,
  });

  const [error, setError] = useState("");

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormState((prev) => ({ ...prev, [name]: files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (let key in formState) {
      formData.append(key, formState[key]);
    }

    try {
      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      });

      const body = await res.json();

      if (!res.ok) throw new Error(body.message);

      toast.success("¡Producto creado!");
      setFormState({
        product_name: "",
        price: "",
        description: "",
        category_id: "",
        photo1: null,
      });
    } catch (err) {
      setError(err.message);
      toast.error("Error al crear producto");
    }
  };

  return {
    formState,
    error,
    handleSubmit,
    handleTextChange,
    handleFileChange,
  };
};

export default useCreateProduct;
