import React from "react";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import Link from "next/link";

export default function Math() {
  return (
    <>
      <Whiteboard title="Specific Purposes" subtitle="Job Interviews" />
      <div className="line-break">
        <Link href="/specific-purposes/math/prime-numbers">
          <p>
            <b>Prime Numbers</b>
          </p>
        </Link>
      </div>
    </>
  );
}
