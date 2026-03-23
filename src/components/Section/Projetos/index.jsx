import { FaArrowRight } from "react-icons/fa";
import { ProjetosStyles  } from "./style";
import Photo1 from "../../../share/Projetos/Projeto_Apple.png";
import Photo3 from "../../../share/Projetos/Gerador.png";
import Photo4 from "../../../share/Projetos/image.png";
import Photo5 from "../../../share/Projetos/Pizzaria.jpeg";
import Photo6 from "../../../share/Projetos/ProjetoA3.png";
import Photo7 from "../../../share/Projetos/ProjetoBarber.png";
import PhotoAvatar from "../../../share/o/imagem_circular_transparente.png";
 
const projetos = [
  {
    titulo: "Landing Page Apple",
    descricao: "Fiz uma landing page da apple estudando no curso Hora de Codar com HTML, CSS e JavaScript.",
    imagem: Photo1,
    link: "https://github.com/DavidTrabuco/Projeto-Apple.",
  },
  {
    titulo: "Projeto Pizzaria ",
    descricao: "Fiz o primeiro projeto envolvendo React e Tailwind CSS e mexendo com React Routers .",
    imagem: Photo5,
    link: "https://github.com/DavidTrabuco/Pizzaria-David",
  },
  {
    titulo: "Gerador de QRCODE",
    descricao: "Fiz um gerador de QRCODE com HTML, CSS, JavaScript e React utilizando fetch API.",
    imagem: Photo3,
    link: "https://github.com/DavidTrabuco/Gerador-QRCODE",
  },
  {
    titulo: "Projeto Login HTML e CSS",
    descricao: "Fiz meu primeiro projeto quando comecei a gostar da tecnologia.",
    imagem: Photo4,
    link: "https://github.com/DavidTrabuco/PROJETO-LOGIN",
  },
  {
    titulo: "Projeto BarberShop",
    descricao: "Fiz um site de uma Barbearia.",
    imagem: Photo7,
    link: "https://github.com/DavidTrabuco/Projeto_Barbearia",
  },
  {
    titulo: "Trabalho Faculdade",
    descricao: "Nosso grupo criou um Sistema CRUD de Eventos Culturais em Java puro.",
    imagem: Photo6,
    link: "https://github.com/DavidTrabuco/Trabalho-A3-PSC",
  },
];
 
export default function Projetos() {
  return (
    <section id="Projects" className={ProjetosStyles.section}>
 
      <div className={ProjetosStyles.glow} />
 
      <div className={ProjetosStyles.container}>
 
        {/* Cabeçalho */}
        <div className={ProjetosStyles.headerWrapper}>
          <h2 className={ProjetosStyles.titulo}>
            Meus{" "}
            <span className={ProjetosStyles.tituloDestaque}>Projetos</span>
          </h2>
          <div className={ProjetosStyles.divider} />
        </div>
 
        {/* Grid de cards */}
        <div className={ProjetosStyles.grid}>
          {projetos.map((projeto, index) => (
            <article key={index} className={ProjetosStyles.card}>
 
              {/* Imagem */}
              <div className={ProjetosStyles.imagemWrapper}>
                <img
                  src={projeto.imagem}
                  alt={projeto.titulo}
                  className={ProjetosStyles.imagem}
                  loading="lazy"
                />
                <div className={ProjetosStyles.imagemOverlay} />
              </div>
 
              {/* Corpo */}
              <div className={ProjetosStyles.cardBody}>
 
                <h3 className={ProjetosStyles.cardTitulo}>{projeto.titulo}</h3>
 
                <p className={ProjetosStyles.cardDescricao}>{projeto.descricao}</p>
 
                {/* Rodapé */}
                <div className={ProjetosStyles.cardFooter}>
 
                  <div className={ProjetosStyles.autorWrapper}>
                    <img
                      src={PhotoAvatar}
                      alt="David avatar"
                      className={ProjetosStyles.autorAvatar}
                    />
                    <span className={ProjetosStyles.autorNome}>David Trabuco</span>
                  </div>
 
                  <a href={projeto.link} className={ProjetosStyles.link} target="_blank" rel="noreferrer">
                    Ver projeto
                    <FaArrowRight className={ProjetosStyles.linkIcone} />
                  </a>
 
                </div>
 
              </div>
 
            </article>
          ))}
        </div>
 
      </div>
    </section>
  );
}