// Imports
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

// CSS
import styles from "./styles.module.css";

// Images
import globeIcon from "@/img/icon/globe.png";
import { BoardCard } from "../BoardCard";

interface Content {
  content?: string;
  applyHr?: boolean;
  link?: string;
  linkLabel?: string;
  checkboxLink?: string;
  checkboxLabel?: string;
  globeLink?: string;
  globeLabel?: string;
  courseImg?: StaticImageData;
  courseLink?: string;
  courseLabel?: string;
}

interface SubContent {
  bgColor: string;
  textColor?: string;
  label?: string;
  contents: Content[];
}

interface MainContent {
  mainLabel?: string;
  subContents: SubContent[];
}

interface ContentCardProps {
  contents: MainContent[];
}

export const ContentCard = ({ contents }: ContentCardProps) => {
  return (
    <div className="line-break">
      {contents.map((content, contentIndex) => (
        <div key={contentIndex} className="line-break">
          {/* Se o mainLabel existir, renderiza o conteúdo dentro de BoardCard */}
          {content.mainLabel ? (
            <BoardCard
              label={content.mainLabel}
              bgColor="black"
              textColor="white"
            >
              {content.subContents.map((subContent, subContentIndex) => (
                <SubContentRenderer
                  key={subContentIndex}
                  subContent={subContent}
                />
              ))}
            </BoardCard>
          ) : (
            /* Se não houver mainLabel, renderiza os subContents diretamente */
            content.subContents.map((subContent, subContentIndex) => (
              <SubContentRenderer
                key={subContentIndex}
                subContent={subContent}
              />
            ))
          )}
        </div>
      ))}
    </div>
  );
};

const SubContentRenderer = ({ subContent }: { subContent: SubContent }) => {
  return (
    <div className={`${styles["card-description"]}`}>
      {/* Label */}
      {subContent.label && (
        <p
          className={`bold ${styles["card-description-label"]}`}
          style={{
            backgroundColor: subContent.bgColor,
            color: subContent.textColor,
          }}
        >
          {subContent.label}
        </p>
      )}
      {subContent.contents.map((content, contentIndex) => (
        <div
          key={contentIndex}
          className={`flex-col-4px ${styles["card-description-content"]}`}
        >
          {/* Content */}
          {content.content && (
            <p dangerouslySetInnerHTML={{ __html: content.content }} />
          )}
          {content.applyHr && <hr className={styles["hr"]} />}

          {/* Link / Label Link */}
          {content.link && content.linkLabel && (
            <div className={styles["grid-icon-text"]}>
              <Link href={content.link}>
                <p>{content.linkLabel}</p>
              </Link>
            </div>
          )}

          {/* Globe Image / Globe Link */}
          {content.globeLink && content.globeLabel && (
            <div className={styles["grid-icon-text"]}>
              <Image
                src={globeIcon}
                alt="Globe icon"
                className={`icon-general ${styles["globe-icon"]}`}
              />
              <Link href={content.globeLink}>
                <p>{content.globeLabel}</p>
              </Link>
            </div>
          )}

          {/* Checkbox Link / Checkbox Label Link */}
          {content.checkboxLink && content.checkboxLabel && (
            <div className={styles["grid-checkbox-text"]}>
              <input
                type="checkbox"
                className={styles["checkbox-size"]}
              />
              <Link href={content.checkboxLink}>
                <p
                  dangerouslySetInnerHTML={{
                    __html: content.checkboxLabel,
                  }}
                />
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};


