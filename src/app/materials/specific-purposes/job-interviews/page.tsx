import Link from "next/link";
import { Whiteboard } from "@/components/Whiteboard";

export default function JobInterviews() {
  return (
    <>
      <Whiteboard title="Specific Purposes" subTitle="Job Interviews" />
      <div className="line-break">
        <Link href="">
          <p>
            <b>Key Job Interview Questions</b>
          </p>
        </Link>
        <p>
          1. Tell me about yourself: This is usually an open-ended question
          where the interviewer wants to hear a brief summary of your
          professional background, skills, and experiences.
        </p>
      </div>
      <Link href="/specific-purposes/job-interviews/priscila">Priscila</Link>
    </>
  );
}
