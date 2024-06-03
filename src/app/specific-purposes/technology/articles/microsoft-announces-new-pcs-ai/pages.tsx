import Link from "next/link";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

export default function Microsoft() {
  return (
    <>
      <Whiteboard title="Specific Purposes" subtitle="Technology" descriptions={["Articles"]} />
      <div className="line-break">
          <p>Teste</p>
      </div>
    </>
  );
}
