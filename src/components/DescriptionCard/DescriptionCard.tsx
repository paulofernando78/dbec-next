// Imports
import Link from "next/link";
import Image from "next/image";

// CSS
import styles from "./DescriptionCard.module.css";

// Images
import globeIcon from "@/img/icon/globe.png";

interface DescriptionCardProps {
  descriptions: Description[];
}

interface Description {
  label: string;
  contents: Content[];
}

interface Content {
  content?: string;
  link?: string;
  linkLabel?: string;
  checkboxLink?: string;
  checkboxLabelLink?: string;
  globeLink?: string;
  globeLabel?: string;
}

export const DescriptionCard = ({ descriptions }: DescriptionCardProps) => {
  return (
    <div className="line-break">
      {descriptions.map((description, descIndex) => (
        <div key={descIndex} className={styles["card-description"]}>
          <div className={styles["card-description-label"]}>
            {/* Label */}
            <p className="bold">{description.label}</p>
          </div>

          {description.contents.map((content, contentIndex) => (
            <div
              key={contentIndex}
              className={`flex-col-4px ${styles["card-description-content"]}`}
            >
              {/* Content */}
              {content.content && <p>{content.content}</p>}

              {/* Link / Label Link */}
              {content.link && content.linkLabel && (
                <div>
                  <div>
                    <Link href={content.link}>
                      <p className={styles["link-label-position"]}>{content.linkLabel}</p>
                    </Link>
                  </div>
                </div>
              )}

              {/* Globe Image / Globe Link */}
              {content.globeLink && content.globeLabel && (
                <div className="flex-8px-center">
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
                  <input type="checkbox" style={{position: "relative", bottom: ".6px"}}/>
                  <Link href={content.checkboxLink}>
                    <p>{content.checkboxLabelLink}</p>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
