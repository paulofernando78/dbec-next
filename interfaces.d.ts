export interface IDictionaryDefinitionsNotes {
  note?: string;
}
export interface IDictionaryDefinitionsExamples {
  enExample?: string;
  ptExample?: string;
}

export interface IDictionaryDefinitions {
  audio?: string;
  word?: string
  phonetics?: string;
  partOfSpeech: string;
  enDefinition?: string;
  ptDefinition?: string;
  examples?: IDictionaryDefinitionsExamples[];
  notes?: IDictionaryDefinitionsNotes[];
  synonyms?: string;
  antonyms?: string;
}

export interface IDictionary {
  definitions: IDictionaryDefinitions[];
  keyword: string;
}

export interface WordCardProps {
  dictionary: IDictionary;
}
