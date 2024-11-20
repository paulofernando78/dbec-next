import { UnderConstruction } from "@/components/UnderConstruction";
import { Whiteboard } from "@/components/Whiteboard";

export default function Unit23() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["Unit 23 • Avoiding mistakes"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
