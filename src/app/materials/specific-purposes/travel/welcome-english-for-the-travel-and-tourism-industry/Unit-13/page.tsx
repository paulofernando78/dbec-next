import { UnderConstruction } from "@/components/UnderConstruction";
import { Whiteboard } from "@/components/Whiteboard";

export default function Unit13() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["Unit 13 • Answering enquiries"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
