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
        <Link href="/extras/listening/articles/health-and-lifestyle/weight-loss-options-for-chilren-are-hard-to-get">
          <p>Weight-loss Options for Children Are Hard to Get (June 24, 2024)</p>
        </Link>
        <Link href="/extras/listening/articles/health-and-lifestyle/researchers-find-gene-behind-disorder-causing-intellectual-disability">
          <p>Researchers Find Gene behind Disorder Causing Intellectual Disability(June 24, 2024)</p>
        </Link>
        <Link href="/extras/listening/articles/health-and-lifestyle">
          <p>Scientists Test mRNA Vaccines to Protect Against Bird Flu (June 10, 2024)</p>
        </Link>
        <Link href="/extras/listening/articles/health-and-lifestyle">
          <p>Five Tips to Get Better Sleep (April 29, 2024)</p>
        </Link>
        <Link href="/extras/listening/articles/health-and-lifestyle">
          <p>Study: Humans Give More Viruses to Animals Than They Give Us (April 08, 2024)</p>
        </Link>
        <Link href="/extras/listening/articles/health-and-lifestyle">
          <p>Studies: Gene Treatment Lets Children Deaf at Birth Hear (January 24, 2024)</p>
        </Link>
      </div>
    </>
  );
}
