import "./Product.css";

const { VITE_API_URL } = import.meta.env;
import starIcon from "./../../assets/icons/star.png";

export default function ProductDetailLite({ product }) {
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
    <>
      <article className="product-card">
        <p className="product-photo">
          {photo1 && <img src={`${VITE_API_URL}${photo1}`} alt={product_name} width="32px" />}
        </p>
        <p className="product-description">{description} </p>
        <p id="rating-star">
          <button
            id="star-icon"
            style={{
              backgroundImage: `url(${starIcon})`,
            }}
          />
          {avg_rating}({total_ratings}){" "}
        </p>
        <p className="txt-destacado">Desde {price} €</p>
      </article>
    </>
  );
}
