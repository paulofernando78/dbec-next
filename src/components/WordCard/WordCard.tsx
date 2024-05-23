import {
  WordCardProps,
  IDictionaryDefinitions,
  IDictionaryDefinitionsThesauri,
} from "../../../interfaces";
import { AudioPlayer } from "../Audioplayer/Audioplayer";
import { Card } from "../Card/Card";

import styles from "./WordCard.module.css";

export function WordCard({ dictionary }: WordCardProps) {
  return (
    <div className={styles["card-word-margin-top"]}>
      <Card bgColor="#FFF8B8">
        <div className={styles["audio-player-margin-top"]}>
          <AudioPlayer audioSrc={dictionary.audio} />
        </div>

        {/* Palavra, fonética e sua classe gramátical*/}
        <div className="margin-bottom">
          <p className={styles["margin-right"]}>
            <b>{dictionary.keyword}</b>
          </p>
          <p className={styles["margin-right"]}>
            <span className="phonetics">{dictionary.phonetics}</span>
          </p>
          <p className={styles["margin-right"]}>
            <span className="times-new-roman-dictionary">
              {dictionary.partOfSpeech}
            </span>
          </p>
        </div>

        {/* Descrição, definição, tradução, sinônimos e antônimos */}
        <div>
          {dictionary.definitions.map((definition: IDictionaryDefinitions) => {
            return (
              <>
                {/* Se houver uma definição em inglês > Exiba-a */}
                <div className="margin-bottom">
                  {definition.enDefinition && (
                    <p>
                      <span>
                        {">"} {definition.enDefinition}
                      </span>
                    </p>
                  )}
                  {/* Se houver uma definição em português > Exiba-a */}
                  {definition.ptDefinition && (
                    <p>
                      <span className="portuguese">
                        {">"} {definition.ptDefinition}
                      </span>
                    </p>
                  )}

                  {/* Percorre a lista de exemplos da palavra em frases*/}
                  {definition.examples.map((example, index) => {
                    return (
                      <p key={index}>
                        <b>• </b>
                        {/* Se houver um exemplo em inglês > Exiba-o */}
                        {example.enExample && <span>{example.enExample} </span>}

                        {/* Se houver um exemplo em português > Exiba-o */}
                        {example.ptExample && (
                          <span className="portuguese">
                            {example.ptExample}
                          </span>
                        )}
                      </p>
                    );
                  })}

                  {/* Percorre a lista de sinônimos e antônimos da palavra*/}
                  {definition.thesauri?.map(
                    (thesaurus: IDictionaryDefinitionsThesauri) => {
                      return (
                        <>
                          {/* Se houver um sinônimo > Exiba-o */}
                          {thesaurus.synonyms && (
                            <p>
                              <span className="times-new-roman-dictionary">
                                synonym(s):{" "}
                              </span>
                              <span>{thesaurus.synonyms}</span>
                            </p>
                          )}
                          {/* Se houver um antônimos > Exiba-o */}
                          {thesaurus.antonyms && (
                            <p>
                              <span className="times-new-roman-dictionary">
                                antonym(s):{" "}
                              </span>
                              <span>{thesaurus.antonyms}</span>
                            </p>
                          )}
                        </>
                      );
                    }
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
