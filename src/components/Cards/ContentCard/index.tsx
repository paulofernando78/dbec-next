// Imports
import Link from "next/link";
import Image from "next/image";
import { Card } from "../Card";
import { ContentCardProps, CardContent } from "@/types/contentCard"

// CSS
import styles from "./styles.module.css";

// Images
import globeIcon from "@/img/icon/globe.png";

export const ContentCard = ({ contents }: ContentCardProps) => {
  return (
    <div className="line-break">
      {contents.map((content, contentIndex) => (
        <div key={contentIndex} className="line-break">
          {/* Render Card if cardLabel exists */}
          {content.headerLabel && (
            <Card bgColor="black" textColor="white">
              <p className="bold">{content.headerLabel}</p>
            </Card>
          )}
          {/* Render CardContents */}
          {content.cardContents.map((cardContent, cardContentIndex) => (
            <CardContentRenderer
              key={cardContentIndex}
              cardContent={cardContent}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

const CardContentRenderer = ({ cardContent }: { cardContent: CardContent }) => {
  return (
    <div className={styles["card-description"]}>
      {/* Label */}
      {cardContent.cardLabel && (
        <p
          className={`bold ${styles["card-description-label"]}`}
          style={{
            backgroundColor: cardContent.bgColor,
            color: cardContent.textColor,
          }}
        >
          {cardContent.cardLabel}
        </p>
      )}
      {cardContent.contents.map((content, contentIndex) => (
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
              <input type="checkbox" className={styles["checkbox-size"]} />
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
