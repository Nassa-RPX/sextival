import { useCallback, useMemo, useState } from "react";
import {
  PanInfo,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";

import { AnimatedElement, Axis, DefaultProps, Points } from "@sextival/types";
import { Card } from "./card.component";
import clsx from "clsx";
import { useMediaQuery } from "@sextival/hooks";

type Cards = Array<AnimatedElement>;

interface Props extends DefaultProps {
  cards: Cards;
  hover: boolean;
}

export const InfiniteCards = (props: Props) => {
  const [cards, setCards] = useState<Cards>(props.cards);

  const isDesktop = useMediaQuery("lg");

  const [dragStart, setDragStart] = useState<
    { axis: Axis; animation: Points<number> }
  >({
    axis: null,
    animation: { x: 0, y: 0 },
  });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const isX = useCallback((axis: Axis) => axis === "x", []);
  const range = useMemo(() => [-175, 0, 175], []);

  const scale = useTransform(isX(dragStart.axis) ? x : y, range, [
    1,
    .5,
    1,
  ]);

  const shadowBlur = useTransform(isX(dragStart.axis) ? x : y, range, [
    0,
    25,
    0,
  ]);

  const shadowOpacity = useTransform(isX(dragStart.axis) ? x : y, range, [
    0,
    .2,
    0,
  ]);

  const boxShadow =
    useMotionTemplate`0 ${shadowBlur}px 25px -5px rgba(159, 82, 95, ${shadowOpacity})`;

  const onDirectionLock = (axis: Axis) =>
    setDragStart({ ...dragStart, axis: axis });

  const animateCardSwipe = (animation: Points<number>) => {
    setDragStart({ ...dragStart, animation });

    setTimeout(() => {
      setDragStart({ axis: null, animation: { x: 0, y: 0 } });

      x.set(0);
      y.set(0);

      const removedCard = [...cards].pop();
      if (removedCard) {
        const c = [removedCard, ...cards.slice(0, cards.length - 1)];
        setCards(c);
      }
    }, 400);
  };

  const onDragEnd = (info: PanInfo) => {
    const move = isDesktop ? 800 : 400;
    if (info.offset.x >= 100) {
      animateCardSwipe({ x: move, y: 0 });
    } else if (info.offset.x <= -100) {
      animateCardSwipe({ x: -move, y: 0 });
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
    <>
      {isDesktop && (
        <div
          className={clsx(
            "absolute top-0 bottom-0 left-0 right-0 z-20 flex items-center justify-center bg-sex-red-8 bg-opacity-60 font-bold text-sex-red-0 text-4xl pointer-events-none text-center leading-tight",
            props.hover &&
              "bg-opacity-0 transition-colors",
          )}
        >
          <span
            className={clsx(
              "transition-opacity",
              props.hover ? "opacity-0" : "opacity-100",
              !props.hover && "delay-75",
            )}
          >
            Swipe per conoscerci!
          </span>
        </div>
      )}
      <div className="w-full h-full bg-sex-red-4 rounded-md relative cursor-grab">
        {renderCards()}
      </div>
    </>
  );
};
