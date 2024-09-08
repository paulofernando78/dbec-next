import { Card } from "../Cards/Card";


export interface ParagraphData {
  paragraph: string
}

interface ParagraphProps {
  paragraphs: ParagraphData[]
}

export const Paragraph = ({ paragraphs }: ParagraphProps) => {
  return (
    <>
    {paragraphs.map((paragraph, index) => (
      <div key={index}>
        <Card bgColor="lightgrey"><p className="bold">Paragraph {index + 1}</p></Card>
        <p>{paragraph.paragraph}</p>
        <p></p>
      </div>
    ))}
    </>
  );
};
