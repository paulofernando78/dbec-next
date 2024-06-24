import styles from "./styles.module.css";

export interface Example {
  enExample: string;
  ptExample: string
}

export interface Word {
  component: (props: { audioSrc: string; label: string }) => JSX.Element;
  componentProps: { audioSrc: string; keyword?: string; label: string; phonetics: string };
  showHr?: boolean;
}

interface Phonetic {
  applyRedDashedBorder?: boolean;
  beforeText?: string;
  words: Word[];
  examples?: Example[];
  showHR?: boolean;
  applyGrid?: boolean
}

export interface Pronunciation {
  label: string;
  phonetics: Phonetic[];
}

interface PronunciationProps {
  pronunciations: Pronunciation[];
}

export const PronunciationCard = ({ pronunciations }: PronunciationProps) => {
  return (
    <>
      <div className={styles["card-pronunciation"]}>
        {/* pronunciations */}
        {pronunciations.map((pronunciation, pronunciationIndex) => (
          <div key={pronunciationIndex}>
            <div className={styles["card-pronunciation-label"]}>
              <p className="bold">{pronunciation.label}</p>
            </div>
            {/* phonetics */}
            {pronunciation.phonetics.map((phonetic, phoneticsIndex) => (
              <div
                key={phoneticsIndex}
                className={`${
                  phonetic.applyRedDashedBorder ? "border-red-dashed" : ""
                } ${styles["card-pronunciation-content"]}`}
              >
                {/* beforeText */}
                {phonetic.beforeText && (
                  <p className="bold margin-bottom">{phonetic.beforeText}</p>
                )}

                <div className={`${phonetic.applyGrid ? styles["grid-words"] : "flex-8px-center-wrap"}`}>
                  {/* words */}
                  {phonetic.words.map((word, wordIndex) => (
                    <div key={wordIndex}>
                      <span>{word.component({ ...word.componentProps })}</span>
                    </div>
                  ))}
                </div>

                {/* examples */}
                <div className="margin-top">
                  <p className="bold margin-bottom">Listen and repeat.</p>
                  {phonetic.examples?.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="p-font">
                      {example.enExample && <span dangerouslySetInnerHTML={{ __html: `<span class='bold'>•</span> ${example.enExample}`}}></span>}
                      <span className="portuguese"> {example.ptExample}</span>
                    </div>
                  ))}
                </div>
                {/* showHR */}
                {phonetic.showHR && <hr className={styles["hr-margin"]} />}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};
