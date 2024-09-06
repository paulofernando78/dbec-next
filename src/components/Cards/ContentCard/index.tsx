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
  textColor: string;
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
          {/* Main label */}
          {content.mainLabel && (
            <BoardCard
              label={content.mainLabel}
              bgColor="black"
              textColor="white"
            >
              {/* Subcontent */}
              {content.subContents.map((subContent, subContentIndex) => (
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
                        <p
                          dangerouslySetInnerHTML={{ __html: content.content }}
                        />
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

                      {/* Course */}
                      {content.courseImg &&
                        content.courseLink &&
                        content.courseLabel && (
                          <div className={` ${styles["flex-8px"]}`}>
                            <Image
                              src={content.courseImg}
                              alt="Course icon"
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
              ))}
            </BoardCard>
          )}
        </div>
      ))}
    </div>
  );
};

