import { UnderConstruction } from "@/components/UnderConstruction";
import { Whiteboard } from "@/components/Whiteboard";

export default function Unit42() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["Unit 42 • Dealing with complaints"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
