import { NavLink } from "react-router-dom";
import useProviders from "./../hooks/useProviders.js";
import Provider from "../components/User/Provider.jsx";
import "./../components/User/ProviderList.css";
import homeIcon from "./../assets/icons/home.png";
import "./../components/User/ProviderList.css";
import { useMemo, useState } from "react";
import FilterProviderCity from "../components/User/FilterProviderCity.jsx";

export default function ProvidersList() {
  const { providers } = useProviders();

  const [selectedCity, setSelectedCity] = useState("Todas");

  const filteredProviders = useMemo(() => {
    if (selectedCity === "Todas") return providers;
    return providers.filter((provider) => provider.city === selectedCity);
  }, [providers, selectedCity]);

  return (
    <section className="container-providers-list">
      <h1 className="titulo-cat2">
        <NavLink to={"/"}>
          <button id="home-icon" style={{ backgroundImage: `url(${homeIcon})` }} />
        </NavLink>
        Descubre los profesionales
      </h1>
      <div className="provider-filters">
        <FilterProviderCity provider={providers} selectedCity={selectedCity} onChange={setSelectedCity} />
      </div>
      <ul className="section-providers">
        {filteredProviders.map((provider) => (
          <li key={provider.id} className="li-provider">
            <NavLink to={`/providers/${provider.id}`}>
              <Provider provider={provider} />
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
