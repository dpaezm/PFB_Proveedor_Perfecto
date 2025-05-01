import "./../components/Category/Category.css";
import "./../components/Product/Product.css";
import starIcon from "./../assets/icons/star.png";
import locationIcon from "./../assets/icons/location.png";
/* import "./Provider.css"; */

import useProviderDetail from "../hooks/useProviderDetail.js";
import { NavLink } from "react-router-dom";
import ProductDetail from "../components/Product/Product.jsx";
import Review from "../components/Contact/Review.jsx";
const { VITE_API_URL } = import.meta.env;

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
    <section className="provider-detail">
      <p className="avatar-photo">{avatar && <img src={`${VITE_API_URL}${avatar}`} alt={name} width="12px" />}</p>
      <h2 className="provider-name-section">
        <span className="provider-name"> {name}</span>
        <span className="txt-secundary">@{username}</span>
      </h2>
      <p className="fecha-alta">En la plataforma desde el {fechaFormateada}</p>
      <p>Email: {email}</p>
      <p>Teléfono: {phone}</p>
      <p className="provider-rating">
        <button
          className="star-icon"
          style={{
            backgroundImage: `url(${starIcon})`,
          }}
        />
        {avg_rating ? avg_rating : "Sin valoraciones"}
        <span className="txt-secundary"> ({total_ratings})</span>
      </p>
      <p className="provider-city">
        <button
          className="location-icon"
          style={{
            backgroundImage: `url(${locationIcon})`,
          }}
        />
        {city}
      </p>
      <p className="txt-destacado">{categories}</p>

      <section className="provider-products">
        {products.length > 0 ? (
          <ul className="section-product-list">
            {products.map((product) => (
              <li key={product.id} className="li-products-provider">
                <ProductDetail product={product} />
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
