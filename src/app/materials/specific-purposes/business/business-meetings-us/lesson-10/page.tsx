import { Whiteboard } from "@/components";
import { UnderConstruction } from "@/components/Molecules/UnderConstruction";

export default function Lesson1() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Business"
        descriptions={[
          "Business MEetings (US)",
          "Lesson 10 • Ending a Meeting",
        ]}
      />
      <div>
        <UnderConstruction />
      </div>
    </>
  );
}
