import { useState } from "react";
import { NavBarStyles as styles } from "./style";
import logo from "../../../share/Logo/Logo.png";
 
const links = [
  { nome: "Home",     href: "#Home" },
  { nome: "About Me", href: "#About" },
  { nome: "Techs",    href: "#Tech" },
  { nome: "Projects", href: "#Projects" },
  { nome: "Contact",  href: "#Contacts" },
];
 
const ContactMe = () => (
  <a href="#Contacts" className={styles.button}>Contact Me</a>
);
 
export default function NavBar() {
  const [menuAberto, setMenuAberto] = useState(false);
 
  const fecharMenu = () => setMenuAberto(false);
 
  return (
    <nav className={styles.backgroundColor}>
 
      {/* Barra principal */}
      <div className={styles.default}>
 
        {/* Logo */}
        <img src={logo} alt="Logo Portfolio" className={styles.NavbarLogo} />
 
        {/* Links — desktop */}
        <ul className={styles.navCenter}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.itemMenuTheme}>{link.nome}</a>
            </li>
          ))}
        </ul>
 
        {/* Botão Contact Me — apenas desktop */}
        <ContactMe />
 
        {/* Hamburguer — apenas mobile */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Abrir menu"
        >
          <span className={`${styles.hamburgerLine} ${menuAberto ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`${styles.hamburgerLine} ${menuAberto ? "opacity-0" : ""}`} />
          <span className={`${styles.hamburgerLine} ${menuAberto ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
 
      </div>
 
      {/* Menu mobile — só os links, sem botão */}
      {menuAberto && (
        <div className={styles.mobileMenu}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={fecharMenu}
            >
              {link.nome}
            </a>
          ))}
        </div>
      )}
 
    </nav>
  );
}


