import starIcon from "./../../assets/icons/star.png";
import locationIcon from "./../../assets/icons/location.png";
const { VITE_API_URL } = import.meta.env;

export default function Provider({ provider }) {
  const { username, name, avatar, city, categories, avg_rating, created_at } = provider;

  return (
    <article className="provider-card">
      <h3 className="provider-name-section">
        <span className="avatar-photo">
          {avatar && <img src={`${VITE_API_URL}${avatar}`} alt={name} width="12px" />}
        </span>
        <span className="provider-name"> {name}</span>
        <span className="txt-username">@{username}</span>
      </h3>
      <p className="fecha-alta">En la plataforma desde {created_at}</p>
      <p className="provider-rating">
        {" "}
        <button
          id="star-icon"
          style={{
            backgroundImage: `url(${starIcon})`,
          }}
        />{" "}
        {avg_rating ? avg_rating : "Sin valoraciones"}
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
      <p className="provider-categories">{categories}</p>
    </article>
  );
}
