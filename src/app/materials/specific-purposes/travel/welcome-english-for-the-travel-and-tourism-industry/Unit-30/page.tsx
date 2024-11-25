import { UnderConstruction } from "@/components/Molecules/UnderConstruction";
import { Whiteboard } from "@/components/Molecules/Whiteboard";

export default function Unit30() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["Unit 30 • The perfect hotel"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
