import { UnderConstruction } from "@/components/UnderConstruction";
import { Whiteboard } from "@/components/Whiteboard";

export default function GrammarInUseElementaryUnit3() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subTitle="Grammar"
        descriptions={[
          "Elementary",
          "Unit 3 • I am doing (present continuous)",
        ]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
