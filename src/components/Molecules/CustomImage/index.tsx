import Image from "next/image";

import { CustomImageProps } from "./type";

export const CustomImage = ({ customImg, customImgAlt }: CustomImageProps) => {
  return (
    <Image
      className="img-border"
      src={customImg}
      alt={customImgAlt}
      width={1000}
      height={1000}
    />
  );
};
