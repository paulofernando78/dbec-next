import { WordCardProps, IDictionaryDefinitions } from "../../../interfaces";
import { AudioPlayer } from "../Audioplayer/Audioplayer";
import { Card } from "../Card";

import styles from "./styles.module.css";

export function WordCard({ dictionary }: WordCardProps) {
  return (
    <Card bgColor="#FFF8B8">
      <p className="display-none">
        <b>{dictionary.keyword}</b>
      </p>
      <div>
        {dictionary.definitions.map((definition: IDictionaryDefinitions) => {
          return (
            <>
              {definition.audio && (
                <div className={styles["audio-player-margin-top"]}>
                  <AudioPlayer audioSrc={definition.audio} />
                </div>
              )}
              {definition.word && (
                <p className={`margin-bottom ${styles["margin-right"]}`}>
                  <span className="bold">{definition.word}</span>
                </p>
              )}
              {definition.phonetics && (
                <p className={styles["margin-right"]}>
                  <span className="phonetics">{definition.phonetics}</span>
                </p>
              )}
              <p className={styles["margin-right"]}>
                <span className="times-new-roman-dictionary">
                  {definition.partOfSpeech}
                </span>
              </p>
              <div className="margin-bottom">
                {definition.enDefinition && (
                  <p>
                    <span>
                      {">"} {definition.enDefinition}
                    </span>
                  </p>
                )}
                {definition.ptDefinition && (
                  <p>
                    <span className="portuguese">
                      {">"} {definition.ptDefinition}
                    </span>
                  </p>
                )}
                {definition.examples?.map((example, exampleIndex) => {
                  return (
                    <p key={exampleIndex}>
                      <b>• </b>
                      {example.enExample && (
                        <span
                          dangerouslySetInnerHTML={{
                            __html: example.enExample,
                          }}
                        />
                      )}
                      {example.ptExample && (
                        <span className="portuguese"> {example.ptExample}</span>
                      )}
                    </p>
                  );
                })}
                {definition.synonyms && (
                  <p>
                    <span className="times-new-roman-dictionary">
                      synonym(s):{" "}
                    </span>
                    <span>{definition.synonyms}</span>
                  </p>
                )}
                {definition.antonyms && (
                  <p>
                    <span className="times-new-roman-dictionary">
                      antonym(s):{" "}
                    </span>
                    <span>{definition.antonyms}</span>
                  </p>
                )}
              </div>
            </>
          );
        })}
      </div>
    </Card>
  );
}
