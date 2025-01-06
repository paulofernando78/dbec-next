"use client";

import { BoardCard, ScrollToTop, Whiteboard } from "@/components";

export default function LifeIsAVideoGame() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Listening"
        descriptions={["..."]}
        subDescription="..."
      />
      <div className="line-break">
        <BoardCard label="Introduction" bgColor="black" textColor="white">
          <p>...</p>
        </BoardCard>
        <BoardCard label="Introduction" bgColor="black" textColor="white">
          <p>...</p>
        </BoardCard>

        <ScrollToTop />
      </div>
    </>
  );
}
