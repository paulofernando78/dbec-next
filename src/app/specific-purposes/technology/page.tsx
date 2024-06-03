import Link from "next/link";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

export default function Technology() {
  return (
    <>
      <Whiteboard title="Specific Purposes" subtitle="Technology" />
      <div className="line-break">
          <Link href="/specific-purposes/technology/articles">
            <p>Articles</p>
          </Link>
      </div>
    </>
  );
}
