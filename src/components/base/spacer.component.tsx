interface SpacerProps {
  type?: "y" | "x" | "full";
  dimension?: "sm" | "md" | "bg";
}

const Spacer = ({ type, dimension }: SpacerProps) => {
  if (type === "y" && dimension === "sm") return <span className="py-2" />;
  if (type === "y" && dimension === "md") return <span className="py-4" />;
  if (type === "y" && dimension === "bg") return <span className="py-8" />;

  if (type === "x" && dimension === "sm") return <span className="py-2" />;
  if (type === "x" && dimension === "md") return <span className="px-4" />;
  if (type === "x" && dimension === "bg") return <span className="px-8" />;

  if (type === "full" && dimension === "sm") return <span className="p-2" />;
  if (type === "full" && dimension === "md") return <span className="p-4" />;
  if (type === "full" && dimension === "bg") return <span className="p-8" />;

  // this only because otherwise the Typescript linter complains
  // that the return value may be undefined since all the returns are behind if statements
  return <span />;
};

export default Spacer;
