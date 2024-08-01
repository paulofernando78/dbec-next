import { WordCardProps, IDictionaryDefinitions } from "../../../interfaces";
import { AudioPlayer } from "../Audioplayer";
import { Card } from "../Cards/Card";

import styles from "./styles.module.css";

export function WordCard({ dictionary }: WordCardProps) {
  return (
    <div className={styles["word-card-margin"]}>
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
                <div className="margin-bottom white-space-pre-wrap">
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
                          <span className="portuguese">
                            {" "}
                            {example.ptExample}
                          </span>
                        )}
                      </p>
                    );
                  })}
                  <div className="margin-top">
                    {definition.notes?.map((note, noteIndex) => {
                      return (
                        <p key={noteIndex}>
                          {note.note && (
                            <span
                              dangerouslySetInnerHTML={{
                                __html: note.note,
                              }}
                            />
                          )}
                        </p>
                      );
                    })}
                  </div>
                  {definition.synonyms && (
                    <p>
                      <span className="times-new-roman-dictionary">
                        synonyms:{" "}
                      </span>
                      <span>{definition.synonyms}</span>
                    </p>
                  )}
                  {definition.antonyms && (
                    <p>
                      <span className="times-new-roman-dictionary">
                        antonyms:{" "}
                      </span>
                      <span>{definition.antonyms}</span>
                    </p>
                  )}
                  {definition.seeAlso && (
                    <p>
                      <span className="times-new-roman-dictionary">
                        See also:{" "}
                      </span>
                      <span>{definition.seeAlso}</span>
                    </p>
                  )}
                </div>
              </>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
