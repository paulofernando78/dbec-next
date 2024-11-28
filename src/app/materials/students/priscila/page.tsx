import { AudioPlayer } from "@/components/Atoms/Audioplayer";
import { Whiteboard } from "@/components/Molecules/Whiteboard";
import Link from "next/link";
import React from "react";

export default function Priscila() {
  return (
    <>
      <Whiteboard title="Student's page" subtitle="Priscila Tanaca" />
      <div className="line-break">
        <Link href="/students/priscila/resume">
          <p>
            <b>Resúme</b>
          </p>
        </Link>
        <div className="line-break">
          <p className="bold">Dates</p>
          <div>
            <p>...</p>
          </div>
        </div>
      </div>
    </>
  );
}
