import { DashboardNotes } from "@/components/DashboardNotes/DashboardNotes";
import HowYouFeeling from "@/components/HowYouFeeling/HowYouFeeling";
import { Welcome } from "@/components/Welcome/Welcome";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import Link from "next/link";
import React from "react";

export default function AlexOishi() {
  return (
    <>
      <Whiteboard title="Student's page" subtitle="Alex Oishi" />
      <div className="line-break">
        <Welcome />
        <HowYouFeeling />
        <DashboardNotes />
      </div>
    </>
  );
}
