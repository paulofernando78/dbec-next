import Link from "next/link";
import { Whiteboard } from "@/components/Whiteboard";

export default function Business() {
  return (
    <div>
      <Whiteboard title="Specific Purposes" subTitle="Business" />
      <Link href="/materials/specific-purposes/business/business-meetings-us">
        <p>Business Meetings (US)</p>
      </Link>
      <Link href="/materials/specific-purposes/business/sbelaa">
        <p>Speak Business English Like an American</p>
      </Link>
      <Link href="/materials/specific-purposes/business/sbbelaa">
        <p>Speak BETTER Business English Like an American</p>
      </Link>
    </div>
  );
}
