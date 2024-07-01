import { AudioPlayer } from "@/components/Audioplayer";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import Link from "next/link";
import React from "react";

export default function Priscila() {
  return (
    <>
    <Whiteboard subtitle="Priscila Tanaca's page"/>
      <div className="line-break">
        <Link href="/students/priscila/resume">
          <p><b>Resúme</b></p>
        </Link>
        
      </div>
    </>
  );
}
