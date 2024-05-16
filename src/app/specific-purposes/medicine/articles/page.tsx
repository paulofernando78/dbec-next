import Link from "next/link";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

export default function Articles() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Medicine"
        descriptions={["Articles"]}
      />
      <Link href="/specific-purposes/medicine/articles/five-tips-to-get-better-sleep">
        <p>(April 29, 2024) Five Tips to Get Better Sleep</p>
      </Link>
      <Link href="/specific-purposes/medicine/articles/study-humans-give-more-viruses-to-animals-than-they-give-us">
        <p>(April, 8, 2024) Study: Humans Give More Viruses to Animals Than They Give Us</p>
        </Link>
      <Link href="/specific-purposes/medicine/articles/studies-gene-treatment-lets-children-deaf-at-birth-hear">
        <p>
        (Jan 29, 2024) Studies: Gene Treatment Lets Children Deaf at Birth Hear 
        </p>
      </Link>
    </>
  );
}
