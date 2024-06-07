import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import Link from "next/link";

export default function ScienceAndTechnologyArticles() {
  return (
    <>
      <Whiteboard title="Extras" subtitle="Listening" descriptions={["Articles", "Science & Technology"]}/>
      <div>
        <Link href="/extras/listening/articles/science-and-technology/Israeli-scientists-announce-creation-of-embryo-model-in-lab">
        <p>(September 11, 2023) Israeli Scientists Announce Creation of Embryo Model in Lab</p>
        </Link>
      </div>
    </>
  );
}
