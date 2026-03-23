import { useState } from "react";
import { SobreMimStyles as styles } from "./style";
import Photo1 from "../../../share/o/Photo1.jpg";
import Photo2 from "../../../share/o/Photo2.jpg";
import Photo3 from "../../../share/o/Photo3.jpeg";

 
const imagens = [
  {
    src: Photo1,
    alt: "David - estilo comic",
  },
  {
    src: Photo2,
    alt: "David - foto profissional",
  },
  {
    src: Photo3,
    alt: "David - terceira foto",
  },
];
 
export default function SobreMim() {
  const [ativo, setAtivo] = useState(0);
 
  const anterior = () =>
    setAtivo((prev) => (prev - 1 + imagens.length) % imagens.length);
 
  const proximo = () =>
    setAtivo((prev) => (prev + 1) % imagens.length);
 
  return (
    <section id="About" className={styles.section}>
      <div className={styles.container}>
 
        {/* Lado Esquerdo — Texto */}
        <div className={styles.textoWrapper}>
 
          <span className={styles.badge}>
            <span className={styles.badgeDot}></span>
            Disponível para oportunidades
          </span>
 
          <h2 className={styles.titulo}>
            Futuro{" "}
            <span className={styles.tituloDestaque}>DEV WEB</span>
          </h2>
 
          <div className={styles.divider}></div>
 
          <p className={styles.descricao}>
            Atualmente, estou em formação como desenvolvedor cursando Ciência da
            Computação, dedicando-me intensamente à minha transição de carreira
            escolar para o profissional. Este é um projeto pessoal e profissional
            que tenho abordado com grande ansiedade. Possuo skills excepcionais
            de comunicação e foco em metas e objetivos.
          </p>
 
          <div className={styles.statsWrapper}>
            <div className={styles.statItem}>
              <span className={styles.statNumero}>2+</span>
              <span className={styles.statLabel}>Anos estudando</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumero}>10+</span>
              <span className={styles.statLabel}>Projetos</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumero}>100%</span>
              <span className={styles.statLabel}>Dedicação</span>
            </div>
          </div>
 
        </div>
 
        {/* Lado Direito — Pilha de cards */}
        <div className={styles.carrosselWrapper}>
 
          {/* Botão anterior */}
          <button className={styles.btnEsquerda} onClick={anterior}>
            ‹
          </button>
 
          {/* Pilha */}
          <div className={styles.pilhaContainer}>
            {imagens.map((img, index) => {
              const offset = (index - ativo + imagens.length) % imagens.length;
 
              // offset 0 = frente, 1 = meio, 2 = atrás
              const zIndex = imagens.length - offset;
              const scale = offset === 0 ? 1 : offset === 1 ? 0.92 : 0.84;
              const translateY = offset === 0 ? 0 : offset === 1 ? 14 : 26;
              const translateX = offset === 0 ? 0 : offset === 1 ? 10 : 20;
              const opacity = offset === 2 ? 0.5 : offset === 1 ? 0.75 : 1;
 
              return (
                <div
                  key={index}
                  style={{
                    position: "absolute",
                    inset: 0,
                    zIndex,
                    transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)`,
                    opacity,
                    transition: "all 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
                    borderRadius: "1rem",
                    overflow: "hidden",
                    boxShadow: offset === 0
                      ? "0 25px 50px rgba(0,0,0,0.6)"
                      : "0 10px 30px rgba(0,0,0,0.4)",
                    border: offset === 0
                      ? "1px solid rgba(59,130,246,0.35)"
                      : "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <img
                    className={styles.imagemImg}
                    src={img.src}
                    alt={img.alt}
                    draggable={false}
                  />
                  <div className={styles.imagemOverlay}></div>
                </div>
              );
            })}
          </div>
 
          {/* Botão próximo */}
          <button className={styles.btnDireita} onClick={proximo}>
            ›
          </button>
 
        </div>
 
      </div>
    </section>
  );
}