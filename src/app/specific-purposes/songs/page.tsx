import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import Link from "next/link";
import React from "react";

export default function Songs() {
  return (
    <>
      <Whiteboard title="Specific Purposes" subtitle="Songs" />
      <div>
        <Link href="/specific-purposes/songs/taylor-swift">
          <p>Taylor Swift</p>
        </Link>
      </div>
    </>
  );
}
