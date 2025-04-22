import { Link } from "react-router-dom";
import Nav from "./Nav";

export default function Header() {
  return (
    <header>
      <Link to={"/"}>
        <h1 className="text-logo md:text-[32px] text-amarillo font-black text-center">
          find ;)
        </h1>
      </Link>
      <p className="text-subtitulo md:text-[16px] text-gris2 font-medium text-center">
        Nuestra página de compra y venta de servicios profesionales
      </p>
      <Nav />
    </header>
  );
}
