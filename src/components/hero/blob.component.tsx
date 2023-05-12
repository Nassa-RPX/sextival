import { motion } from "framer-motion";
import Image from "next/image";

export const Blob = () => (
  <motion.div
    initial={{ x: 400, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
  >
    <Image
      alt="blob"
      src="https://pub-017f84a06d12468b8456a49acac6a458.r2.dev/blob.png"
      width={530}
      height={475}
      loading="eager"
    />
  </motion.div>
);
