import { Card } from "@/components/Cards/Card";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

export default function Dentistry() {
  return (
    <>
      <Whiteboard title="Specific Purposes" subtitle="Dentistry" />
      <div className="line-break">
        <Card>
          <p>
            <b>Vocabulary</b>
          </p>
        </Card>
        <div>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
        </div>
      </div>
    </>
  );
}
