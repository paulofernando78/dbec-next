import { UnderConstruction } from "@/components/Molecules/UnderConstruction";
import { Whiteboard } from "@/components/Molecules/Whiteboard";

export default function GrammarInUseElementaryUnit25() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Grammar"
        descriptions={["Elementary", "Unit 25 • What are you doing tomorrow?"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
