import { AnimatedElement as Teammate } from "@sextival/types";

const getImgPath = (name: string) => `/team/${name.toLowerCase()}.png`;

export const TEAM: Array<Teammate> = [
  { name: "Alice", img: getImgPath("Alice") },
  { name: "Edoardo", img: getImgPath("Edoardo") },
  { name: "Riccardo", img: getImgPath("Riccardo") },
  { name: "Chiara", img: getImgPath("Chiara") },
  { name: "Luca", img: getImgPath("Luca") },
  { name: "Camilla", img: getImgPath("Camilla") },
  { name: "Frilli", img: getImgPath("Frilli") },
  { name: "Cecilia", img: getImgPath("Cecilia") },
];
