export type Pages = Array<{
  label: string;
  link?: string;
  subLinks?: Array<{ label: string; link: string }>;
}>;

export const PAGES: Pages = [
  {
    label: "CHI SIAMO",
    subLinks: [
      { label: "La Nassa", link: "/la-nassa" },
      { label: "Il Sextival", link: "/il-sextival" },
      { label: "Edizione 2022", link: "/edizioni/2022" },
    ],
  },
  {
    label: "EDIZIONE 2023",
    subLinks: [
      { label: "Dove Trovarci", link: "/edizioni/2023/dove-trovarci" },
      { label: "Il Programma", link: "/edizioni/2023/programma" },
      { label: "Lə Ospitə", link: "/edizioni/2023/ospiti" },
    ],
  },
  {
    label: "CASSETTA DEGLI ATTREZZI",
    subLinks: [
      { label: "La Cassetta", link: "/cassetta/la-cassetta" },
      { label: "Informazioni utili", link: "/cassetta/informazioni" },
      { label: "Servizi", link: "/cassetta/servizi" },
      {
        label: "Questionario",
        link: "/cassetta/questionario-2023",
      },
      // { label: "Glossario", link: "/cassetta/glossario" },
    ],
  },

  { label: "SOSTIENI", link: "/sostieni" },
];
