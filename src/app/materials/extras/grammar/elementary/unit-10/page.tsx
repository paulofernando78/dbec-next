import { UnderConstruction } from "@/components/Molecules/UnderConstruction";
import { Whiteboard } from "@/components/Molecules/Whiteboard";

export default function GrammarInUseElementaryUnit10() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Grammar"
        descriptions={["Elementary", "Unit 10 • was / were"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
