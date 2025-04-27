import { Link } from "react-router-dom";
import logo from "../assets/LOGO_find.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Footer.css";
import PreFooter from "./PreFooter";

export default function Footer() {
  return (
    <>
      <PreFooter />
      <footer>
        <Link to={"/"}>
          <button
            id="logo-icon"
            style={{
              backgroundImage: `url(${logo})`,
            }}
          />
        </Link>
        <p className="p-footer">Proveedor Perfecto © 2025</p>

        <section className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
        </section>
      </footer>
    </>
  );
}
