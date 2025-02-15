// Components
import Link from "next/link";
import { Whiteboard } from "@/components/Molecules/Whiteboard";
import Image from "next/image";

// CSS
import styles from "./styles.module.css";

// Images
import globeIcon from "@/img/icon/globe.png";

// Typescript
import { CardContent, ContentCardProps } from "./type";
import { Time } from "@/components/Molecules/Time";

export const ContentCard = ({ contentData }: ContentCardProps) => {
  return (
    <>
      {contentData.whiteboard && (
        <Whiteboard
          title={contentData.whiteboard.title}
          subtitle={contentData.whiteboard.subtitle}
          descriptions={contentData.whiteboard.descriptions}
          subDescription={contentData.whiteboard.subDescription}
        />
      )}
      <div className="line-break">
        {contentData.contents.map((content, contentIndex) => (
          <div key={contentIndex} className="line-break">
            {/* Render Card if cardLabel exists */}
            {content.headerLabel && (
              <div className="">
                <p className="font-bold">{content.headerLabel}</p>
              </div>
            )}
            {/* Render CardContents */}
            {content.cardContents?.map((cardContent, cardContentIndex) => (
              <CardContentRenderer
                key={cardContentIndex}
                cardContent={cardContent}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

const CardContentRenderer = ({ cardContent }: { cardContent: CardContent }) => {
  return (
    <div className="card-border-shadow">
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
      {cardContent.contents.map((content, contentIndex) => {
        return (
          <div
            key={contentIndex}
            className={`flex-col-4px ${styles["card-description-content"]}`}
          >
            {/* Content */}
            {content.content && (
              <p dangerouslySetInnerHTML={{ __html: content.content }} />
            )}
            {content.applyHr && <hr className={styles["hr"]} />}

            {content.links?.map((link, linkIndex) => (
              <div key={linkIndex} className={styles["grid-icon-text"]}>
                {link.link && (
                  <Link href={link.link}>
                    <p>
                      {content.showIndex ? `${linkIndex + 1}. ` : ""}
                      {link.linkLabel}
                    </p>
                  </Link>
                )}
              </div>
            ))}

            {/* Globe Image / Globe Link */}
            {content.globeLink && content.globeLabel && (
              <div className={styles["grid-icon-globe"]}>
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
              <div className={styles["flex-checkbox"]}>
                <input type="checkbox" className={styles["checkbox-mt"]} />
                <Link href={content.checkboxLink}>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: content.checkboxLabel,
                    }}
                  />
                </Link>
                {content.time && <Time time={content.time} />}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
