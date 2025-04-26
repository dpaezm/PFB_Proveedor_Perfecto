import useCategories from "../../hooks/useCategories.js";
import Category from "./Category.jsx";

export default function CategoryList() {
  const { categories } = useCategories();
  console.log(categories);

  return (
    <>
      <h2>Categorías Populares</h2>
      <section className="container-categories">
        <ul className="section-categories">
          {categories.map((category) => (
            <li key={category.id} className="li-category">
              <Category category={category} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
