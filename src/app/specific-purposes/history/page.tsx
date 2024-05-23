import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

export default function History() {
  return (
    <>
      <Whiteboard title="Specific Purposes" subtitle="History" />
      <div className="line-break">
        <div>
          <p>John VI (John the sixth)</p>
          <p>Peter I (Peter the first)</p>
          <p>Peter II (Peter the second)</p>
        </div>
        <div>
          <p>Charles III</p>
        </div>
      </div>
    </>
  );
}
