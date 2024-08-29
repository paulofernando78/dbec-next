import Link from "next/link";
import { Whiteboard } from "@/components/Whiteboard";

export default function Medicine() {
  return (
    <div>
      <Whiteboard title="Specific Purposes" subtitle="Medicine" />
      <Link href="/specific-purposes/medicine/vocabulary">
        <p>
          <b>Vocabulary</b>
        </p>
      </Link>
    </div>
  );
}
