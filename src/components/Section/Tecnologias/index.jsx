import {
  FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaNetworkWired,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TechStyles  } from "./style";

const tecnologias = [
  {
    nome: "Java POO",
    icone: <FaJava className={TechStyles.icone} style={{ color: "#5b87d2" }} />,
  },
  {
    nome: "HTML5",
    icone: <FaHtml5 className={TechStyles.icone} style={{ color: "#bd5500" }} />,
  },
  {
    nome: "CSS3",
    icone: <FaCss3Alt className={TechStyles.icone} style={{ color: "#74C0FC" }} />,
  },
  {
    nome: "JavaScript",
    icone: <FaJs className={TechStyles.icone} style={{ color: "#FFD43B" }} />,
  },
  {
    nome: "React",
    icone: <FaReact className={TechStyles.icone} style={{ color: "#61DBFB" }} />,
  },
  {
    nome: "Tailwind CSS",
    icone: <SiTailwindcss className={TechStyles.icone} style={{ color: "#38BDF8" }} />,
  },
  {
    nome: "Git & GitHub",
    icone: (
      <span className="flex gap-1">
        <FaGitAlt style={{ color: "#F05032", width: 28, height: 28 }} />
        <FaGithub style={{ color: "#ffffff", width: 28, height: 28 }} />
      </span>
    ),
  },
  {
    nome: "Cisco | Arq. Redes",
    icone: <FaNetworkWired className={TechStyles.icone} style={{ color: "#1BA0D7" }} />,
  },
];

export default function Tech() {
  return (
    <section id="Tech" className={TechStyles.section}>

      <div className={TechStyles.glow} />

      <div className={TechStyles.container}>

        {/* Cabeçalho */}
        <div className={TechStyles.headerWrapper}>
          <h2 className={TechStyles.titulo}>
            Linguagens &{" "}
            <span className={TechStyles.tituloDestaque}>Tecnologias</span>
          </h2>
          <div className={TechStyles.divider} />
        </div>

        {/* Grid de cards */}
        <div className={TechStyles.grid}>
          {tecnologias.map((tech, index) => (
            <div key={index} className={TechStyles.card}>
              <div className={TechStyles.iconeWrapper}>
                {tech.icone}
              </div>
              <span className={TechStyles.nome}>{tech.nome}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}