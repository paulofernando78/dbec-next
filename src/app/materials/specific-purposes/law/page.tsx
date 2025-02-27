import Link from "next/link";
import { Whiteboard } from "@/components/Molecules/Whiteboard/Whiteboard";

export default function Law() {
  return (
    <>
      <Whiteboard title="Specific Purposes" subtitle="Law" />
      <div className="line-break">
        <Link href="https://dictionary.law.com/">
          <p>Legal Dictionary</p>
        </Link>
        <hr />
        <div>
          <Link href="/specific-purposes/law/vocabulary">
            <p>Vocabulary</p>
          </Link>
          <Link href="/specific-purposes/law/articles">
            <p>Articles</p>
          </Link>
        </div>
      </div>
    </>
  );
}
