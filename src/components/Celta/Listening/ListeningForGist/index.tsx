import styles from "../../../Cards/BoardCard/styles.module.css";
import { AudioPlayer } from "@/components/Audioplayer";
import { Translation } from "@/components/Collapsibles/Translation/Translation";
import { Paragraph } from "../Paragraph";
import { Collapsible } from "@/components/Collapsibles/Collapsible/Collapsible";

interface EnParagraph {
  component?: (props: { audioSrc: string; label: string }) => JSX.Element;
  componentProps?: any;
  enParagraph?: string;
}

export interface ParagraphData {
  paragraphNumber?: string;
  enParagraphs?: EnParagraph[];
  ptParagraph?: string;
}

interface ListeningForGistProps {
  audioSrc: string;
  paragraphs: ParagraphData[];
  gistAnswer: string;
}

export const ListeningForGist = ({
  audioSrc,
  paragraphs,
  gistAnswer,
}: ListeningForGistProps) => {
  return (
    <div className={styles["main-card"]}>
      <div
        className={styles["card"]}
        style={{ backgroundColor: "black", color: "white" }}
      >
        <div className="flex-8px-start-space-between">
          <p>
            <span className="bold">Listening for gist</span>
          </p>
          <p className="p-size-smaller">10'</p>
        </div>
      </div>
      <div className={`line-break ${styles["children"]}`}>
        <p className={styles["label"]}>
          What is the main issue discussed in the text?
        </p>
        {/* AudioPlayer */}
        <AudioPlayer audioSrc={audioSrc} />

        {/* Paragraphs */}
        {paragraphs.map((paragraph, paragraphIndex) => (
          <div key={paragraphIndex} className="line-break">
            <Paragraph number={paragraphIndex + 1}>
              <div>
                {/* enParagraphs */}
                <div className="margin-bottom">
                  {paragraph.enParagraphs?.map(
                    (enParagraph, enParagraphIndex) => (
                      <span key={enParagraphIndex}>
                        {/* enParagraph.component */}
                        {enParagraph.component && (
                          <span className="margin-right">
                            {enParagraph.component(enParagraph.componentProps)}
                          </span>
                        )}
                        {/* enParagraph */}
                        {enParagraph.enParagraph && (
                          <p className=" margin-right">
                            {enParagraph.enParagraph}
                          </p>
                        )}
                      </span>
                    )
                  )}
                </div>

                {/* ptParagraph */}
                {paragraph.ptParagraph && (
                  <span className="margin-top">
                    <Translation>
                      <p className="portuguese">{paragraph.ptParagraph}</p>
                    </Translation>
                  </span>
                )}
              </div>
            </Paragraph>
          </div>
        ))}
        <Collapsible label="Listening for Gist (Answer)">
          <p>{gistAnswer}</p>
        </Collapsible>
      </div>
    </div>
  );
};
