import localFont from "next/font/local";

export const montserrat = localFont({
  src: [
    {
      path: "./Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Montserrat-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-montserrat",
});