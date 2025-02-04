import localFont from "next/font/local";

export const montserrat = localFont({
  src: [
    {
      path: "./montserrat/static/Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./montserrat/static/Montserrat-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./montserrat/static/Montserrat-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-montserrat",
});