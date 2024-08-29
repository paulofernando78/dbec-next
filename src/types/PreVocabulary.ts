export interface VocabularyComponent {
    component: (props: { audioSrc: string; label: string }) => JSX.Element;
    componentProps: any;
  }
  
  export interface PreVocabularyProps {
    preVocabularies: VocabularyComponent[];
  }