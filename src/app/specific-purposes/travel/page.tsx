import { Whiteboard } from "@/components/Whiteboard";
import Link from "next/link";

export default function Travel() {
  return (
    <>
      <Whiteboard title="Specific Purposes" subTitle="Travel" />
      <div className="line-break">
        <Link href="/specific-purposes/travel/welcome-english-for-the-travel-and-tourism-industry">
          <p>Welcome • English for travel and tourism industry (Cambridge)</p>
        </Link>
      </div>
    </>
  );
}
