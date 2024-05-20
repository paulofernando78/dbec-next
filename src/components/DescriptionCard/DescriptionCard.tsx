import Link from "next/link";
import style from "./DescriptionCard.module.css";

interface DescriptionCardProps {
descriptions: Description[];
}

interface Description {
  label: string
  contents: Content[]
}

interface Content {
  content: string;
  link?: string;
  linkLabel?: string
}

export const DescriptionCard = ({ descriptions
}: DescriptionCardProps) => {
  return (
    <>
    {descriptions.map((description, descIndex) => (
      <div key={descIndex} className={style["card-description"]}>
        <div className={style["card-description-label"]}>
          <p>{description.label}</p>
        </div>

{description.contents.map((content, contentIndex) => (
  <div key={contentIndex} className={style["card-description-content"]}>
    <p>{content.content}</p>
    {content.link && content.linkLabel && (
    <Link href={content.link}><p>{content.linkLabel}</p></Link>
    )}
  </div>
))}
</div>
    ))}
    </>
  );
};
