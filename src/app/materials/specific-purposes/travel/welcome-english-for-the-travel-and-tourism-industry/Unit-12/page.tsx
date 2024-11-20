import { UnderConstruction } from "@/components/UnderConstruction";
import { Whiteboard } from "@/components/Whiteboard";

export default function Unit12() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["Unit 12 • How may I helo you?"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
