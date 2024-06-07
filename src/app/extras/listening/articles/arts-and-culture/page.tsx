import Link from "next/link";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

export default function ArtsAndCulture() {
  return (
    <>
      <Whiteboard
        title="Listening / Reading / Speaking"
        subtitle="Articles"
        descriptions={["Arts and Culture"]}
      />
      <div>
        <Link href="">
          <p>...</p>
        </Link>
      </div>
    </>
  );
}
