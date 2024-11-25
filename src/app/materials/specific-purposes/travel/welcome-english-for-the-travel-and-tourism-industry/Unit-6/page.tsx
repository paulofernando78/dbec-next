import { UnderConstruction } from "@/components/Molecules/UnderConstruction";
import { Whiteboard } from "@/components/Molecules/Whiteboard";

export default function Unit6() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["Unit 6 • Asking questions"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
