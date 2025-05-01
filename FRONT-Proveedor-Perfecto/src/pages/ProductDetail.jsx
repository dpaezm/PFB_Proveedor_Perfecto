import "./ProductDetail.css";
import useProductDetail from "../hooks/useProductDetail";
import Product from "./../components/Product/Product";
import { NavLink, useLocation } from "react-router-dom";

export default function ProductDetail() {
  const { product, error } = useProductDetail();
  const location = useLocation();
  const backLink = location.state?.from?.pathname + location.state?.from?.search || "/products";

  if (error) return <p>{error}</p>;
  if (!product) return <p>Cargando producto...</p>;

  return (
    <section className="product-datail-page">
      <Product product={product} />
      <NavLink to={"/providers"} className="boton boton-contactar">
        {" "}
        {/* Pendiente de actualizar ruta */}
        Contactar
      </NavLink>
      <NavLink to={backLink} className="boton boton-atras">
        Atrás
      </NavLink>
    </section>
  );
}
