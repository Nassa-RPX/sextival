import { Event } from "./event.component";
import { TimelineColors, TimelineData } from "./types";

interface TimelineProps {
  data: TimelineData;
  colors: TimelineColors;
}

const Timeline = ({ data, colors }: TimelineProps) => {
  return (
    <div className="relative px-4">
      <div
        className={`relative px-4 space-y-6 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:${colors.line}`}
      >
        {data.map((d, i) => (
          <Event key={i} data={d} colors={colors} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
