import { Whiteboard } from "@/components/Whiteboard";

export default function Unit1() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["Unit 42 • Dealing with complaints"]}
      />
      <div className="line-break">
        <p>
          <b>...</b>
        </p>
      </div>
    </>
  );
}
