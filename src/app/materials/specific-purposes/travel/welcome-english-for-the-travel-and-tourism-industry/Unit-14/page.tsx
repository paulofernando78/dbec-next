import { UnderConstruction } from "@/components/Molecules/UnderConstruction";
import { Whiteboard } from "@/components/Molecules/Whiteboard";

export default function Unit14() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["Unit 14 • Taking messages"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
