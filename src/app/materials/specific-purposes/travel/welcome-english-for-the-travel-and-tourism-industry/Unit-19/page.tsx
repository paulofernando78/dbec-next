import { UnderConstruction } from "@/components/Molecules/UnderConstruction";
import { Whiteboard } from "@/components/Molecules/Whiteboard";

export default function Unit19() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["Unit 19 • Eating habits"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
