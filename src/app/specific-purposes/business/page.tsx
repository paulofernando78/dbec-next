import Link from "next/link";
import { Whiteboard } from "@/components/Whiteboard";

export default function Business() {
  return (
    <div>
      <Whiteboard title="Specific Purposes" subtitle="Business" />
      <Link href="/specific-purposes/business/sbelaa">
        <p>Speak Business English Like an American</p>
      </Link>
      <Link href="/specific-purposes/business/sbbelaa">
        <p>Speak BETTER Business English Like an American</p>
      </Link>
    </div>
  );
}
