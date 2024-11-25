import { UnderConstruction } from "@/components/Molecules/UnderConstruction";
import { Whiteboard } from "@/components/Molecules/Whiteboard";

export default function GrammarInUseElementaryUnit2() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Grammar"
        descriptions={["Elementary", "Unit 84 • (a) little, (a) few"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
