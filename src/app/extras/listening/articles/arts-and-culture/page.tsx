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
        <Link href="/extras/listening/articles/arts-and-culture/new-food-flavors-coming-to-stores">
          <p>(May 24, 2024) New Food Flavors Coming to Stores</p>
        </Link>
      </div>
    </>
  );
}
