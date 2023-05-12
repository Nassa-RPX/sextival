import { motion, MotionValue, PanInfo } from "framer-motion";

import { AnimatedElement, Axis, Points } from "@sextival/types";

interface Style extends Partial<Points<MotionValue<number>>> {
  zIndex: number;
  scale?: MotionValue<number>;
  boxShadow?: MotionValue<string>;
}

interface Props {
  card: AnimatedElement;
  style: Style;
  onDirectionLock?: (axis: Axis) => void;
  onDragEnd?: (e: MouseEvent, info: PanInfo) => void;
  animate?: Points<number>;
}

export const Card = (
  { card, style, onDirectionLock, onDragEnd, animate }: Props,
) => (
  <motion.div
    className="absolute left-0 bottom-0 right-0 top-0 rounded-md text-sex-dblue text-3xl lg:text-5xl font-handwriting font-bold bg-[#fadce1] "
    drag="x"
    dragConstraints={{ left: 0, right: 0 }}
    dragDirectionLock
    onDirectionLock={onDirectionLock}
    onDragEnd={onDragEnd}
    animate={animate}
    style={{ ...style, background: "trans" }}
    transition={{ ease: [.6, .05, -.01, .9] }}
    whileTap={{ scale: .85 }}
  >
    <div className="px-8 py-4 w-full h-full max-h-[400px] flex flex-col pointer-events-none items-center gap-4 relative">
      <img
        alt={card.name}
        src={card.img}
        className="pointer-events-none object-contain h-full"
      />
      <div className="absolute w-full h-[80px] flex items-center justify-center bg-transparent rounded-b-md bottom-0">
        {card.name}
      </div>
    </div>
  </motion.div>
);
