import React, { useState } from "react";

import {
  motion,
  MotionValue,
  PanInfo,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { TEAM } from "@sextival/data";
import { Axis, Points } from "@sextival/types";

interface Card {
  name: string;
  img?: string;
  background?: string;
}

interface Style extends Partial<Points<MotionValue<number>>> {
  zIndex: number;
  scale?: MotionValue<number>;
  boxShadow?: MotionValue<string>;
}

interface Props {
  card: Card;
  style: Style;
  onDirectionLock?: (axis: Axis) => void;
  onDragEnd?: (e: MouseEvent, info: PanInfo) => void;
  animate?: Points<number>;
}

const Card = (
  { card, style, onDirectionLock, onDragEnd, animate }: Props,
) => (
  <motion.div
    className="absolute left-0 bottom-0 right-0 top-0 text-white font-bold text-4xl bg-black grid place-items-center"
    drag
    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
    dragDirectionLock
    onDirectionLock={onDirectionLock}
    onDragEnd={onDragEnd}
    animate={animate}
    style={{ ...style, background: card.background || "white" }}
    transition={{ ease: [.6, .05, -.01, .9] }}
    whileTap={{ scale: .85 }}
  >
    <p>{card.name}</p>
  </motion.div>
);

export const TeamCards = () => {
  const [cards, setCards] = useState(
    TEAM,
  );

  const [dragStart, setDragStart] = useState<
    { axis: null | "x" | "y"; animation: { x: number; y: number } }
  >({
    axis: null,

    animation: { x: 0, y: 0 },
  });

  const x = useMotionValue(0);

  const y = useMotionValue(0);

  const scale = useTransform(dragStart.axis === "x" ? x : y, [-175, 0, 175], [
    1,
    .5,
    1,
  ]);

  const shadowBlur = useTransform(dragStart.axis === "x" ? x : y, [
    -175,
    0,
    175,
  ], [0, 25, 0]);

  const shadowOpacity = useTransform(dragStart.axis === "x" ? x : y, [
    -175,
    0,
    175,
  ], [0, .2, 0]);

  const boxShadow =
    useMotionTemplate`0 ${shadowBlur}px 25px -5px rgba(0, 0, 0, ${shadowOpacity})`;

  const onDirectionLock = (axis: null | "x" | "y") =>
    setDragStart({ ...dragStart, axis: axis });

  const animateCardSwipe = (animation: { x: number; y: number }) => {
    setDragStart({ ...dragStart, animation });

    setTimeout(() => {
      const cardsMod = [...cards];
      const removedCard = cardsMod.pop();

      setDragStart({ axis: null, animation: { x: 0, y: 0 } });

      x.set(0);
      y.set(0);

      setCards([
        removedCard!,
        ...cards.slice(0, cards.length - 1),
      ]);
    }, 400);
  };

  const onDragEnd = (info: PanInfo) => {
    if (dragStart.axis === "x") {
      if (info.offset.x >= 100) {
        animateCardSwipe({ x: 275, y: 0 });
      } else if (info.offset.x <= -100) {
        animateCardSwipe({ x: -275, y: 0 });
      }
    } else {
      if (info.offset.y >= 100) {
        animateCardSwipe({ x: 0, y: 375 });
      } else if (info.offset.y <= -100) {
        animateCardSwipe({ x: 0, y: -375 });
      }
    }
  };

  const renderCards = () => {
    return cards.map((card, index) => {
      if (index === cards.length - 1) {
        return (
          <Card
            card={card}
            key={index}
            style={{ x, y, zIndex: index }}
            onDirectionLock={(axis: null | "y" | "x") => onDirectionLock(axis)}
            onDragEnd={(e: MouseEvent, info: PanInfo) => onDragEnd(info)}
            animate={dragStart.animation}
          />
        );
      } else {return (
          <Card
            card={card}
            key={index}
            style={{
              scale,
              boxShadow,
              zIndex: index,
            }}
          />
        );}
    });
  };

  return (
    <div className="h-[600px] w-[300px] bg-red-600 overflow-hidden grid place-items-center">
      <div className="w-3/4 h-3/4 bg-green-600 relative grid place-items-stretch">
        {renderCards()}
      </div>
    </div>
  );
};
