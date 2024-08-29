

interface ParagraphData {
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
        <p>{paragraph.paragraph}</p>
        <p></p>
      </div>
    ))}
    </>
  );
};
