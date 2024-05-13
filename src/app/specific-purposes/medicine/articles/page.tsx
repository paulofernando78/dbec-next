import Link from "next/link";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

export default function Articles() {
  return (
    <div>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Medicine"
        descriptions={["Articles"]}
      />
        <Link href="/specific-purposes/medicine/articles/five-tips-to-get-better-sleep"><p>Five Tips to Get Better Sleep (April 29, 2024)</p></Link>
      <div>
        <Link href="/specific-purposes/medicine/articles/studies-gene-treatment-lets-children-deaf-at-birth-hear">
          <p>
            Studies: Gene Treatment Lets Children Deaf at Birth Hear (Jan 29, 2024)
          </p>
        </Link>
      </div>
    </div>
  );
}
