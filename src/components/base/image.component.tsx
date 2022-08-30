import NextImage, { ImageProps } from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const Image = (props: ImageProps) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <motion.div
      variants={{
        initial: { opacity: 0, scale: 0.8 },
        loaded: { opacity: 1, scale: 1 },
      }}
      initial="initial"
      animate={loaded ? "loaded" : "initial"}
      className="relative"
    >
      <NextImage {...props} onLoadingComplete={() => setLoaded(true)} />
    </motion.div>
  );
};

export default Image;
