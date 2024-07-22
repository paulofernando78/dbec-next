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
        <Link href="/extras/skills/listening/articles/arts-and-culture/new-food-flavors-coming-to-stores">
          <p>New Food falvors coming to stores (May 24, 2024)</p>
        </Link>
      </div>
    </>
  );
}
