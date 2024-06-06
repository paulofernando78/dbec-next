import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import Link from "next/link";

export default function LawArticles() {
  return (
    <>
      <Whiteboard
        title="Specific-Purposes"
        subtitle="Law"
        descriptions={["articles"]}
      />
      <div className="line-break">
        <Link href="/specific-purposes/law/articles/...">
          <p>
            ...
          </p>
        </Link>
      </div>
    </>
  );
}
