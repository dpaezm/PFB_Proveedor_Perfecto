import useCategories from "../../hooks/useCategories.js";
import Category from "./Category.jsx";

export default function CategoryList() {
  const { categories } = useCategories();
  console.log(categories);

  return (
    <>
      <h2>Categorías Populares</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Category category={category} />
          </li>
        ))}
      </ul>
    </>
  );
}
