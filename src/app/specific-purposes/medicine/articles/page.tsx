import Link from "next/link";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

export default function Articles() {
  return (
    <main>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Medicine"
        descriptions={["Articles"]}
      />
      <div>
        <Link href="/specific-purposes/medicine/articles/studies-gene-treatment-lets-children-deaf-at-birth-hear">
          <p>
            <b>Studies: Gene Treatment Lets Children Deaf at Birth Hear (Jan 29, 2024)</b>
          </p>
        </Link>
      </div>
    </main>
  );
}
