import starIcon from "./../../assets/icons/star.png";
import locationIcon from "./../../assets/icons/location.png";
import "./Provider.css";
const { VITE_API_URL } = import.meta.env;

export default function ProviderFull({ provider }) {
  // console.log(provider);
  const {
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
  } = provider;

  const fecha = new Date(created_at);

  const fechaFormateada = fecha.toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <article className="provider-full-card">
      <p className="avatar-photo">
        {avatar && (
          <img src={`${VITE_API_URL}/${avatar}`} alt={name} width="12px" />
        )}
      </p>
      <h2 className="provider-name-section">
        <span className="provider-name"> {name}</span>
        <span className="txt-secundary">@{username}</span>
      </h2>
      <p className="fecha-alta">En la plataforma desde el {fechaFormateada}</p>
      <p>Email: {email}</p>
      <p>Teléfono: {phone}</p>
      <p className="provider-rating">
        {" "}
        <button
          id="star-icon"
          style={{
            backgroundImage: `url(${starIcon})`,
          }}
        />
        {avg_rating ? avg_rating : "Sin valoraciones"}
        <span className="txt-secundary"> ({total_ratings})</span>
      </p>
      <p className="provider-city">
        <button
          id="star-icon"
          style={{
            backgroundImage: `url(${locationIcon})`,
          }}
        />
        {city}
      </p>
      <p className="txt-destacado">{categories}</p>
    </article>
  );
}
