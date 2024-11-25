import { Whiteboard } from "@/components/Molecules/Whiteboard";
import { UnderConstruction } from "@/components/Molecules/UnderConstruction";

export default function GrammarInUseIntermediate() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Grammar"
        descriptions={["Intermediate", "Unit 34 • should 2"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
