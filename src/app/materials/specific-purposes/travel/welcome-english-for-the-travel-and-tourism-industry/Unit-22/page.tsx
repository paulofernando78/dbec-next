import { UnderConstruction } from "@/components/UnderConstruction";
import { Whiteboard } from "@/components/Whiteboard";

export default function Unit22() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["Unit 22 • Confirming reservations"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
