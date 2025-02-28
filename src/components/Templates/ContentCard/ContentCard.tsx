// Components
import Link from "next/link";
import { Whiteboard } from "@/components/Molecules/Whiteboard/Whiteboard";
import Image from "next/image";

// CSS
import styles from "./ContentCard.module.css";

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

            {content.links?.map((link, index) => (
              <div key={index} className={styles["grid-icon-text"]}>
                {/* link / linkLabel */}
                {link.link && (
                  <Link href={link.link}>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: content.showIndex
                          ? `${index + 1}. ${link.linkLabel}`
                          : link.linkLabel,
                      }}
                    />
                  </Link>
                )}

                {/* globeLink / globeLabel */}
                {link.globeLink && (
                  <div className={styles["grid-icon-globe"]}>
                    <Image
                      src={globeIcon}
                      alt="Globe icon"
                      className={`icon-general ${styles["globe-icon"]}`}
                    />
                    <Link href={link.globeLink}>
                      <p>
                        {content.showIndex ? `${index + 1}. ` : ""}
                        {link.checkboxLabel}
                      </p>
                    </Link>
                  </div>
                )}
                {/* checkboxLink / checkboxLabel */}
                {link.checkboxLink && link.checkboxLabel && (
                  <div className={styles["flex-checkbox"]}>
                    <input type="checkbox" className={styles["checkbox-mt"]} />
                    <Link href={link.checkboxLink}>
                      <p>
                        {content.showIndex ? `${index + 1}. ` : ""}
                        {link.checkboxLabel}
                      </p>
                    </Link>
                    {link.time && <Time time={link.time} />}
                  </div>
                )}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};
