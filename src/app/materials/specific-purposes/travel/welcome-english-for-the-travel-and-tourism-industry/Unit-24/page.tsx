import { UnderConstruction } from "@/components/UnderConstruction";
import { Whiteboard } from "@/components/Whiteboard";

export default function Unit24() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["Unit 24 • We are very sorry"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
