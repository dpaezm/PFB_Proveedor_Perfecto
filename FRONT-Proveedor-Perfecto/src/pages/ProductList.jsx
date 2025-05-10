import "./ProductList.css";
import { useLocation, NavLink, useSearchParams } from "react-router-dom";
import useAllProducts from "../hooks/useAllProducts.js";

import homeIcon from "./../assets/icons/home.png";

import ProductDetail from "../components/Product/Product.jsx";
import { useState, useMemo } from "react";
import FilterCity from "../components/Product/Components/FilterCity.jsx";
import FilterPrice from "../components/Product/Components/FilterPrice.jsx";
import FilterSort from "../components/Product/Components/FilterSort.jsx";

export default function ProductList({ products = [], error }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sort") || "";
  const location = useLocation();

  const selectedCity = searchParams.get("city") || "Todas";
  const minPrice = parseFloat(searchParams.get("min")) || 0;
  const maxPrice = parseFloat(searchParams.get("max")) || Infinity;

  const filteredProducts = useMemo(() => {
    let result = products
      .filter((product) => !selectedCity || selectedCity === "Todas" || product.city === selectedCity)
      .filter((product) => product.price >= minPrice && product.price <= maxPrice);

    switch (sortBy) {
      case "priceAsc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "ratingAsc":
        result.sort((a, b) => (a.avg_rating || 0) - (b.avg_rating || 0));
        break;
      case "ratingDesc":
        result.sort((a, b) => (b.avg_rating || 0) - (a.avg_rating || 0));
        break;
    }
    return result;
  }, [products, selectedCity, minPrice, maxPrice, sortBy]);

  function handleCityChange(city) {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.set("city", city);
      return newParams;
    });
  }

  function handlePriceChange(min, max) {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.set("min", min);
      newParams.set("max", max);
      return newParams;
    });
  }

  function handleSortChange(value) {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.set("sort", value);
      return newParams;
    });
  }

  if (error) return <p>{error}</p>;
  if (!products) return <p>Cargando productos...</p>;

  return (
    <section className="product-list">
      {/*       <h1 className="titulo-cat2">
        <NavLink to={"/"}>
          <button id="home-icon" style={{ backgroundImage: `url(${homeIcon})` }} />
        </NavLink>

        <NavLink to={"/products"}>Servicios</NavLink>
      </h1> */}
      <section className="product-filters-section">
        <FilterCity products={products} selectedCity={selectedCity} onChange={handleCityChange} />
        <FilterPrice selectedMin={minPrice} selectedMax={maxPrice} onChange={handlePriceChange} />
        <FilterSort selectedSort={sortBy} onChange={handleSortChange} />
      </section>
      <section className="container-products">
        <ul className="section-product-list">
          {filteredProducts.map((product) => (
            <li key={product.id} className="li-product-list">
              <NavLink to={`/product/${product.id}`} state={{ from: location }}>
                <ProductDetail product={product} />
              </NavLink>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
