import { UnderConstruction } from "@/components/UnderConstruction";
import { Whiteboard } from "@/components/Whiteboard";

export default function Unit25() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["Unit 25 • Reservations"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
