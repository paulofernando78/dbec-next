import { Whiteboard } from "@/components";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function Lesson1() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subTitle="Business"
        descriptions={["Business MEetings (US)", "Lesson 3 • Beginning a Presentation"]}
      />
      <div>
        <UnderConstruction />
      </div>
    </>
  );
}
