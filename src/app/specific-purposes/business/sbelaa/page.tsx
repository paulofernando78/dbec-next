import { DescriptionCard } from "@/components/Cards/DescriptionCard";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

export default function SpeakBusinessEnglishLikeAnAmerican() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Business"
        descriptions={["Speak Business English Like an American"]}
      />
      <div>{/* <DescriptionCard descriptions={descripttion}/> */}</div>
    </>
  );
}
