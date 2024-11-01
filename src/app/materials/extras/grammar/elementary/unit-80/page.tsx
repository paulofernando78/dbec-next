import { UnderConstruction } from "@/components/UnderConstruction";
import { Whiteboard } from "@/components/Whiteboard";

export default function GrammarInUseElementaryUnit2() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subTitle="Grammar"
        descriptions={["Elementary", "Unit 80 • every and all"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
