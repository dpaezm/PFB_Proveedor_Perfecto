import "./Category.css";

const { VITE_API_URL } = import.meta.env;

export default function Category({ category }) {
  const { id, categoryname, photo1 } = category;

  return (
    <>
      <img src={`${VITE_API_URL}${photo1}`} alt={categoryname} className="img-category" />
      <h3>{categoryname}</h3>
    </>
  );
}
