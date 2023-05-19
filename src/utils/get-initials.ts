export const getInitials = (name: string | undefined) => {
  if (!name) return "SX";
  let initials = "";
  const nl = name.split(" ");

  if (nl.length > 1) {
    const i1 = nl[0]![0]!.toUpperCase();
    const i2 = nl[1]![0]!.toUpperCase();
    initials = i1 + i2;
  } else {
    initials = name[0]!.toUpperCase() + name[1]!.toUpperCase();
  }

  return initials;
};
