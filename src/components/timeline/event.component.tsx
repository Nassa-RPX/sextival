import { TimelineColors, TimelineEvent } from "./types";

interface EventProps {
  data: TimelineEvent;
  colors: TimelineColors;
}

export const Event = ({ data, colors }: EventProps) => (
  <div
    className={`flex flex-col relative before:absolute before:content['1'] before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:${colors.point}`}
  >
    <h3 className={`text-xl font-semibold tracking-wide ${colors.title}`}>
      {data.title}
    </h3>
    <time className="text-xs tracking-wide uppercase">{data.time}</time>
    {data.description && <p className="mt-3">{data.description}</p>}
  </div>
);
