import { motion } from "framer-motion";

export const Blob = () => (
  <motion.img
    src="/blob.png"
    width={530}
    height={475}
    initial={{ x: 400, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
  />
);
