export interface Text {
  prompt: string;
}

interface TextProps {
  texts: Text[];
}

export default function Text({ texts }: TextProps) {
  return (
    <div>
      {texts.map((text, index) => (
        <p key={index}>{text.prompt}</p>
      ))}
    </div>
  );
}
