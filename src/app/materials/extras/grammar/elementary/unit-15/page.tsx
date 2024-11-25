import { UnderConstruction } from "@/components/Molecules/UnderConstruction";
import { Whiteboard } from "@/components/Molecules/Whiteboard";

export default function GrammarInUseElementaryUnit15() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Grammar"
        descriptions={[
          "Elementary",
          "Unit 15 • I have done (present present 1)",
        ]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
