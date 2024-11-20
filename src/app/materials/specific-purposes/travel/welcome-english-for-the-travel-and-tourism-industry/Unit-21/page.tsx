import { UnderConstruction } from "@/components/UnderConstruction";
import { Whiteboard } from "@/components/Whiteboard";

export default function Unit21() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["Unit 21 • Responding to enquiries"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
