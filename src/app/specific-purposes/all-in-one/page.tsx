import { RegularVerbs } from "@/components/Lessons/RegularVerbs";
import { Whiteboard } from "@/components/Whiteboard";

export default function AllInOne() {
  return (
    <>
      <Whiteboard title="Specific Purposes" subTitle="All-in-one Review" />
      <div className="line-break">
        <div>
          <a href="#">
            <p>Pronouns</p>
          </a>
          <a href="#numbers">
            <p>Cardinal and Ordinal Numbers</p>
          </a>
          <a href="#">
            <p>Verb Tenses</p>
          </a>
          <a href="#">
            <p>Regular and Irregular verbs</p>
          </a>
        </div>
        <div id="numbers"></div>
        <RegularVerbs />
      </div>
    </>
  );
}
