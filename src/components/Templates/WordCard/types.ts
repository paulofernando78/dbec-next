export interface IDictionaryDefinitionsNotes {
  note?: string;
}
export interface IDictionaryDefinitionsExamples {
  enExample?: string;
  ptExample?: string;
}

export interface IDictionaryDefinitions {
  audio?: string;
  word?: string;
  phonetics?: string;
  partOfSpeech: string;
  enDefinition?: string;
  ptDefinition?: string;
  ptWordDefinition?: string;
  examples?: IDictionaryDefinitionsExamples[];
  notes?: IDictionaryDefinitionsNotes[];
  synonyms?: string;
  antonyms?: string;
  seeAlso?: string; // Changed to optional
  note?: string; // Changed to optional
}

export interface IDictionary {
  definitions: IDictionaryDefinitions[];
  keyword: string;
}

export interface WordCardProps {
  dictionary: IDictionary;
}
