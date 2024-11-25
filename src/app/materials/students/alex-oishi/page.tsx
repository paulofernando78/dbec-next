import { DashboardNotes } from "@/components/Molecules/DashboardNotes/DashboardNotes";
import HowYouFeeling from "@/components/Molecules/HowYouFeeling";
import { Welcome } from "@/components/Molecules/Welcome";
import { Whiteboard } from "@/components/Molecules/Whiteboard";
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
