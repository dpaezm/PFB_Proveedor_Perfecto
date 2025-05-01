import "./Filters.css";
import FilterByLocation from "./Product/FilterByLocation";
import FilterByPrice from "./Product/FilterByPrice";
import FilterByType from "./Product/FilterByType";

export default function Filters() {
  return (
    <section className="filters-section">
      <FilterByLocation />
      <FilterByPrice />
      <FilterByType />
    </section>
  );
}
