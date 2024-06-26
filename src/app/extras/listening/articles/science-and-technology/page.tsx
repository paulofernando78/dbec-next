import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import Link from "next/link";

export default function ScienceAndTechnologyArticles() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Listening"
        descriptions={["Articles", "Science & Technology"]}
      />
      <div>
        <Link href="/extras/listening/articles/science-and-technology/microsoft-announces-new-pcs-with-ai">
          <p> Microsoft Announces New PCs with Built-in AI (May 23, 2024)</p>
        </Link>
        <Link href="/extras/listening/articles/science-and-technology/florida-approves-law-banning-social-media">
          <p>
            Florida Approves Law Banning Social Media for
            Children under 14 (March 27, 2024) 
          </p>
        </Link>
        <Link href="/extras/listening/articles/science-and-technology/israeli-scientists-announce-creation-of-embryo-model-in-lab">
          <p>
            Israeli Scientists Announce Creation of Embryo
            Model in Lab (September 11, 2023)
          </p>
        </Link>
      </div>
    </>
  );
}
