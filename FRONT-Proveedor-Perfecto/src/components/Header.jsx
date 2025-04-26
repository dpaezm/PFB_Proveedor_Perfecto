import { Link } from "react-router-dom";
import { useContext } from "react";
import Nav from "./Nav";
import Button from "./Button";

export default function Header() {
  return (
    <header>
      <Link to={"/"}>
        <h1 className="text-logo md:text-[32px] text-amarillo font-black text-center">find ;)</h1>
      </Link>
      <Nav />
    </header>
  );
}
