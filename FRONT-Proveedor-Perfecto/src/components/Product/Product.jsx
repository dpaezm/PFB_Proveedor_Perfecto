export default function ProductDetail() {
  const {
    product_name,
    price,
    photo1,
    photo2,
    description,
    categoryname,
    provider,
    avatar,
    avg_rating,
    total_ratings,
  } = product;

  return (
    <article>
      <p className="product">{photo1 && <img src={photo1} alt={product_name} width="32px" />}</p>
      <h2 className="provider">
        {avatar && <img src={avatar} alt={provider} width="12px" />}
        Add by {provider}
      </h2>
      <p>{description} </p>
      <p>
        {avg_rating}({total_ratings}){" "}
      </p>
      <p>Desde {price}€</p>
    </article>
  );
}
