export const toTitleCase = (str: string) =>
  str.replace(
    /(^\w|\s\w)(\S*)/g,
    (_: string, m1: string, m2: string) => m1.toUpperCase() + m2.toLowerCase(),
  );
