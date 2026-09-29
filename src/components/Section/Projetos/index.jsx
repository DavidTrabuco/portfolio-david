import { FaArrowRight } from "react-icons/fa";
import { ProjetosStyles  } from "./style";
import Photo1 from "../../../share/Projetos/Projeto_Apple.png";
import Photo2 from "../../../share/Projetos/Gerador.png";
import Photo3 from "../../../share/Projetos/PizzariaATT.png";
import Photo4 from "../../../share/Projetos/ProjetoA3.png";
import Photo5 from "../../../share/Projetos/barberstudios.png";
import Photo6 from "../../../share/Projetos/Cisco.png";
import Photo7 from "../../../share/Projetos/AgenteIA.png"


import PhotoAvatar from "../../../share/o/imagem_circular_transparente.png";
 
const projetos = [
  {
    titulo: "EventFlow API",
    descricao: "API de gestão de eventos e ingressos em ASP.NET Core 10. Autenticação JWT em cookie HttpOnly com sessão revogável, autorização por perfil, PostgreSQL no Docker, jobs em background com Hangfire, envio de e-mail por SMTP e testes automatizados.",
    stack: ["ASP.NET Core 10", "PostgreSQL", "Docker", "Hangfire", "JWT"],
    link: "https://github.com/DavidTrabuco/EventFlowAPI",
  },
  {
    titulo: "ShopFlow",
    descricao: "API de e-commerce B2C em ASP.NET Core (.NET 10), com foco em confiabilidade de estoque e pagamento. Usa EF Core para migrations, Dapper nas consultas, PostgreSQL no Docker e autenticação JWT em cookie HttpOnly.",
    stack: ["ASP.NET Core 10", "EF Core", "Dapper", "PostgreSQL", "JWT"],
    link: "https://github.com/DavidTrabuco/ShopFlow",
  },
  {
    titulo: "Banking API",
    descricao: "Meu primeiro projeto em C#: API REST de um banco digital com contas, depósitos, saques, transferências e extrato. Arquitetura em camadas, JWT em cookie HttpOnly, senha com BCrypt e regra que impede o cliente de acessar contas de outros.",
    stack: ["ASP.NET Core 8", "EF Core", "Dapper", "JWT", "React"],
    link: "https://github.com/DavidTrabuco/Banking-API",
  },
  {
    titulo: "Pizzaria House",
    descricao: "Sistema de gestão de uma pizzaria com React e TypeScript, do código ao deploy. É o projeto em que estou trabalhando atualmente.",
    imagem: Photo3,
    site: "https://pizzaria-trabuco.vercel.app",
    link: "https://github.com/DavidTrabuco/Projeto-Pizzaria-TS-React-",
  },
  {
    titulo: "Protótipo TutorIA",
    descricao: "Protótipo de um agente de IA voltado para educação, feito em grupo na faculdade. Fiquei responsável pelo WebApp e usei Docker para rodar a aplicação em ambientes isolados.",
    imagem: Photo7,
    link: "https://github.com/DavidTrabuco/Agente-Tutor-IA-",
  },
  {
    titulo: "Projeto BarberShop",
    descricao: "Landing page de uma barbearia feita com React, TypeScript e Tailwind CSS.",
    imagem: Photo5,
    link: "https://github.com/DavidTrabuco/Projeto-BARBER-TS",
  },
  {
    titulo: "Landing Page Apple",
    descricao: "Refiz minha antiga landing page da Apple, feita só com HTML e CSS, agora usando React e Tailwind CSS.",
    imagem: Photo1,
    link: "https://github.com/DavidTrabuco/Projeto-Apple-React-TS",
  },
  {
    titulo: "CRUD de Eventos Culturais",
    descricao: "Trabalho em grupo da faculdade: um sistema CRUD de eventos culturais em Java puro.",
    imagem: Photo4,
    link: "https://github.com/DavidTrabuco/Trabalho-A3-PSC",
  },
  {
    titulo: "Gerador de QR Code",
    descricao: "Gerador de QR Code com React, consumindo uma API externa com fetch.",
    imagem: Photo2,
    link: "https://github.com/DavidTrabuco/Gerador-QRCODE",
  },
  {
    titulo: "Trabalho TCP/IP",
    descricao: "Meu primeiro projeto da faculdade: simulação de uma rede no Cisco Packet Tracer.",
    imagem: Photo6,
    link: "https://github.com/DavidTrabuco/Trabalho-Faculdade-TCP-IP",
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
                {projeto.imagem ? (
                  <>
                    <img
                      src={projeto.imagem}
                      alt={projeto.titulo}
                      className={ProjetosStyles.imagem}
                      loading="lazy"
                    />
                    <div className={ProjetosStyles.imagemOverlay} />
                  </>
                ) : (
                  <div className={ProjetosStyles.capaApi}>
                    <span className={ProjetosStyles.capaApiTitulo}>{"{ " + projeto.titulo + " }"}</span>
                    <div className={ProjetosStyles.capaApiStack}>
                      {projeto.stack?.map((tec) => (
                        <span key={tec} className={ProjetosStyles.capaApiTag}>{tec}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
 
              {/* Corpo */}
              <div className={ProjetosStyles.cardBody}>
 
                <h3 className={ProjetosStyles.cardTitulo}>{projeto.titulo}</h3>
 
                <p className={ProjetosStyles.cardDescricao}>{projeto.descricao}</p>

                {projeto.site && (
                  <a href={projeto.site} className={ProjetosStyles.site} target="_blank" rel="noreferrer">
                    Ver site em deploy 
                     <FaArrowRight className={ProjetosStyles.linkIconeSite} />
                  </a>
                )}
 
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
                    Ver projeto no GitHub
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