import useProductDetail from "../hooks/useProductDetail";
import Product from "./../components/Product/Product";
import { NavLink } from "react-router-dom";

export default function ProductDetail() {
  const { product, error } = useProductDetail();

  if (error) return <p>{error}</p>;
  if (!product) return <p>Cargando producto...</p>;

  return (
    <section className="product-datail-page">
      <Product product={product} />
      <NavLink to={"/providers"} className="boton boton-contactar">
        Contactar
      </NavLink>
      <NavLink to={`/providers/${product.provider_id}`} className="boton boton-atras">
        Atrás
      </NavLink>
    </section>
  );
}
