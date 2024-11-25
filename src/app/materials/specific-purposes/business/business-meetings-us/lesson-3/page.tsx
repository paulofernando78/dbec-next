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
          "Lesson 3 • Beginning a Presentation",
        ]}
      />
      <div>
        <UnderConstruction />
      </div>
    </>
  );
}
