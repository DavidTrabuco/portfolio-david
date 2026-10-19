
import { ExperienciaStyles } from "./style";

export default function Experiencia() {



    const experiencia = [
        {
            empresa: "Prefeitura de Salvador - SMS ",
            cargo: "Desenvolvedor Front-End / Design",
            periodo: "05/2026  - até o  momento",
            descricao: [
                "Integro telas com APIs REST, tratando estados de carregamento, erros (400, 401, 403, 500) e validação de dados.",
                "Implemento fluxos de autenticação no front, como login, rotas protegidas e envio de token ou cookie nas requisições.",
                "Defino com o time de back- end os contratos das APIs: quais campos cada endpoint recebe e devolve.",
                "Leio a documentação das APIs no Swagger e testo endpoints antes de integrá - los à interface.",
                "Investigo bugs na fronteira entre front e back, identificando se a falha está na tela ou na resposta da API."

            ]

        },
    ];
    return (
        <section className={ExperienciaStyles.section}>
            <div className={ExperienciaStyles.container}>

                <div className={ExperienciaStyles.containerTopo}>
                    <h2 className={ExperienciaStyles.titulo}>
                        Minhas <span className={ExperienciaStyles.textodestaque}>Experiências</span>
                    </h2>
                    <div className={ExperienciaStyles.divider}></div>
                </div>

                <div className={ExperienciaStyles.containerEmpresas}>
                    {experiencia.map((item, index) => (
                        <div key={index} className={ExperienciaStyles.card}>
                            <div className={ExperienciaStyles.cabecalhoCard}>
                                <div>
                                    <h3 className={ExperienciaStyles.empresa}>{item.empresa}</h3>
                                    <p className={ExperienciaStyles.cargo}>{item.cargo}</p>
                                </div>
                                <span className={ExperienciaStyles.periodo}>{item.periodo}</span>
                            </div>
                            <ul className={ExperienciaStyles.descricao}>
                                {item.descricao.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
