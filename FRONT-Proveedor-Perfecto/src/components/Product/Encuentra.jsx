import "./Encuentra.css";

import searchIcon from "../../assets/icons/search.png";
import useProductSearch from "../../hooks/useProductSearch";
import SearchInput from "./Components/SearchInput";

export default function Encuentra() {
  const { input, setInput, handleSearch, results, error } = useProductSearch();

  return (
    <section id="section-encuentra">
      <h1>
        Encuentra tu <br />
        proveedor perfecto
      </h1>
      <SearchInput />
    </section>
  );
}
