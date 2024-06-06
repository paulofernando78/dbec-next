import Link from "next/link";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

export default function Articles() {
  return (
    <>
      <Whiteboard title="Specific Purposes" subtitle="Technology" descriptions={["Articles"]} />
          <Link href="/specific-purposes/technology/articles/microsoft-announces-new-pcs-ai">
            <p>(May 23, 2024) Microsoft Announces New PCs with Built-in AI</p>
          </Link>
          <Link href="/specific-purposes/technology/articles/microsoft-announces-new-pcs-ai">
            <p>(March 27, 2024) Florida Approves Law Banning Social Media for Children under 14</p>
          </Link>
    </>
  );
}
