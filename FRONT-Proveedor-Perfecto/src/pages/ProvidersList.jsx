import { NavLink } from "react-router-dom";
import useProviders from "./../hooks/useProviders.js";
import Provider from "../components/User/Provider.jsx";
import "./../components/User/ProviderList.css";
import homeIcon from "./../assets/icons/home.png";

export default function ProvidersList() {
  const { providers } = useProviders();

  return (
    <section className="container-providers-list">
      <h2>
        <NavLink to={"/"}>
          <button id="home-icon" style={{ backgroundImage: `url(${homeIcon})` }} />
        </NavLink>
        Descubre los profesionales
      </h2>
      <ul className="section-providers">
        {providers.map((provider) => (
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
