import gamescope from "../../../public/gamescope.jpeg";

export const Works = [
  {
    slug: "gamescope",
    title: "Gamescope",
    data: "2026",
    description: "Catálogo e wishlist de jogos com busca em tempo real",
    src: gamescope,
    tecs: ["NextsJS", "TypeScript", "Tailwind", "API", "Vercel"],
    desafios:
      "Sites de catálogo de jogos costumam ter buscas lentas, sem feedback visual, e exigem cadastro só para salvar favoritos, o que cria fricção desnecessária para quem só quer organizar uma lista pessoal de jogos que quer jogar depois.",

    solucao:
      "Os resultados da API são filtrados conforme o usuário digita, com debounce para evitar excesso de requisições e os jogos favoritados são salvos via localStorage, então o usuário mantém sua lista mesmo sem criar conta, e ela persiste entre sessões no mesmo navegador. ",
    website: "https://gamescope-zeta.vercel.app/",
    github: "https://github.com/caadu999/gamescope",
  },

  {
    slug: "blabla",
    title: "Blablac",
    data: "2026",
    description: "Catálogo e wishlist de jogos com busca em tempo real",
    src: gamescope,
    tecs: ["NextsJS", "TypeScript", "Tailwind", "API"],
    desafios:
      "Sites de catálogo de jogos costumam ter buscas lentas, sem feedback visual, e exigem cadastro só para salvar favoritos, o que cria fricção desnecessária para quem só quer organizar uma lista pessoal de jogos que quer jogar depois.",

    solucao:
      "Os resultados da API são filtrados conforme o usuário digita, com debounce para evitar excesso de requisições e os jogos favoritados são salvos via localStorage, então o usuário mantém sua lista mesmo sem criar conta, e ela persiste entre sessões no mesmo navegador. ",
    website: "https://gamescope-zeta.vercel.app/",
    github: "https://github.com/caadu999/gamescope",
  },
];
