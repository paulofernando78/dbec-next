import { Whiteboard } from "@/components/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function GrammarInUseIntermediate() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subTitle="Grammar"
        descriptions={["Intermediate", "Unit 34 • should 2"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
