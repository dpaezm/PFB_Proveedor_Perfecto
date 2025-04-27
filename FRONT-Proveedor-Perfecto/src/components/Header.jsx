import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Nav from "./Nav";
//import Nav2 from "./Nav2";
import logo from "../assets/LOGO_find.png";

import Button from "./Button";

export default function Header() {
  return (
    <header>
      <Link to={"/"}>
        <button
          id="logo-icon"
          style={{
            backgroundImage: `url(${logo})`,
          }}
        />
      </Link>
      <Nav />
    </header>
  );
}
