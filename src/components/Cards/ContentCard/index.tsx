// Imports
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

// CSS
import styles from "./styles.module.css";

// Images
import linkIcon from "@/img/icon/link.png";
import globeIcon from "@/img/icon/globe.png";
import { Card } from "../Card";

interface Content {
  content?: string;
  applyHr?: boolean
  link?: string;
  linkLabel?: string;
  checkboxLink?: string;
  checkboxLabelLink?: string;
  globeLink?: string;
  globeLabel?: string;
  courseImg?: StaticImageData;
  courseLink?: string;
  courseLabel?: string;
}

interface SubContent {
  // applyBeginnerBorder?: boolean;
  // applyElementaryBorder?: boolean;
  // applyPreIntermediateBorder?: boolean;
  // applyIntermediateBorder?: boolean;
  bgColor: string;
  textColor: string;
  label: string;
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
          {/* Main label */}
          {content.mainLabel && (
            <Card bgColor="black" textColor="white">
              <p className="bold">{content.mainLabel}</p>
            </Card>
          )}

          {content.subContents.map((subContent, subContentIndex) => {
            // let borderClass = "";
            // if (subContent.applyBeginnerBorder) borderClass = styles["beginner-border"];
            // else if (subContent.applyElementaryBorder) borderClass = styles["elementary-border"];
            // else if (subContent.applyPreIntermediateBorder) borderClass = styles["pre-intermediate-border"];
            // else if (subContent.applyIntermediateBorder) borderClass = styles["intermediate-border"];

            return (
              <div
                key={subContentIndex}
                className={`${styles["card-description"]}`}
              >
                {/* Label */}
                <p
                  className={`bold ${styles["card-description-label"]}`}
                  style={{
                    backgroundColor: subContent.bgColor,
                    color: subContent.textColor,
                  }}
                >
                  {subContent.label}
                </p>
                {subContent.contents.map((content, contentIndex) => (
                  <div
                    key={contentIndex}
                    className={`flex-col-4px ${styles["card-description-content"]}`}
                  >
                    {/* Content */}
                    {content.content && (
                      <p className={styles["content-line-height"]}>
                        {content.content}
                      </p>
                    )}
                    {content.applyHr && <hr className={styles["hr"]}/>}
                    {/* Link / Label Link */}
                    {content.link && content.linkLabel && (
                      <div>
                        <Image
                          src={linkIcon}
                          alt="Link icon"
                          className={`icon-general ${styles["link-icon"]}`}
                        />{" "}
                        <Link href={content.link}>
                          <p
                            className={`display-inline ${styles["link-label-position"]}`}
                          >
                            {content.linkLabel}
                          </p>
                        </Link>
                      </div>
                    )}
                    {/* Globe Image / Globe Link */}
                    {content.globeLink && content.globeLabel && (
                      <div className="flex-8px-center-wrap">
                        <Image
                          src={globeIcon}
                          alt="Globe icon"
                          className={`icon-general ${styles["globe-icon"]}`}
                        />
                        <Link
                          href={content.globeLink}
                          className={styles["globe-link"]}
                        >
                          <p>{content.globeLabel}</p>
                        </Link>
                      </div>
                    )}
                    {/* Checkbox Link / Checkbox Label Link */}
                    {content.checkboxLink && content.checkboxLabelLink && (
                      <div className="flex-8px-start">
                        <input
                          type="checkbox"
                          style={{ position: "relative", bottom: ".6px" }}
                        />
                        <Link href={content.checkboxLink}>
                          <p>{content.checkboxLabelLink}</p>
                        </Link>
                      </div>
                    )}
                    {/* Course */}
                    {content.courseImg &&
                      content.courseLink &&
                      content.courseLabel && (
                        <div
                          className={`flex-8px ${styles[""]}`}
                        >
                          <Image
                            src={content.courseImg}
                            alt="Globe icon"
                            className={`icon-general ${styles["book-icon"]}`}
                          />
                          <Link href={content.courseLink}>
                            <p className={styles["link-label-position"]}>
                              {content.courseLabel}
                            </p>
                          </Link>
                        </div>
                      )}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};
