import Link from "next/link";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

export default function HealthAndLifestyle() {
  return (
    <>
      <Whiteboard
        title="Listening / Reading / Speaking"
        subtitle="Articles"
        descriptions={["Health & Lifestyle"]}
      />
      <div>
        <Link href="">
          <p>...</p>
        </Link>
      </div>
    </>
  );
}
