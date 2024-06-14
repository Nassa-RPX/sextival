export type Pages = Array<{
  label: string;
  link?: string;
  subLinks?: Array<{ label: string; link: string }>;
}>;

export const PAGES: { main: Pages; other: Pages } = {
  main: [
    { label: "HOME", link: "/" },
    {
      label: "IL SEXTIVAL",
      link: "/il-sextival",
    },

    {
      label: "PROGRAMMA",
      link: "/edizioni/2024/programma",
    },

    { label: "OSPITI", link: "/edizioni/2024/ospiti" },
    { label: "COME TROVARCI", link: "/edizioni/dove-trovarci" },
  ],
  other: [
    {
      label: "EDIZIONI PASSATE",
      subLinks: [
        { label: "Edizione 2022", link: "/edizioni/2022" },
        { label: "Edizione 2023", link: "/edizioni/2023" },
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
      ],
    },

    { label: "SOSTIENI", link: "/sostieni" },
  ],
};
