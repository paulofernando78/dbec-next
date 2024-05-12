import { CardDescription } from "@/components/CardDescription/CardDescription";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

export default function SpeakBusinessEnglishLikeAnAmerican() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Business"
        descriptions={["Speak Business English Like an American"]}
      />
      <div>
        <CardDescription
        label="Units 1-5"
        content="AAA"
        link="/specific-purposes/business/sbelaa/unit-1"
        linkLabel="Lesson 1 • Talking About a New Project"
        />
      </div>
    </>
  );
}
