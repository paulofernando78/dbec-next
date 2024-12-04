// Imports
import Link from "next/link";
import Image from "next/image";

// CSS
import styles from "./styles.module.css";

// Images
import globeIcon from "@/img/icon/globe.png";
import { Card } from "../Card";

interface Content {
  content?: string;
  link?: string;
  linkLabel?: string;
  checkboxLink?: string;
  checkboxLabelLink?: string;
  globeLink?: string;
  globeLabel?: string;
}

interface SubDescription {
  bgColor: string;
  textColor: string;
  label: string;
  contents: Content[];
}

interface Description {
  mainLabel?: string;
  subDescriptions: SubDescription[];
}

interface DescriptionCardProps {
  descriptions: Description[];
}

export const DescriptionCard = ({ descriptions }: DescriptionCardProps) => {
  return (
    <div className="line-break">
      {descriptions.map((description, descIndex) => (
        <div key={descIndex} className="line-break">
          {/* Main label */}
          {description.mainLabel && (
              <p className="bold">{description.mainLabel}</p>
          )}

          {description.subDescriptions.map(
            (subdescription, subdescriptionIndex) => (
              <div
                key={subdescriptionIndex}
                className={styles["card-description"]}
              >
                {/* Label */}
                <p
                  className={`bold ${styles["card-description-label"]}`}
                  style={{
                    backgroundColor: subdescription.bgColor,
                    color: subdescription.textColor,
                  }}
                >
                  {subdescription.label}
                </p>
                {subdescription.contents.map((content, contentIndex) => (
                  <div
                    key={contentIndex}
                    className={`flex-col-4px ${styles["card-description-content"]}`}
                  >
                    {/* Content */}
                    {content.content && <p>{content.content}</p>}

                    {/* Link / Label Link */}
                    {content.link && content.linkLabel && (
                      <div>
                        {/* <Image
                          src={linkIcon}
                          alt="Link icon"
                          className={`icon-general ${styles["link-icon"]}`}
                        />{" "} */}
                        <Link href={content.link}>
                          <p className={`display-inline ${styles["link-label-position"]}`}>
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
                      <div className="flex-8px">
                        <input
                          type="checkbox"
                          style={{ position: "relative", bottom: ".6px" }}
                        />
                        <Link href={content.checkboxLink}>
                          <p>{content.checkboxLabelLink}</p>
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      ))}
    </div>
  );
};
