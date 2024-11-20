import { UnderConstruction } from "@/components/UnderConstruction";
import { Whiteboard } from "@/components/Whiteboard";

export default function Unit31() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["Unit 31 • How would you like to pay?"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
