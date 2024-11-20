import { UnderConstruction } from "@/components/UnderConstruction";
import { Whiteboard } from "@/components/Whiteboard";

export default function Unit34() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["Unit 34 • Is service included?"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
