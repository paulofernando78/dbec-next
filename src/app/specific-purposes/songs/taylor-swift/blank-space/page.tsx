import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { VideoPlayer } from "@/components/VideoPlayer/VideoPlayer";

export default function TaylorSwiftbBlankSpace() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Songs"
        descriptions={["Taylor Swift", "Blank Space"]}
      />
      <div className="line-break">
        <VideoPlayer videoSrc="https://www.youtube.com/embed/e-ORhEE9VVg?si=lF1iWor9wVSYgPzB" />
        <div>
          <p>Nice to meet you, where you been?</p>
          <p className="portuguese">
            Prazer em te conhecer, onde você esteve?
          </p>
        </div>
        <div>
          <p></p>
        </div>
      </div>
    </>
  );
}
