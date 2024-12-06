import Image from "next/image";

import { CustomImageProps } from "./type";

export const CustomImage = ({ customImg, customImgAlt }: CustomImageProps) => {
  const baseImgScr = "/assets/img"
  return (
    <Image
      className="img-border"
      src={`${baseImgScr}${customImg}`}
      alt={customImgAlt}
      width={1000}
      height={1000}
    />
  );
};
