interface SpacerProps {
  type: "y" | "x" | "full";
  dimension: "sm" | "md" | "bg";
}

const Spacer = ({ type, dimension }: SpacerProps) => {
  const d = dimension === "sm" ? "2" : dimension === "md" ? "4" : "6";
  const t = type === "y" ? "py" : type === "x" ? "px" : "p";

  return <div className={`${t}-${d}`} />;
};

export default Spacer;
