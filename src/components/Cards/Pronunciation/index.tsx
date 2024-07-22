import { AudioPlayer } from "@/components/Audioplayer";
import styles from "./styles.module.css";

export interface Example {
  enExample: string;
  ptExample: string;
}

export interface Word {
  component: (props: {
    audioSrc: string;
    keyword: string;
    label: string;
  }) => JSX.Element;
  componentProps: {
    audioSrc: string;
    keyword: string;
    label: string;
    phonetics: string;
  };
  showHr?: boolean;
}

interface Phonetic {
  applyRedDashedBorder?: boolean;
  beforeText?: string;
  phoneticsComponent?: (props: {
    audioSrc?: string;
    keyword?: string;
    label?: string;
    phonetics?: string;
  }) => JSX.Element;
  phoneticsComponentProps?: {
    audioSrc?: string;
    keyword?: string;
    label?: string;
    phonetics?: string;
  };
  words: Word[];
  exampleAudioSrc: string;
  examples?: Example[];
  showHR?: boolean;
  applyGrid?: boolean;
}

export interface Pronunciation {
  label: string;
  sound?: string;
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
              <p>
                phonetics:{" "}
                <span className="phonetics">{pronunciation.sound}</span>
              </p>
            </div>
            {/* phonetics */}
            {pronunciation.phonetics.map((phonetic, phoneticsIndex) => (
              <div
                key={phoneticsIndex}
                className={`${
                  phonetic.applyRedDashedBorder ? "border-red-dashed" : "border-gray-dashed"
                } ${styles["card-pronunciation-content"]}`}
              >
                {/* beforeText */}
                {phonetic.beforeText && (
                  <p className="bold margin-bottom">{phonetic.beforeText}</p>
                )}

                {/* phoneticsComponents */}

                <div className={styles["phonetics-margin-bottom"]}>
                  {phonetic.phoneticsComponent && (
                    <span>
                      {phonetic.phoneticsComponent({
                        ...phonetic.phoneticsComponentProps,
                      })}
                    </span>
                  )}
                </div>

                <div
                  className={`${
                    phonetic.applyGrid
                      ? styles["grid-words"]
                      : "flex-8px-center-wrap"
                  }`}
                >
                  {/* words */}
                  {phonetic.words.map((word, wordIndex) => (
                    <div key={wordIndex}>
                      <span>{word.component({ ...word.componentProps })}</span>
                    </div>
                  ))}
                </div>

                {/* Audioplayer */}
                <div className="margin-top">
                  <AudioPlayer audioSrc={phonetic.exampleAudioSrc} />
                </div>

                {/* examples */}
                <div className="margin-top">
                  {phonetic.examples?.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="p-font">
                      {example.enExample && (
                        <span
                          dangerouslySetInnerHTML={{
                            __html: `<span class='bold'>•</span> ${example.enExample}`,
                          }}
                        ></span>
                      )}
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
