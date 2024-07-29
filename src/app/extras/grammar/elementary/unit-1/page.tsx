import { Card } from "@/components/Cards/Card";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import React from "react";

export default function Unit1() {
  return (
    <>
    <Whiteboard title="Extras" subtitle="Grammar" descriptions={["Elementary", "Unit 1 • am/is/are"]}/>
      <div className="line-break">
        {/* A */}
        <Card bgColor="#EF4444" textColor="white">
          <p className="bold">A</p>
        </Card>
        <p>...</p>

        {/* B */}
        <Card bgColor="#EF4444" textColor="white">
          <p className="bold">B</p>
        </Card>
        <p>...</p>

        {/* C */}
        <Card bgColor="#EF4444" textColor="white">
          <p className="bold">C</p>
        </Card>
        <p>...</p>

        {/* Exercises */}
        <Card bgColor="lightgray" textColor="black">
          <p className="bold">Exercises</p>
        </Card>
      </div>
    </>
  );
}
