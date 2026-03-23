import { FaInstagram, FaGithub, FaDiscord } from "react-icons/fa";
import { FooterStyles } from "./style";
import PhotoLogo from "../../share/Logo/Logo minimalista _Dev Trabuco_.png";
 
const redes = [
  {
    nome: "Instagram",
    href: "https://www.instagram.com/davidtrabuco_20/",
    icone: <FaInstagram size={16} />,
  },
  {
    nome: "GitHub",
    href: "https://github.com/DavidTrabuco",
    icone: <FaGithub size={16} />,
  },
  {
    nome: "Discord",
    href: "discord.com/app",
    icone: <FaDiscord size={16} />,
  },
];
 
const navLinks = [
  { nome: "Home", href: "#Home" },
  { nome: "Sobre", href: "#About" },
  { nome: "Tecnologias", href: "#Tech" },
  { nome: "Projetos", href: "#Projects" },
];
 
export default function Footer() {
  return (
    <footer id="Contacts" className={FooterStyles.footer}>
 
      <div className={FooterStyles.glow} />
 
      <div className={FooterStyles.container}>
 
        {/* Logo */}
        <div className={FooterStyles.logoWrapper}>
          <img
            src={PhotoLogo}
            alt="Logo Dev Trabuco"
            className={FooterStyles.logo}
          />
        </div>
 
        {/* Texto */}
        <p className={FooterStyles.subtitulo}>Para me contatar - Mais informações sobre mim</p>
        <p className={FooterStyles.descricao}>
          Siga-me nas redes sociais para ficar por dentro das novidades e interagir comigo.
        </p>
 
        {/* Redes Sociais */}
        <div className={FooterStyles.redesWrapper}>
          {redes.map((rede, index) => (
            <a
              key={index}
              href={rede.href}
              className={FooterStyles.redesLink}
              target="_blank"
              rel="noreferrer"
            >
              <span className={FooterStyles.redesIcone}>{rede.icone}</span>
              {rede.nome}
            </a>
          ))}
        </div>
 
        {/* Divider */}
        <div className={FooterStyles.divider} />
 
        {/* Copyright + Nav */}
        <div className={FooterStyles.copyrightWrapper}>
 
          <span className={FooterStyles.copyright}>
            © 2025–2026{" "}
            <a href="#" className={FooterStyles.copyrightLink}>David Trabuco ™</a>
            . All Rights Reserved.
          </span>
 
          <nav className={FooterStyles.navWrapper}>
            {navLinks.map((link, index) => (
              <a key={index} href={link.href} className={FooterStyles.navLink}>
                {link.nome}
              </a>
            ))}
          </nav>
 
        </div>
 
      </div>
    </footer>
  );
}
 