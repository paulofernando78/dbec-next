import { UnderConstruction } from "@/components/UnderConstruction";
import { Whiteboard } from "@/components/Whiteboard";

export default function Unit35() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["Unit 35 • To and from the airport"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
