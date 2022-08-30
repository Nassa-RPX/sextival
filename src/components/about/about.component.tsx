import Image from "next/image";
import { Panel } from "../base";

const AboutContent = [
  { id: 0, img: "/content/home-nassa.png", text: "La Nassa" },
  { id: 1, img: "/content/home-sextival.png", text: "Il Sextival" },
  { id: 2, img: "/content/home-ospiti.png", text: "Lə Ospitə" },
];

const About = () => {
  return (
    <Panel>
      <div className="flex-1 grid gap-6 grid-cols-1 grid-row-4 lg:grid-cols-2 lg:grid-row-2 mb-8">
        {AboutContent.map((c) => (
          <GridElement key={c.id} img={c.img} text={c.text} />
        ))}
      </div>
    </Panel>
  );
};

const GridElement = ({ img, text }: { img: string; text: string }) => (
  <div className="flex items-center justify-center relative shadow-md cursor-pointer">
    <Image
      src={img}
      alt={text}
      layout="fill"
      objectFit="cover"
      className="rounded-lg"
    />

    <h1 className="absolute text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
      {text}
    </h1>
  </div>
);

export default About;
