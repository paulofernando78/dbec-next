import Image, { StaticImageData } from "next/image";

interface carouselProps {
    imgSrc: StaticImageData
    imgAlt: string
}

export default function Carousel({imgSrc, imgAlt}: carouselProps) {
  return (
    <div>
      <div>
        <Image src={imgSrc} alt={imgAlt}/>
      </div>
    </div>
  );
}
