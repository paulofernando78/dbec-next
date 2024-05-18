import Link from "next/link";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

export default function Medicine() {
  return (
    <div>
      <Whiteboard title="Specific Purposes" subtitle="Medicine" />
        <Link href="/specific-purposes/medicine/vocabulary">
          <p>
            <b>Vocabulary</b>
          </p>
        </Link>
        <Link href="/specific-purposes/medicine/articles">
          <p>
            <b>Articles</b>
          </p>
        </Link>
      </div>
  );
}
