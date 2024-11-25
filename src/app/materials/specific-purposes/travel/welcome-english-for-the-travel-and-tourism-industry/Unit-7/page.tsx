import { UnderConstruction } from "@/components/Molecules/UnderConstruction";
import { Whiteboard } from "@/components/Molecules/Whiteboard";

export default function Unit7() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["Unit 7 • Taking a booking"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
