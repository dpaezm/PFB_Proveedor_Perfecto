import "./../components/Category/Category.css";
import "./../components/Product/Product.css";

import "./../components/User/Provider.css";

import useProviderDetail from "../hooks/useProviderDetail.js";
import { NavLink } from "react-router-dom";
import Review from "../components/Contact/Review.jsx";
import ProviderFull from "../components/User/ProviderFull.jsx";
import ProductDetailLite from "../components/Product/ProductLite.jsx";

export default function ProviderDetail() {
  const { provider } = useProviderDetail();

  if (!provider) return <p>No se ha encontrado el proveedor. </p>;

  const {
    id,
    username,
    name,
    avatar,
    city,
    email,
    phone,
    categories,
    avg_rating,
    created_at,
    total_ratings,
    comments,
    products,
  } = provider;

  const fecha = new Date(created_at);

  const fechaFormateada = fecha.toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <section className="provider-full-detail">
      <ProviderFull provider={provider} />

      <section className="provider-products">
        {products.length > 0 ? (
          <ul className="section-product-list">
            {products.map((product) => (
              <li key={product.id} className="li-products-provider">
                <NavLink to={`/product/${product.id}`} state={{ from: location.pathname }}>
                  <ProductDetailLite product={product} />
                </NavLink>
              </li>
            ))}
          </ul>
        ) : (
          <p>Este proveedor aún no ha subido productos.</p>
        )}
      </section>

      <section className="provider-comments">
        {/*         <h3>Valoraciones</h3> */}
        <Review providerId={id} />

        <NavLink to={`/providers`} className="boton boton-atras">
          Atrás
        </NavLink>
      </section>
    </section>
  );
}
