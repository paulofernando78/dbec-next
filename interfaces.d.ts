export interface IDictionaryDefinitionsThesauri {
    synonyms?: string;
    antonyms?: string;
  }
  
  export interface IDictionaryDefinitionsExamples {
    enExample?: string;
    ptExample?: string;
  }
  
  export interface IDictionaryDefinitions {
    enDefinition?: string;
    ptDefinition?: string;
    examples: IDictionaryDefinitionsExamples[];
    thesauri?: IDictionaryDefinitionsThesauri[];
  }
  
  export interface IDictionary {
    audio: string;
    keyword: string;
    phonetics?: string;
    partOfSpeech: string;
    definitions: IDictionaryDefinitions[];
  }
  
  export interface ICardWord {
    dictionary: IDictionary;
  }