import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ContentProps {
  img: string;
  url: string;
  layoutId: string;
  text: string;
}

export const Content = ({ img, layoutId, url, text }: ContentProps) => {
  const [loadedImage, setLoadedImage] = useState<boolean>(false);

  return (
    <Link href={url}>
      <div className="flex items-center justify-center relative shadow-md cursor-pointer bg-red-300 rounded-xl">
        <ContentImg
          img={img}
          text={text}
          loaded={loadedImage}
          layoutId={layoutId}
          setLoaded={() => setLoadedImage(true)}
        />

        <h1 className="absolute text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
          {text}
        </h1>
      </div>
    </Link>
  );
};

interface ContentImgProps {
  img: string;
  text: string;
  layoutId: string;
  loaded: boolean;
  setLoaded: () => void;
}

const ContentImg = ({
  img,
  text,
  layoutId,
  loaded,
  setLoaded,
}: ContentImgProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: loaded ? 1 : 0 }}
      layoutId={`about-animation-${layoutId}`}
    >
      <Image
        src={img}
        alt={text}
        layout="fill"
        objectFit="cover"
        className="rounded-xl"
        onLoadingComplete={setLoaded}
      />
    </motion.div>
  );
};
