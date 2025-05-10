import "./Header.css";
import { NavLink, useLocation } from "react-router-dom";

import Nav from "./Nav";
import Nav2 from "./Nav2";
import logo from "../assets/LOGO_find.png";
import SearchInput from "./../components/Product/Components/SearchInput";

import Button from "./Button";

export default function Header() {
  const home = location.pathname === "/";

  return (
    <header>
      <Nav2 />
      <NavLink to={"/"}>
        <button
          id="logo-icon"
          style={{
            backgroundImage: `url(${logo})`,
          }}
        />
      </NavLink>

      {!home && <SearchInput />}

      <Nav />
    </header>
  );
}
