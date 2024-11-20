import { UnderConstruction } from "@/components/UnderConstruction";
import { Whiteboard } from "@/components/Whiteboard";

export default function Unit32() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["Unit 32 • Chaning money"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
