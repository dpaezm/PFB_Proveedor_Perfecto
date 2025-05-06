import { useEffect, useState } from "react";
import searchIcon from "./../../../assets/icons/search.png";
import "./../Encuentra.css";
import { useNavigate } from "react-router-dom";
import { searchProductService } from "../../../services/productService";

export default function SearchInput() {
  const [query, setQuery] = useState("");
  const [matches, setMatches] = useState([]);
  const [showList, setShowList] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.length >= 3) {
      const delay = setTimeout(async () => {
        try {
          const data = await searchProductService(query);
          setMatches(data.slice(0, 5));
          setShowList(true);
        } catch {
          setMatches([]);
          setShowList(false);
        }
      }, 300);
      return () => clearTimeout(delay);
    } else {
      setMatches([]);
      setShowList(false);
    }
  }, [query]);

  function handleSubmit(e) {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/products/search?input=${encodeURIComponent(query)}`);
    }
  }

  function handleMatches(text) {
    navigate(`/products/search?input=${encodeURIComponent(text)}`);
  }

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Prueba con Agente de IA"
          onFocus={() => query.length >= 3 && setShowList(true)}
          onBlur={() => setTimeout(() => setShowList(false), 150)}
        />
        <button
          type="submit"
          id="icon-search"
          style={{
            backgroundImage: `url(${searchIcon})`,
          }}
        >
          buscar
        </button>
      </form>

      {showList && matches.length > 0 && (
        <ul>
          {matches.map((product) => (
            <li key={product.id} onClick={() => handleMatches(product.product_name)}>
              {product.product_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
