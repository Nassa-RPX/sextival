import { motion } from "framer-motion";

import { Panel } from "../base";
import { Content } from "./content.component";

const ContentData = [
  { id: 0, img: "/content/home-nassa.png", text: "La Nassa", url: "/la-nassa" },
  {
    id: 1,
    img: "/content/home-sextival.png",
    text: "Il Sextival",
    url: "/il-sextival",
  },
  {
    id: 2,
    img: "/content/home-guest.png",
    text: "Lə Ospitə",
    url: "/le-ospiti",
  },
];

const About = () => {
  return (
    <Panel>
      <motion.div
        className="flex-1 grid gap-6 grid-cols-1 grid-row-4 lg:grid-cols-2 lg:grid-row-2 mb-8"
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        {ContentData.map((c) => (
          <Content key={c.id} img={c.img} text={c.text} url={c.url} />
        ))}
      </motion.div>
    </Panel>
  );
};

export default About;
