import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import Link from "next/link";
import React from "react";

export default function JobInterviews() {
  return (
    <div>
      <Whiteboard title="Specific Purposes" subtitle="Job Interviews" />
      <div className="line-break">
        <p>
          <b>Key Job Interview Questions</b>
        </p>
        <p>
          1. Tell me about yourself: This is usually an open-ended question
          where the interviewer wants to hear a brief summary of your
          professional background, skills, and experiences.
        </p>
        <p>
          <i>Example 1</i>
        </p>
      </div>
      <Link href="/specific-purposes/job-interviews/priscila">Priscila</Link>
    </div>
  );
}
