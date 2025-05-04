import "./ProductDetail.css";
import useProductDetail from "../hooks/useProductDetail";
import Product from "./../components/Product/Product";
import { NavLink, useLocation } from "react-router-dom";
import ContactForm from "../components/Contact/ContactForm";

export default function ProductDetail() {
  const { product, error } = useProductDetail();
  const location = useLocation();
  const backLink = location.state?.from || "/products";

  if (error) return <p>{error}</p>;
  if (!product) return <p>Cargando producto...</p>;

  return (
    <section className="product-datail-page">
      <Product product={product} />
      <ContactForm />
      <NavLink to={backLink} className="boton boton-atras">
        Atrás
      </NavLink>
    </section>
  );
}
