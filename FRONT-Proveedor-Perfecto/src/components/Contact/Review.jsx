import useReviews from "../../hooks/useReviews";
import starIcon from "./../../assets/icons/star.png";
import "./../Product/Product.css";

export default function Review() {
  const { reviews, error } = useReviews();

  /*  const { comment, answer, rating, created_at, product_name, comprador } = reviews; */

  if (error) return null;

  return reviews.length > 0 ? (
    <ul>
      {reviews.map((review, index) => (
        <li key={index}>
          <p className="txt-destacado">
            {review.comprador} sobre {review.product_name}
          </p>
          <p>{review.comment}</p>
          <p className="comment-rating">
            <button
              className="star-icon"
              style={{
                backgroundImage: `url(${starIcon})`,
              }}
            />
            {review.rating !== null ? review.rating : "Sin valoración"}
          </p>
          {review.rating !== null ? (
            <p>Valoración publicada el {new Date(review.created_at).toLocaleDateString("es-ES")}</p>
          ) : (
            ""
          )}
        </li>
      ))}
    </ul>
  ) : (
    <p>No hay valoraciones todavía.</p>
  );
}
