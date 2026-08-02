import gamescope from "../../../public/gamescope.png";
import portfolio from "../../../public/portfolio.jpeg";
import efeitoPortfolio from "../../../public/efeitoPortfolio.png";
import gs02 from "../../../public/gs02.png";
import gs03 from "../../../public/gs03.png";
import gs04 from "../../../public/gs04.png";
import pt01 from "../../../public/pt01.png";
import pt02 from "../../../public/pt02.png";
import efeitogamescope from "../../../public/efeitogamescope.png";
import diario from "../../../public/diario.jpeg";
import efeitodiario from "../../../public/efeitodiario.png";

export const Works = [
  {
    slug: "gamescope",
    id: "1",
    title: "Gamescope",
    data: "2026",
    description: "Catálogo e wishlist de jogos com busca em tempo real",
    src: gamescope,
    srcefeito: efeitogamescope,
    tecs: ["NextsJS", "TypeScript", "Tailwind", "API", "Design"],
    desafios:
      "Sites de catálogo de jogos costumam ter buscas lentas, sem feedback visual, e exigem cadastro só para salvar favoritos, o que cria fricção desnecessária para quem só quer organizar uma lista pessoal de jogos que quer jogar depois.",

    solucao:
      "Os resultados da API são filtrados conforme o usuário digita, com debounce para evitar excesso de requisições e os jogos favoritados são salvos via localStorage, então o usuário mantém sua lista mesmo sem criar conta, e ela persiste entre sessões no mesmo navegador. ",
    website: "https://gamescope-zeta.vercel.app/",
    github: "https://github.com/caadu999/gamescope",
    img: [gs02, gs03, gs04],
  },

  {
    slug: "portfolio",
    id: "3",
    title: "Portfolio Pessoal",
    data: "2026",
    description:
      "Meu portfolio pessoal, desenvolvido por mim para apresentar meus projetos.",
    src: portfolio,
    srcefeito: efeitoPortfolio,
    tecs: ["NextsJS", "JSX", "SCSS", "Framer Motion", "Design"],
    desafios:
      "Desenvolvi este portfólio para apresentar meus projetos e habilidades com a estratégia Mobile First.",

    solucao:
      "Desenvolvi este portfólio para apresentar meus projetos e habilidades priorizando a boa experiência em mobile, já que grande parte dos acessos hoje vem do celular",
    website: "https://caducodedev.vercel.app/",
    github: "https://github.com/caadu999/portfoliov1",
    img: [portfolio, pt01, pt02],
  },
  {
    slug: "dbordo",
    id: "4",
    title: "Diário a bordo",
    data: "2026",
    description: "Registro e anotações",
    src: diario,
    srcefeito: efeitodiario,
    tecs: ["Javascript", "PWA", "LocalStorage"],
    desafios:
      "É uma Aplicação PWA desenvolvida para registrar e organizar anotações de forma simples e prática, com suporte a armazenamento local e instalação como aplicativo.",

    solucao:
      "Nesse projeto utilizo LocalStorage para persistência dos dados e Service Workers para oferecer funcionamento offline e instalação como aplicativo, proporcionando uma experiência mais próxima de uma aplicação nativa.",
    website: "https://diario-a-bordo.vercel.app/",
    github: "https://github.com/caadu999/diarioABordo",
    img: [diario, diario, diario],
  },
];
