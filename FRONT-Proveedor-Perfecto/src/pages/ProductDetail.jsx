import "./ProductDetail.css";
import useProductDetail from "../hooks/useProductDetail";
import Product from "./../components/Product/Product";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import ContactForm from "../components/Contact/ContactForm";
import { useState } from "react";
import { useAuth } from "../context/authContext";

export default function ProductDetail() {
  const { product, error } = useProductDetail();
  const location = useLocation();
  const navigate = useNavigate();
  const { token } = useAuth();
  const backLink = location.state?.from || "/products";
  const [showForm, setShowForm] = useState(false);

  const handleContactClick = () => {
    if (!token) {
      navigate("/login");
    } else {
      setShowForm((prev) => !prev);
    }
  };

  if (error) return <p>{error}</p>;
  if (!product) return <p>Cargando producto...</p>;

  return (
    <>
      <section className="product-datail-page">
        <Product product={product} />
        <NavLink to={backLink} className="boton boton-atras">
          Atrás
        </NavLink>
        <button onClick={handleContactClick} className={showForm ? "boton " : "boton boton-contactar"}>
          {showForm ? "Cerrar formulario" : "Contactar"}
        </button>
      </section>
      {showForm && <ContactForm />}
    </>
  );
}
