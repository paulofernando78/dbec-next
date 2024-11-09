import { Whiteboard } from "@/components";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function Lesson1() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subTitle="Business"
        descriptions={["Business MEetings (US)", "Lesson 10 • Ending a Meeting"]}
      />
      <div>
        <UnderConstruction />
      </div>
    </>
  );
}
