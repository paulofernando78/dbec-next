import { Whiteboard } from "@/components";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function Lesson1() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Business"
        descriptions={[
          "Business MEetings (US)",
          "Lesson 5 • Giving a Presentation (Part B)",
        ]}
      />
      <div>
        <UnderConstruction />
      </div>
    </>
  );
}
