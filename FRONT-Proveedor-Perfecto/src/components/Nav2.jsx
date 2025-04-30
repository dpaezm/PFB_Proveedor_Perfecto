import burgerIcon2 from "../assets/icons/menu_hamburger.png";

export default function Nav2() {
  return (
    <nav className="nav2">
      <button id="burger-icon" style={{ backgroundImage: `url(${burgerIcon2})` }}></button>
    </nav>
  );
}
