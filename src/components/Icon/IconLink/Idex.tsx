import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface IconLinkProps {
imgSrc: StaticImageData
link: string;
prompt: string;
}

export const IconLink = ({ imgSrc, link, prompt }: IconLinkProps) => {
  return (
    <>
      <div className="line-break">
        <div className="flex-8px-center-wrap">
          <Image src={imgSrc} alt="Icon" className="icon-general" />
          <Link href={link}>
            <p>{prompt}</p>
          </Link>
        </div>
      </div>
    </>
  );
};
