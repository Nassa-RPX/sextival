import { AnimatedElement as Teammate } from "@sextival/types";

const getImgPath = (name: string) => `/team/${name.toLowerCase()}.png`;

export const TEAM: Array<Teammate> = [
  { name: "Alice Canevello", img: getImgPath("Alice") },
  { name: "Edoardo Andreoli", img: getImgPath("Edoardo") },
  { name: "Riccardo Castelnuovo Fustinoni", img: getImgPath("Riccardo") },
  { name: "Chiara Pellegrini", img: getImgPath("Chiara") },
  { name: "Luca Brindani", img: getImgPath("Luca") },
  { name: "Camilla Demartini", img: getImgPath("Camilla") },
  { name: "Francesca Giudice", img: getImgPath("Frilli") },
  { name: "Cecilia Chiappari", img: getImgPath("Cecilia") },
];
