import { Whiteboard } from "@/components/Whiteboard/Whiteboard";


export default function Resumao() {
  return (
    <>
      <Whiteboard title="Specific Purposes" subtitle="All-in-one Review" />
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
          
      </div>
    </>
  );
}
