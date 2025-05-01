import "./Product.css";

import { useLocation } from "react-router-dom";
const { VITE_API_URL } = import.meta.env;
import starIcon from "./../../assets/icons/star.png";

export default function ProductDetail({ product }) {
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
        <h3 className="provider-name-section">
          <span className="avatar-photo">
            {avatar && <img src={`${VITE_API_URL}${avatar}`} alt={provider} width="12px" />}
          </span>
          <span className="add-by">By </span>
          <span className="provider-name"> {provider}</span>
        </h3>
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
