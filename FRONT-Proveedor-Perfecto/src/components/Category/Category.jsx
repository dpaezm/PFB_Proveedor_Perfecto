export default function Category({ category }) {
  const { id, categoryname, photo1 } = category;

  return (
    <>
      <img src={photo1} alt={categoryname} />
      <h3>{categoryname}</h3>
    </>
  );
}
