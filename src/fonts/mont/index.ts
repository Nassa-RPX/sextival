import localFont from "next/font/local";

export const Mont = localFont({
  src: [
    {
      path: "./Mont-Hairline.ttf",
      weight: "50",
    },
    { path: "./Mont-Thin.ttf", weight: "100" },
    { path: "./Mont-ExtraLight.ttf", weight: "200" },
    { path: "./Mont-Light.ttf", weight: "300" },
    { path: "./Mont-Book.ttf", weight: "400" },
    { path: "./Mont-Regular.ttf", weight: "500" },
    { path: "./Mont-SemiBold.ttf", weight: "600" },
    { path: "./Mont-Bold.ttf", weight: "700" },
    { path: "./Mont-Heavy.ttf", weight: "800" },
    { path: "./Mont-Black.ttf", weight: "900" },
  ],
  variable: "--font-mont",
});
