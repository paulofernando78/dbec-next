export interface IQuestion {
  title?: string;
  subtitle: string;
  options: {
    label: string;
    isCorrect: boolean;
  }[];
}
