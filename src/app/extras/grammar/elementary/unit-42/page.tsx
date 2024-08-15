import { UnderConstruction } from "@/components/UnderConstruction";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

export default function GrammarInUseElementaryUnit42() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Grammar"
        descriptions={["Elementary", "Unit 42 • too/either, so am I / neither do I etc."]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
