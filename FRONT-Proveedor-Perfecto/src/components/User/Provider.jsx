export default function Provider({ username, name, email, phone, avatar, city, created_at, categories, avg_rating }) {
  return (
    <article>
      <p className="author">{avatar && <img src={avatar} alt={username} width="32px" />}</p>
      <p>
        {name}@{username}
      </p>
      <p>En la plataforma desde {created_at}</p>
      <p>{city}</p>
      <p>{avg_rating}</p>
      <p>{categories}</p>
    </article>
  );
}
