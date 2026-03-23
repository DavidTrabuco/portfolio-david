import {  FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { CabeçalhoStyles } from "./style";
 
export default function Cabecalho() {
  return (
    <section id="Home" className={CabeçalhoStyles.section}>
 
      {/* Glow de fundo */}
      <div className={CabeçalhoStyles.glow} />
 
      <div className={CabeçalhoStyles.container}>
 
        {/* Badge */}
        <div>
          <span className={CabeçalhoStyles.badge}>
            <span className={CabeçalhoStyles.badgeDot} />
            Portfólio Pessoal
          </span>
        </div>
 
        {/* Título */}
        <h1 className={CabeçalhoStyles.titulo}>
          Bem Vindo ao meu{" "}
          <span className={CabeçalhoStyles.tituloDestaque}>Portfólio</span>
        </h1>
 
        {/* Linha */}
        <div className={CabeçalhoStyles.divider} />
 
        {/* Descrição */}
        <p className={CabeçalhoStyles.descricao}>
          Fique à vontade para explorar, interagir e, se quiser trocar uma ideia
          ou colaborar, a porta está sempre aberta. 🚀
        </p>
 
        {/* Redes Sociais */}
        <span className={CabeçalhoStyles.redesLabel}>Redes Sociais</span>
 
        <div className={CabeçalhoStyles.redesLista}>
 
          <a href="https://www.linkedin.com/in/david-trabuco/" className={CabeçalhoStyles.redesLink}>
            <FaLinkedin size={22} />
          </a>
 
          <a href="https://github.com/DavidTrabuco" className={CabeçalhoStyles.redesLink}>
            <FaGithub size={22} />
          </a>
 
          <a href="https://www.instagram.com/davidtrabuco_20/" className={CabeçalhoStyles.redesLink}>
            <FaInstagram size={22} />
          </a>
 
        </div>
 
      </div>
    </section>
  );
}