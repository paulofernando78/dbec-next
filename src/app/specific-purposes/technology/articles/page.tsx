import Link from "next/link";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

export default function Articles() {
  return (
    <>
      <Whiteboard title="Specific Purposes" subtitle="Technology" descriptions={["Articles"]} />
      <div className="line-break">
          <Link href="/specific-purposes/technology/articles/microsoft-announces-new-pcs-ai">
            <p>(May 23 2024) Microsoft Announces New PCs with Built-in AI</p>
          </Link>
      </div>
    </>
  );
}
