import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import CardinalOrdinalNumbers from "@/components/exercises/CardinalOrdinalNumbers/CardinalOrdinalNumbers";

export default function Resumao() {
  return (
    <>
      <Whiteboard title="Specific Purposes" subtitle="Resumão" />
      <div className="line-break">
        <div>
          <a href="#">
            <p>Pronouns</p>
          </a>
          <a href="#">
            <p>Cardinal and Ordinal Numbers</p>
          </a>
          <a href="#">
            <p>Verb Tenses</p>
          </a>
          <a href="#">
            <p>Regular and Irregular verbs</p>
          </a>
        </div>
        <CardinalOrdinalNumbers />
      </div>
    </>
  );
}
