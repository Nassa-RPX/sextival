interface SpacerProps {
  type: "vertical" | "horizontal" | "full";
  dimension: "small" | "medium" | "big";
}

const Spacer = ({ type, dimension }: SpacerProps) => {
  const d = dimension === "small" ? "2" : dimension === "medium" ? "4" : "6";
  const t = type === "vertical" ? "py" : type === "horizontal" ? "px" : "p";

  return <span className={`${t}-${d}`} />;
};

export default Spacer;
