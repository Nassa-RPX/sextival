export type Pages = Array<{
  label: string;
  link?: string;
  subLinks?: Array<{ label: string; link: string }>;
}>;

export const PAGES: Pages = [
  {
    label: "CHI SIAMO",
    subLinks: [
      { label: "Il Sextival", link: "/il-sextival" },
      { label: "Edizione 2022", link: "/edizione-2022" },
    ],
  },
  { label: "LA NASSA", link: "/la-nassa" },
  { label: "PARTNER", link: "/partner" },
];
